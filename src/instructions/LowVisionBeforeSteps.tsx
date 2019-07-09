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
            Meaningful color
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#use-of-color">WCAG 1.4.1</a></p>
          Look for instances of color that are meaningful and not accompanied by text or icon.
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Color contrast
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum">WCAG 1.4.3</a>{` `}
          and <a href="https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast">WCAG 1.4.11</a></p>
          Look for elements that appear to have low color contrast. 
          Right-click on the element and select inspect to show the browser inspector tool. 
          When this element is selected in the inspector, there should be information about the
          color values defined for the color and background color. Copy and paste these color values in
          a <a href="http://www.webaxe.org/color-contrast-tools/">color contrast checker</a> to check 
          the color contrast.
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Scalable
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#resize-text">WCAG 1.4.4</a>{` `}
          and <a href="https://www.w3.org/WAI/WCAG21/quickref/#reflow">WCAG 1.4.10</a></p>
          Use the browser controls to zoom in. Look for areas where the page layout is not responsive
          to the change in scale. Also try zooming in using Firefox with "Zoom Text Only" selected to check 
          for areas where the page layout does not accomodate change in font size.
        </div>
      </div>
    );
  }
}
   
export default KeyboardScreenReaderBeforeSteps;