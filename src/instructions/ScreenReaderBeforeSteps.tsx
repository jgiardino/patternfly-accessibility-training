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
            Info and relationships
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships">WCAG 1.3.1</a></p>
          Use a screen reader to access the list of headings, links, buttons, and landmarks for the page. 
          Look for instances where the structure and relationship of elements on the screen are not obvious 
          in these lists.
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Section headings
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#section-headings">WCAG 2.4.10</a></p>
          Use a screen reader to access the list of headings. Check that the heading outline matches
          the visual hierarchy of the headings that are visible.
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Link purpose
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context">WCAG 2.4.4</a></p>
          Use a screen reader to access the list of links and buttons. Look for instances where the purpose
          of the link or button is not obvious.
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Section headings
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#section-headings">WCAG 2.4.10</a></p>
          Use a screen reader to access the list of headings. Check that the heading outline matches
          the visual hierarch of the headings that are visible.
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Label in name
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#label-in-name">WCAG 2.5.3</a></p>
          Use a screen reader to access the list of links and buttons. Check that the visible label is equal to 
          or the beginning of the accessible label.
          <Title headingLevel="h2" size="md" className="pf-u-mt-lg">
            Name, Role, Value
          </Title>
          <p><a href="https://www.w3.org/WAI/WCAG21/quickref/#name-role-value">WCAG 4.1.2</a></p>
          Use a screen reader to scan the contents of the example. Information that's available on screen should
          also be communicated by the screen reader.
        </div>
      </div>
    );
  }
}
   
export default KeyboardScreenReaderBeforeSteps;