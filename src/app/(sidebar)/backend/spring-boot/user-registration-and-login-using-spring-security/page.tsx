import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import HighlightCode from "@/components/highlight/highlight";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import {
  USER_REGISTRATION_AND_LOGIN_USING_SPRING_SECURITY as ARTICLE
} from "@/lib/data/article/backend/spring-boot";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const SECURITY_CONFIG = 
`@Configuration
@EnableWebSecurity
public class SecurityConfig {
  
  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
  
  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
      .authorizeHttpRequests(auth -> auth
        .requestMatchers("/auth/**", "/css/**", "/js/**", "/").permitAll()
        .anyRequest().authenticated()
      )
      .formLogin(form -> form
        .loginPage("/auth/login")
        .loginProcessingUrl("/auth/login")
        .defaultSuccessUrl("/event/list", true)
        .failureUrl("/auth/login?error=true")
        .permitAll()
      )
      .logout(logout -> logout
        .logoutUrl("/logout")
        .logoutSuccessUrl("/auth/login?logout=true")
        .permitAll()
      ).csrf(AbstractHttpConfigurer::disable); // Disable CSRF for simplicity
      
    return http.build();
  }
}`;

const USER_ROLE_ENTITY = 
`@Entity
@Table(name = "user_roles")
@Getter @Setter
public class UserRole {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  
  private String userRoleName;

  @OneToMany(mappedBy = "userRole", cascade = CascadeType.ALL)
  private List<User> user;
}`;

const USER_ENTITY = 
`@Entity
@Table(name = "users")
@Getter @Setter
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  
  private String firstName;
  
  private String lastName;
  
  @Column(unique = true)
  private String emailAddress;
  
  private String password;
    
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "userRoleId", referencedColumnName = "id")
  private UserRole userRole;
}`;

const USER_ROLE_REPOSITORY = 
`@Repository
public interface UserRoleRepository extends JpaRepository<UserRole, Integer> {
  Optional<UserRole> findByUserRoleName(String userRoleName);
}`;

const CUSTOM_USER_PRINCIPAL = 
`@Getter @Setter
@AllArgsConstructor
public class CustomUserPrincipal implements UserDetails {
  private User user;
  
  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return List.of(new SimpleGrantedAuthority("ROLE_" + user.getUserRole().getUserRoleName()));
  }

  @Override
  public String getUsername() {
    return user.getEmailAddress();
  }
  
  @Override
  public String getPassword() {
    return user.getPassword();
  }
  
  // Additional methods to access user data
  public String getFullName() {
    return user.getFirstName() + " " + user.getLastName();
  }
  
  public Integer getId() {
    return user.getId();
  }
}`;

const USER_REPOSITORY = 
`@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
  Optional<User> findByEmailAddress(String emailAddress);
  boolean existsByEmailAddress(String emailAddress);
}`;

const USER_DETAILS_SERVICE = 
`@Service
@AllArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
  private final UserRepository userRepository;
  
  @Override
  @Transactional(readOnly = true)
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userRepository.findByEmailAddress(username)
      .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
    
    return new CustomUserPrincipal(user);
  }
}`;

const USER_REGISTRATION_DTO = 
`@Getter @Setter
public class UserRegistrationDto {
  @NotBlank(message = "First name is required")
  private String firstName;
  
  private String lastName;
  
  @NotBlank(message = "Email is required")
  @Email(message = "Please provide a valid email address")
  private String emailAddress;
  
  @NotBlank(message = "Password is required")
  @Size(min = 8, message = "Password must be at least 8 characters long")
  private String password;
}`;

