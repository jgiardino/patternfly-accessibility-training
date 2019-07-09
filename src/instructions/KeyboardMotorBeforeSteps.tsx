import React, { Component } from "react";
import {
  Title
} from '@patternfly/react-core';
 
class KeyboardScreenReaderBeforeSteps extends Component {
  render() {
    return (
      <div className="card-how-to pf-c-card pf-u-h-100">
        <div className="pf-c-card__body">
          This page has several accessibility issues present. Look for them using the following methods.
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            All functionality is keyboard accessible
          </Title>
          <p>
            <a href="https://www.w3.org/WAI/WCAG21/quickref/#keyboard">WCAG 2.1.1</a>{` `}
            and <a href="https://www.w3.org/WAI/WCAG21/quickref/#no-keyboard-trap">WCAG 2.1.2</a>
          </p>
          Use the tab key to shift focus to interactive elements. Any task that you can 
          complete with a mouse should also be possible using just the keyboard. Complex 
          interactions for mouse users can still be provided, as long as equivalent 
          functionality is provide in some other way for keyboard-only users.
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Elements with focus are visible
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#focus-visible">WCAG 2.4.7</a></p>
          Use the tab key to shift focus to interactive elements. The element that currently has 
          focus should be visually obvious.
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Target area for clickable elements is at least 32px in one dimension
          </Title>
          Look for interactive elements that seem small, like links and buttons. 
          Right-click on the element and select inspect to show the browser inspector tool. 
          When this element is selected in the inspector, there should be information about the 
          dimensions of the element. Either the height or width should be a minimum width 
          of 32px. And if elements are smaller than this in either dimension, there should 
          be sufficient spacing between adjacent interactive elements.
        </div>
      </div>
    );
  }
}
   
export default KeyboardScreenReaderBeforeSteps;