import React, { Component } from "react";
import {
  Title
} from '@patternfly/react-core';
 
class KeyboardScreenReaderAfterSteps extends Component {
  render() {
    return (
      <div className="card-how-to pf-c-card pf-u-h-100">
        <div className="pf-c-card__body">
          The issues that are present in the Before example can be addressed using the following suggestions.
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Order of elements follow a logical order
          </Title>
          <p>
            <a href="https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence">WCAG 1.3.2</a> and{` `}
            <a href="https://www.w3.org/WAI/WCAG21/quickref/#focus-order">WCAG 2.4.3</a>
          </p>
          The checkbox in the first column is part of the form, and therefore should be included before the 
          form submit button. The second column heading is visually above the second column contents in the before example,
          but was between the first column heading and first column contents in the DOM, making it difficult for screen 
          reader users to perceive the relationship of contents on the page. 
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Functionality that uses complex gestures can also be operated with a single pointer without a path based gesture
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#pointer-gestures">WCAG 2.5.1</a></p>
          The drag and drop functionality in the list is not accessible to users using a keyboard to use the application.
          Similar functionality is provided in the Up and Down buttons that can accomplish the same task as drag and drop.
          Additionally, the buttons provided for the drag and drop functionality are removed from tab order with 
          <pre className="pf-u-display-inline">tabindex="-1"</pre> and are ignored by screen readers with 
          <pre className="pf-u-display-inline">aria-hidden="true"</pre>.
        </div>
      </div>
    );
  }
}
   
export default KeyboardScreenReaderAfterSteps;