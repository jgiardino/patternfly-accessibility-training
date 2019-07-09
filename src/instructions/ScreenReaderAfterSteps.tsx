import React, { Component } from "react";
import {
  Title
} from '@patternfly/react-core';
 
class KeyboardScreenReaderBeforeSteps extends Component {
  render() {
    return (
      <div className="card-how-to pf-c-card pf-u-h-100">
        <div className="pf-c-card__body">
          The issues that are present in the Before example can be addressed using the following suggestions.
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Info and relationships
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships">WCAG 1.3.1</a></p>
          Since the tabs in this example control the main contents of the page, then they should be implemented 
          using links, where a URL is defined for each link. Since the "Nutitional information" toggles are performing 
          an action and not acting as links, they should use buttons.
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Section headings
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#section-headings">WCAG 2.4.10</a></p>
          None of the text in the example was identified as a heading. Updates include adding a heading level two in 
          the breadcrumb, headings of level three for the card headers, and headings of level for for the section about 
          allergen information.
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Link purpose
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context">WCAG 2.4.4</a></p>
          This criteria can apply to links and buttons. The first 3 cards had buttons with the same label "Nutritional
          information". When these buttons are accessed out of context, it isn't obvious what contents are accessible 
          from each button. A more specific label can be provided using aria-lable attributes on the button.        
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Label in name
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#label-in-name">WCAG 2.5.3</a></p>
          The last 3 cards had buttons with the visible label "Nutritional information", but the button label provided 
          by the screen reader didn't start with "Nutrition information". It's important to remember that screen reader 
          users might be sighted users. When visible contents don't match the contents that are announced, this can be 
          confusing for some screen reader users. Additional information can be provided in the accessible label, as 
          long as the accessible label begins with the contents that are visible.
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Name, Role, Value
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#name-role-value">WCAG 4.1.2</a></p>
          The icons that indicated allergen information did not include screen reader accessible text, making them not
          accessible to screen reader users. This text was included on the screen since these icons might not be obvious 
          to sighted users either. Tooltips are not recommended for static elements since they aren't user friendly for 
          non-mouse users.
        </div>
      </div>
    );
  }
}
   
export default KeyboardScreenReaderBeforeSteps;