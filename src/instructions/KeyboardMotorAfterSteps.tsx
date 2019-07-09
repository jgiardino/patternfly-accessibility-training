import React, { Component } from "react";
import {
  Title
} from '@patternfly/react-core';
import ShowMore from "./ShowMore";

 
class KeyboardScreenReaderBeforeSteps extends Component {
  render() {
    return (
      <div className="card-how-to pf-c-card pf-u-h-100">
        <div className="pf-c-card__body">
          The issues that are present in the Before example can be addressed using the following suggestions. 
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            All functionality is keyboard accessible
          </Title>
          <p>
            <a href="https://www.w3.org/WAI/WCAG21/quickref/#keyboard">WCAG 2.1.1</a>{` `}
            and <a href="https://www.w3.org/WAI/WCAG21/quickref/#no-keyboard-trap">WCAG 2.1.2</a>
          </p>
          Semantic buttons were used for the expand toggle instead of the generic div with a click event. 
          Click events on buttons are keyboard accessible.
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Elements with focus are visible
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#focus-visible">WCAG 2.4.7</a></p>
          Browsers provide styles for indicating focus on interactive elements that are native to html, 
          like links and buttons. Make sure this css is not overwritten without being replaced 
          with custom css styles for indicating focus. Custom elements that aren't native, like switches,
          will need custom css for indicating focus. 
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Target area for clickable elements is at least 32px in one dimension
          </Title>
          PatternFly styles should define sufficient sizes for most interactive elements, but
          look out for links that might be only one character in length. In this example, the tooltip 
          was removed, and the tooltip contents were added to the link.
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            <em>Another thing about Tooltips</em>
          </Title>
          Tooltips require an additional tab-stop for keyboard-only users. Avoid using tooltips for 
          repeated information, such as recurring icons in a data view, and consider alternate ways of 
          providing this information.
        </div>
      </div>
    );
  }
}
   
export default KeyboardScreenReaderBeforeSteps;