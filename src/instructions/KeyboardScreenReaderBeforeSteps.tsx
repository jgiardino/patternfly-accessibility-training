import React, { Component } from "react";
import {
  Title
} from '@patternfly/react-core';
 
class KeyboardScreenReaderBeforeSteps extends Component {
  render() {
    return (
      <div className="card-how-to pf-c-card pf-u-h-100">
        <div className="pf-c-card__body">
          This page has several accessibility issues present. Use a screen reader to look for the issues.
          <p>
            <a href="https://www.patternfly.org/v4/get-started/accessibility-guide#testing">
              Testing with screen readers
            </a>
          </p>
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Order of elements follow a logical order
          </Title>
          <p>
            <a href="https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence">WCAG 1.3.2</a> and{` `}
            <a href="https://www.w3.org/WAI/WCAG21/quickref/#focus-order">WCAG 2.4.3</a>
          </p>
          The visual presentation of elements should be consistent with the actual order of elements in the DOM.
          Scan the contents in the example using a screen reader or the tab key. Look for elements that receive 
          focus in an order that does not seem logical or is not consistent with the visual order of elements on 
          the page. 
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
          Pointer Gestures
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#pointer-gestures">WCAG 2.5.1</a></p>
          Look for UI patterns that require complex gestures to complete tasks.
        </div>
      </div>
    );
  }
}
   
export default KeyboardScreenReaderBeforeSteps;