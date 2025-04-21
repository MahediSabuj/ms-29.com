import { Metadata } from "next";

import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Article from "@/components/article/article";
import Highlight from "@/components/highlight/highlight";
import TOPICS from "@/lib/data/article/topics";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import ArticleReviewList from "@/components/article-review-list/article-review-list";

import { SHOW_HIDE_DIALOG_FIELDS_ON_DROPDOWN_SELECTION as ARTICLE } from "@/lib/data/article/aem/sites";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const show_hide_dialog = 
`<backgroundConfig jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/select"
  fieldLabel="Background Config"
  name="./backgroundConfig"
  granite:class="cq-dialog-dropdown-showhide">
  <items jcr:primaryType="nt:unstructured">
    <backgroundColor jcr:primaryType="nt:unstructured"
      text="Background Color"
      value="backgroundColor"/>
    <backgroundImage jcr:primaryType="nt:unstructured"
      text="Background Image"
      value="backgroundImage"/>
  </items>
  <granite:data jcr:primaryType="nt:unstructured"
    cq-dialog-dropdown-showhide-target=".background-config-show-hide"/>
</backgroundConfig>
<backgroundColorContainer jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/container"
  granite:class="hide background-config-show-hide">
  <items jcr:primaryType="nt:unstructured">
    <colorCode jcr:primaryType="nt:unstructured"
      sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
      fieldLabel="Color Code"
      name="./colorCode"/>
  </items>
  <granite:data jcr:primaryType="nt:unstructured"
    showhidetargetvalue="backgroundColor"/>
</backgroundColorContainer>`;

const SHOW_HIDE_MULTIPLE_VALUES =
`<meetingType jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/select"
  fieldLabel="Meeting Type"
  name="./meetingType"
  granite:class="cq-dialog-dropdown-showhide">
  <items jcr:primaryType="nt:unstructured">
    <office jcr:primaryType="nt:unstructured"
      text="Office"
      value="office"/>
    <online jcr:primaryType="nt:unstructured"
      text="Online"
      value="online"/>
    <hybrid jcr:primaryType="nt:unstructured"
      text="Hybrid"
      value="hybrid"/>
  </items>
  <granite:data jcr:primaryType="nt:unstructured"
    cq-dialog-dropdown-showhide-target=".meeting-type-show-hide"/>
</meetingType>
<meetingLinkContainer jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/container"
  granite:class="hide meeting-type-show-hide">
  <items jcr:primaryType="nt:unstructured">
    <meetingLink jcr:primaryType="nt:unstructured"
      sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
      fieldLabel="Meeting Link"
      name="./meetingLink"/>
  </items>
  <granite:data jcr:primaryType="nt:unstructured"
    showhidetargetvalue="online,hybrid"/>
</meetingLinkContainer>`;

const HANDLE_MULTIPLE_VALUES =
`var targetValues = (element.dataset.showhidetargetvalue || "")
  .split(",").map(v => v.trim());
var show = targetValues.includes(value);`;

const SHOW_HIDE_DROPDOWN_FIELDS_JS =
`(function (document, $) {
  "use strict";

  // when dialog gets injected
  $(document).on("foundation-contentloaded", function (e) {
    // if there is already an inital value make sure the according target element becomes visible
    Coral.commons.ready(function () {
      showHideHandler($(".cq-dialog-dropdown-showhide", e.target));
    });
  });

  $(document).on("selected", ".cq-dialog-dropdown-showhide", function (e) {
    showHideHandler($(this));
  });

  function showHideHandler(el) {
    el.each(function (i, element) {
      if ($(element).is("coral-select")) {
        // handle Coral3 base drop-down
        Coral.commons.ready(element, function (component) {
          showHide(component, element);
          component.on("change", function () {
            showHide(component, element);
          });
        });
      } else {
        // handle Coral2 based drop-down
        var component = $(element).data("select");
        if (component) {
          showHide(component, element);
        }
      }
    })
  }

  function showHide(component, element) {
    // get the selector to find the target elements. its stored as data-.. attribute
    var target = $(element).data("cqDialogDropdownShowhideTarget");
    // querySelector won't create HTML objects on the fly as jquery does
    var sanitizedTarget = document.querySelectorAll(target);
    var $target = $(sanitizedTarget);

    if (sanitizedTarget.length) {
      var value;
      if (typeof component.value !== "undefined") {
        value = component.value;
      } else if (typeof component.getValue === "function") {
        value = component.getValue();
      }

      $target.each(function(index, element) {
        // make sure all unselected target elements are hidden.
        // unhide the target element that contains the selected value as data-showhidetargetvalue attribute
        var targetValues = (element.dataset.showhidetargetvalue || "")
                    .split(",").map(v => v.trim());
        var show = targetValues.includes(value);
        setVisibilityAndHandleFieldValidation($(element), show);
      });
    }
  }

  function setVisibilityAndHandleFieldValidation($element, show) {
    if (show) {
      $element.removeClass("hide");
      $element.find("
        input[aria-required=false], coral-multifield[aria-required=false], foundation-autocomplete[aria-required=false]"
      ).filter(":not(.hide>input)").filter(":not(input.hide)")
      .filter(":not(foundation-autocomplete[aria-required=false] input)")
      .filter(":not(.hide>coral-multifield)").filter(":not(input.coral-multifield)").each(function(index, field) {
        toggleValidation($(field));
      });
    } else {
      $element.addClass("hide");
      $element.find("
        input[aria-required=true], coral-multifield[aria-required=true], foundation-autocomplete[required]"
      ).filter(":not(foundation-autocomplete[required] input)")
      .each(function(index, field) {
        toggleValidation($(field));
      });
    }
  }

  function toggleValidation($field) {
    var required = $field.prop("required");
    var ariaRequired = $field.attr('aria-required');
    var notRequired = ariaRequired === 'true';
    if ($field.is("foundation-autocomplete") && required !== 'undefined') {
      if (required === true) {
        $field[0].required = false;
        $field.attr('aria-required', false);
      } else if (required === false) {
        $field[0].required = true;
        $field.removeAttr('aria-required');
      }
    } else if (typeof ariaRequired !== 'undefined') {
      $field.attr('aria-required', String(!notRequired));
    }
    
    var api = $field.adaptTo("foundation-validation");
    if (api) {
      if (notRequired) {
        api.checkValidity();
      }
      api.updateUI();
    }
  }
})(document, Granite.$);`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AEM_SITES.title,
    url: TOPICS.AEM_SITES.url
  }],
  current: ARTICLE.title
}

