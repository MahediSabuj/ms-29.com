import Navigation from "@/components/navigation/navigation";
import { HeaderConfig } from "@/types/header";

export default function Header(config: HeaderConfig) {
  return (
    <header className="modern-header sticky top-0 z-50 border-solid border-b py-2 shadow-md">
      <div className="container mx-auto">
        <Navigation {...config}/>
      </div>
    </header>
  );
}
