import React, { Component } from "react";
import {
  Button,
  DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListCheck,
  DataListItemCells,
  DataListAction,
  PageSection,
  PageSectionVariants,
  Title
} from '@patternfly/react-core';
import { ExclamationCircleIcon, AngleLeftIcon, AngleRightIcon } from '@patternfly/react-icons';
import DataViewKeyboardMotorBefore from "../components/DataViewKeyboardMotorBefore"
 
class LowVisionAfter extends Component {
  render() {
    return (
      <PageSection variant={PageSectionVariants.light} isFilled={false} className="pf-u-h-100 pf-u-p-0">
        <div className="pf-l-grid pf-u-h-100">
          <div className="pf-l-grid__item pf-m-9-col">
            <div className="pf-l-stack" >
              <div className="pf-l-stack__item pf-u-p-lg">
                <Title headingLevel="h1" size="2xl">Ice cream sundaes</Title>
                <div className="pf-c-content">
                  <small className="light-gray">These are the ice cream sundaes you can eat.</small>
                </div>
              </div>
              <div className="pf-l-stack__item pf-m-fill main-section pf-u-p-lg">
                <DataViewKeyboardMotorBefore />
              </div>
            </div>
          </div>
          <aside className="pf-l-grid__item pf-m-3-col">
            <div className="card-how-to pf-c-card pf-u-h-100">
              <h1 className="pf-c-card__header pf-c-title pf-m-md">
                How to test
              </h1>
              <div className="pf-c-card__body">
                TODO: associate submit button with form, check that colors are correct contrast (both before and after)<br />
                This page has several accessibility issues present. Look for them using the following methods.
                <Title headingLevel="h2" size="lg" className="pf-u-mt-lg">
                  Meaningful color
                </Title>
                Review the design to look for instances of color that are meaningful and not accompanied by text or icon.
                <Title headingLevel="h2" size="lg" className="pf-u-mt-lg">
                  Color contrast
                </Title>
                Description of how to check color contrast
                <Title headingLevel="h2" size="lg" className="pf-u-mt-lg">
                  Scalable
                </Title>
                Description of how to zoom in.
              </div>
            </div>
          </aside>
        </div>
      </PageSection>
    );
  }
}
 
export default LowVisionAfter;