const USER_SERVICE = 
`@Service
@AllArgsConstructor
public class UserService {
  private final UserRepository userRepository;
  private final UserRoleRepository userRoleRepository;
  private final PasswordEncoder passwordEncoder;
  
  public User registerUser(UserRegistrationDto registrationDto) {
    // Check if email already exists
    if (userRepository.existsByEmailAddress(registrationDto.getEmailAddress())) {
      throw new RuntimeException("Email address already registered");
    }
    
    // Get default user role
    UserRole userRole = userRoleRepository.findByUserRoleName("USER")
      .orElseThrow(() -> new RuntimeException("Default user role not found"));
    
    // Create new user
    User user = new User();
    user.setFirstName(registrationDto.getFirstName());
    user.setLastName(registrationDto.getLastName());
    user.setEmailAddress(registrationDto.getEmailAddress());
    user.setPassword(passwordEncoder.encode(registrationDto.getPassword()));
    user.setUserRole(userRole);
    
    return userRepository.save(user);
  }
}`;

const AUTH_CONTROLLER = 
`@Controller
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthController {
  private final UserService userService;
  
  @GetMapping("/register")
  public String showRegistrationForm(Model model) {
    model.addAttribute("user", new UserRegistrationDto());
    return "auth/register";
  }
  
  @PostMapping("/register")
  public String registerUser(@ModelAttribute @Valid UserRegistrationDto registrationDto,
            BindingResult result, Model model) {

    if (result.hasErrors()) {
      return "auth/register";
    }
    
    try {
      userService.registerUser(registrationDto);
      return "redirect:/auth/login?registered=true";
    } catch (RuntimeException e) {
      model.addAttribute("error", e.getMessage());
      return "auth/register";
    }
  }
  
  @GetMapping("/login")
  public String showLoginForm(@RequestParam(value = "error", required = false) String error,
            @RequestParam(value = "logout", required = false) String logout,
            @RequestParam(value = "registered", required = false) String registered,
            Model model) {

    if (error != null) {
      model.addAttribute("error", "Invalid email or password");
    }
    if (logout != null) {
      model.addAttribute("message", "You have been logged out successfully");
    }
    if (registered != null) {
      model.addAttribute("message", "Registration successful! Please login.");
    }
    
    return "auth/login";
  }
}`;

const REGISTRATION_FORM = 
`<form class="pt-6 space-y-4" th:action="@{/auth/register}" 
    th:object="\${user}" method="post">
  <div class="grid md:grid-cols-2 md:gap-6">
    <div>
      <label for="firstName" 
          class="block mb-2 text-sm font-medium text-gray-900">
        First Name <span class="text-red-400">*</span>
      </label>
      <input type="text" id="firstName" th:field="*{firstName}" 
          class="form-input" required/>
      <div th:if="\${#fields.hasErrors('firstName')}" 
          class="text-red-600 text-sm mt-1" th:errors="*{firstName}"></div>
    </div>
    <div class="pt-4 md:pt-0">
      <label for="lastName" 
          class="block mb-2 text-sm font-medium text-gray-900">
        Last Name
      </label>
      <input type="text" id="lastName" th:field="*{lastName}" 
          class="form-input"/>
      <div th:if="\${#fields.hasErrors('lastName')}" 
          class="text-red-600 text-sm mt-1" th:errors="*{lastName}"></div>
    </div>
  </div>
  <div>
    <label for="emailAddress" 
        class="block mb-2 text-sm font-medium text-gray-900">
      Email Address <span class="text-red-400">*</span>
    </label>
    <input type="email" id="emailAddress" th:field="*{emailAddress}" 
        class="form-input" required/>
    <div th:if="\${#fields.hasErrors('emailAddress')}" 
        class="text-red-600 text-sm mt-1" th:errors="*{emailAddress}"></div>
  </div>
  <div>
    <label for="password" 
        class="block mb-2 text-sm font-medium text-gray-900">
      Password <span class="text-red-400">*</span>
    </label>
    <input type="password" id="password" th:field="*{password}" 
        class="form-input" required minlength="8"/>
    <div th:if="\${#fields.hasErrors('password')}" 
        class="text-red-600 text-sm mt-1" th:errors="*{password}"></div>
  </div>
  <div th:if="\${error}" class="text-red-600 text-sm" th:text="\${error}"></div>
  <button type="submit" class="btn-primary">
    Register
  </button>
  <div class="text-sm text-center pt-4">
    Already have an account? 
    <a th:href="@{/auth/login}" class="text-blue-600 hover:underline">
      Login here
    </a>
  </div>
</form>`;

