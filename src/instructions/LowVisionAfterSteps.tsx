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
            Meaningful color
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#use-of-color">WCAG 1.4.1</a></p>
          Icons were added to the red error messages. Screen-reader-only text is also included in the inline alert
          to communicate the type of alert to screen reader users. The attribute aria-invalid is included for form 
          elements where error messages are provided, and the error messages are associated with the form elements 
          using aria-describedby.
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Color contrast
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum">WCAG 1.4.3</a>{` `}
          and <a href="https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast">WCAG 1.4.11</a></p>
          The form description text was updated to use a color that provided sufficient contrast. 
          The background color was removed from the footer.
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Scalable
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#resize-text">WCAG 1.4.4</a>{` `}
          and <a href="https://www.w3.org/WAI/WCAG21/quickref/#reflow">WCAG 1.4.10</a></p>
          Media queries were added to check the font size, and change how the contents scroll when the font size is increased. 
          The before layout also included css to set the width of the gap to match the width of the buttons in pixels, which can cause
          scaling issues.
        </div>
      </div>
    );
  }
}
   
export default KeyboardScreenReaderBeforeSteps;