export default function ShowHideDialogFields() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}
          views={ARTICLE.views}/>
        <div>
          <section className="pt-6 pb-3">
            Enabling Show/Hide functionality for AEM dialog fields improves user experience by allowing content authors to 
            focus on relevant fields, thereby making the authoring process more efficient and less error-prone.
          </section>
          <section className="pb-3">
            AEM provided an out-of-the-box solution for showing/hiding dialog fields based on dropdown selection value. 
            ClientLibs implementation is available here <code className="code-inline break-all">/libs/cq/gui/components/authoring/dialog/dropdownshowhide/clientlibs/dropdownshowhide/js/dropdownshowhide.js</code>
          </section>
          <section className="pb-2">
            To achieve the functionality, need to proceed with the following steps:
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>Apply <code className="code-inline">granite:class=&quot;cq-dialog-dropdown-showhide&quot;</code> to the select/dropdown field.</li>
              <li>Add a data attribute <code className="code-inline">cq-dialog-dropdown-showhide-target</code> to the select field using <code className="code-inline">granite:data</code> typically configured with a class selector as the value such as <code className="code-inline background">.background-config-show-hide</code></li>
              <li>Add a container field with <code className="code-inline">granite:class</code> attribute, incorporating the <code className="code-inline">hide</code> class to keep it hidden upon initial loading, along with the target value set in the preceding step, without employing the class selector &quot;.&quot; such as <code className="code-inline">granite:class=&quot;hide background-config-show-hide&quot;</code></li>
              <li>Add <code className="code-inline">showhidetargetvalue</code> data attribute to the container field using <code className="code-inline">granite:data</code> to set up the display or hiding of items beneath the container according to a specified value.</li>
            </ul>
          </section>
          <Highlight code={show_hide_dialog} language="xml" path="_cq_dialog / .content.xml"/>
          <section className="pt-2">
            According to the <code className="code-inline">_cq_dialog</code> configuration provided above, the Color Code option will be displayed 
            only when Background Color is selected in the Background Config. Otherwise, the Color Code field will remain hidden in the dialog.
          </section>
          <h2 className="text-xl mt-4" id="show-hide-multiple-options">
            <strong>Show/Hide Fields for Multiple Options</strong>
          </h2>
          <section>
            While the default implementation supports showing or hiding fields based on a single dropdown option, it doesn&apos;t account for multiple selections.
            To achieve that functionality, a custom JavaScript solution is required. Consider the following example:
          </section>
          <Highlight code={SHOW_HIDE_MULTIPLE_VALUES} language="xml" path="_cq_dialog / .content.xml"/>
          <section className="pt-4">
            In the given configuration, expectation is that <strong>Meeting Link</strong> field should be displayed only when the <strong>Meeting Type</strong> dropdown is set to <strong>Online</strong> or <strong>Hybrid</strong>.
            To achieve this, <code className="code-inline">showHide</code> method needs to be updated to handle multiple values.
          </section>
          <Highlight code={HANDLE_MULTIPLE_VALUES} language="javascript" path="js / dropdownshowhide.js"/>
          <section className="pt-2">
            To incorporate the changes, create a custom ClientLib that includes the updated <code className="code-inline">dropdownshowhide.js</code> file.
            Then, ensure the Clientlib category is added as <code className="code-inline">extraClientlibs</code> in the dialog. Here is the completed JavaScript implementation:
          </section>
          <Highlight code={SHOW_HIDE_DROPDOWN_FIELDS_JS} language="javascript" path="js / dropdownshowhide.js"/>
        </div>  
      </article>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