const LOGIN_FORM = 
`<form class="pt-6 space-y-4" th:action="@{/auth/login}" method="post">
  <div>
    <label for="username" 
        class="block mb-2 text-sm font-medium text-gray-900">
      Email Address <span class="text-red-400">*</span>
    </label>
    <input type="email" id="username" name="username" 
        class="form-input" required/>
  </div>
  <div>
    <label for="password" 
        class="block mb-2 text-sm font-medium text-gray-900">
      Password <span class="text-red-400">*</span>
    </label>
    <input type="password" id="password" name="password" 
        class="form-input" required/>
  </div>
  <div th:if="\${error}" class="text-red-600 text-sm" th:text="\${error}"></div>
  <div th:if="\${message}" class="text-green-600 text-sm" th:text="\${message}"></div>
  <button type="submit" class="btn-primary">
    Login
  </button>
  <div class="text-sm text-center pt-4">
    Don't have an account? 
    <a th:href="@{/auth/register}" class="text-blue-600 hover:underline">
      Register here
    </a>
  </div>
</form>`;

const USER_ROLES_DATA = 
`INSERT INTO user_roles (user_role_name) VALUES ('USER') ON CONFLICT DO NOTHING;
INSERT INTO user_roles (user_role_name) VALUES ('ADMIN') ON CONFLICT DO NOTHING;`;

const CONTROLLER_USER_ACCESS = 
`@Controller
@RequestMapping("/event")
@AllArgsConstructor
public class EventController {
  private final EventService eventService;
  
  @GetMapping("/create")
  public String showCreateEventForm(Model model, Authentication authentication) {
    // Access current user using Authentication
    CustomUserPrincipal userPrincipal = (CustomUserPrincipal) authentication.getPrincipal();
    User currentUser = userPrincipal.getUser();
    
    model.addAttribute("event", new Event());
    model.addAttribute("userName", userPrincipal.getFullName());
    return "event/create";
  }
  
  @PostMapping("/create")
  public String createEvent(@ModelAttribute Event event, 
            @AuthenticationPrincipal CustomUserPrincipal userPrincipal) {
    // Access current user using @AuthenticationPrincipal annotation
    User currentUser = userPrincipal.getUser();
    
    // Set the event creator
    event.setCreatedBy(currentUser);
    eventService.createEvent(event);
    
    return "redirect:/event/list";
  }
  
  @GetMapping("/my-events")
  public String showMyEvents(Model model, 
            @AuthenticationPrincipal CustomUserPrincipal userPrincipal) {
    User currentUser = userPrincipal.getUser();
    List<Event> userEvents = eventService.getEventsByUser(currentUser);
    
    model.addAttribute("events", userEvents);
    model.addAttribute("userName", userPrincipal.getFullName());
    return "event/my-events";
  }
}`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.SPRING_BOOT.title,
    url: TOPICS.SPRING_BOOT.url
  }],
  current: ARTICLE.title
}

export default function SpringBootApplication() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <div>
          <section className="mt-6">
            Spring Security is a powerful authentication and authorization framework for Java applications. It provides comprehensive security services for Spring-based applications,
            including features like user authentication, password encoding, session management, and protection against common security vulnerabilities.
          </section>
          <section className="mt-4">
            In the previous article, <Link href="/backend/spring-boot/develop-spring-boot-application-with-postgresql-and-thymeleaf" className="text-blue-600" target="_blank">Develop Spring Boot 
            Application with PostgreSQL and Thymeleaf</Link>, we implemented event creation functionality. Now, we will extend our Event Registration System by implementing user registration and 
            login functionality using Spring Security to secure our application.
          </section>
          <section className="mt-4">
            By the end of this article, we will have implemented complete user authentication functionality where users can register with their email and password,
            login securely, and access protected resources. We&apos;ll also implement proper password encoding and session management.
          </section>
          <h2 className="text-xl mt-6">
            <strong>Spring Security Configuration</strong>
          </h2>
          <section>
            First, we need to configure Spring Security in our application. Create a <code className="code-inline background">SecurityConfig</code> class to define our security configuration.
            This configuration will handle user authentication, password encoding, and define which endpoints require authentication.
            <HighlightCode code={SECURITY_CONFIG} language="java" path="config / SecurityConfig.java"/>
          </section>
          <section className="mt-4">
            The security configuration above:
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li><strong>Password Encoder:</strong> Uses BCrypt hashing algorithm to securely encode passwords.</li>
              <li><strong>Security Filter Chain:</strong> Defines URL patterns that require authentication and configures login/logout behavior.</li>
              <li><strong>CSRF Protection:</strong> Disabled for simplicity, but should be enabled in production with proper configuration.</li>
            </ul>
          </section>
          <h2 className="text-xl mt-6">
            <strong>User Entities and Repositories</strong>
          </h2>
          <section>
            First, create the UserRole entity to manage user roles:
            <HighlightCode code={USER_ROLE_ENTITY} language="java" path="entities / UserRole.java"/>
          </section>
          <section className="mt-4">
            Now create the User entity for database mapping.
            <HighlightCode code={USER_ENTITY} language="java" path="entities / User.java"/>
          </section>
          <section className="mt-4">
            Create repository interfaces for database operations:
            <HighlightCode code={USER_ROLE_REPOSITORY} language="java" path="repositories / UserRoleRepository.java"/>
            <HighlightCode code={USER_REPOSITORY} language="java" path="repositories / UserRepository.java"/>
          </section>
          <h2 className="text-xl mt-6">
            <strong>Custom UserPrincipal Class</strong>
          </h2>
          <section>
            Create a <code className="code-inline background">CustomUserPrincipal</code> class that implements <code className="code-inline background">UserDetails</code> 
            to handle Spring Security authentication. This class wraps our User entity and provides security-specific functionality.
            <HighlightCode code={CUSTOM_USER_PRINCIPAL} language="java" path="security / CustomUserPrincipal.java"/>
          </section>
          <h2 className="text-xl mt-6">
            <strong>Custom UserDetailsService Implementation</strong>
          </h2>
          <section>
            Spring Security requires a <code className="code-inline background">UserDetailsService</code> implementation to load user details during authentication.
            Create a custom implementation that retrieves user information from our database.
            <HighlightCode code={USER_DETAILS_SERVICE} language="java" path="services / CustomUserDetailsService.java"/>
          </section>
          <h2 className="text-xl mt-6">
            <strong>User Registration DTO</strong>
          </h2>
          <section>
            Create a Data Transfer Object (DTO) for user registration with validation annotations:
            <HighlightCode code={USER_REGISTRATION_DTO} language="java" path="dto / UserRegistrationDto.java"/>
          </section>
          <h2 className="text-xl mt-6">
            <strong>User Registration Service</strong>
          </h2>
          <section>
            Implement a service class to handle user registration. This service will validate user input, encode passwords, and save new users to the database.
            <HighlightCode code={USER_SERVICE} language="java" path="services / UserService.java"/>
          </section>
          <section className="pt-4">
            The registration service above:
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li><strong>Email Validation:</strong> Checks if the email address is already registered.</li>
              <li><strong>Password Encoding:</strong> Uses BCrypt to securely hash passwords before storing.</li>
              <li><strong>Default Role:</strong> Assigns new users to the &quot;USER&quot; role by default.</li>
              <li><strong>User Creation:</strong> Saves the new user to the database with encoded password.</li>
            </ul>
          </section>
          <h2 className="text-xl mt-6">
            <strong>Authentication Controller</strong>
          </h2>
          <section>
            Create a controller to handle user registration and login requests. This controller will manage form submissions and redirect users appropriately.
            <HighlightCode code={AUTH_CONTROLLER} language="java" path="controllers / AuthController.java"/>
          </section>
          <h2 className="text-xl mt-6">
            <strong>Registration and Login Forms</strong>
          </h2>
          <section>
            Create HTML forms for user registration and login using Thymeleaf templates. First, let&apos;s create the registration form:
            <HighlightCode code={REGISTRATION_FORM} language="html" path="resources / templates / auth / register.html"/>
          </section>
          <section className="mt-4">
            Now, create the login form. Spring Security will automatically handle the login process when we submit to <code className="code-inline background">/login</code>:
            <HighlightCode code={LOGIN_FORM} language="html" path="resources / templates / auth / login.html"/>
          </section>
          <section className="mt-4">
            The forms above include:
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li><strong>CSRF Protection:</strong> Hidden CSRF tokens are automatically added by Thymeleaf for security.</li>
              <li><strong>Validation:</strong> Client-side validation for required fields and email format.</li>
              <li><strong>Error Handling:</strong> Display error messages for failed authentication attempts.</li>
              <li><strong>Responsive Design:</strong> Forms are styled to work well on different screen sizes.</li>
            </ul>
          </section>
          <h2 className="text-xl mt-6">
            <strong>Database Schema Updates</strong>
          </h2>
          <section>
            We need to update our database schema to support user roles. Add the following SQL to insert default user roles:
            <HighlightCode code={USER_ROLES_DATA} language="sql" path="resources / data.sql"/>
          </section>
          <section className="mt-4">
            Make sure to set <code className="code-inline background">spring.sql.init.mode</code> to <code className="code-inline background">always</code> in your <code className="code-inline background">application.yml</code> to ensure the data.sql script runs on startup.
          </section>
          <h2 className="text-xl mt-6">
            <strong>Testing the Authentication Flow</strong>
          </h2>
          <section>
            After implementing all the components above, you can test the complete authentication flow:
            <ol className="list-decimal ml-6 pt-1 pl-2.5">
              <li><strong>Start the application</strong> and navigate to <code className="code-inline background">/auth/register</code></li>
              <li><strong>Register a new user</strong> with valid email and password</li>
              <li><strong>Login with the registered credentials</strong> at <code className="code-inline background">/auth/login</code></li>
              <li><strong>Access protected resources</strong> - you should now be authenticated</li>
              <li><strong>Logout</strong> using <code className="code-inline background">/logout</code> endpoint</li>
            </ol>
          </section>
          <h2 className="text-xl mt-6">
            <strong>Accessing Current User in Controllers</strong>
          </h2>
          <section>
            With the CustomUserPrincipal approach, you can easily access the current logged-in user in your controllers:
            <HighlightCode code={CONTROLLER_USER_ACCESS} language="java" path="controllers / EventController.java"/>
          </section>
          <section className="mt-4">
            This approach gives you direct access to both the User entity data and security-specific information, making it easy to work with authenticated users throughout your application.
          </section>
          <section className="mt-4">
            You can enhance this implementation by adding:
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li><strong>Email Verification:</strong> Send confirmation emails before activating accounts</li>
              <li><strong>Password Reset:</strong> Allow users to reset forgotten passwords</li>
              <li><strong>Role-Based Access:</strong> Implement different access levels for admin and regular users</li>
              <li><strong>Account Locking:</strong> Lock accounts after multiple failed login attempts</li>
              <li><strong>Remember Me:</strong> Add &quot;Remember Me&quot; functionality for persistent sessions</li>
            </ul>
          </section>
          <section className="mt-6">
            You have successfully implemented user registration and login functionality using Spring Security. The users can now register, login, and access protected resources securely.
            You can refer to this GitHub repository for the complete implementation and reference, <Link href="https://github.com/MahediSabuj/event-registration/tree/v1.0.1" className="text-blue-600" target="_blank">https://github.com/MahediSabuj/event-registration/tree/v1.0.1</Link>
          </section>
          <section className="mt-4">  
            In the next article, we will enhance the Event Registration System by implementing role-based access control and event participation features.
          </section>
        </div>
      </article>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
