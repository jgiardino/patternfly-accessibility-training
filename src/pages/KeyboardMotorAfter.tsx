import React, { Component } from "react";
import {
  Button,
  PageSection,
  PageSectionVariants,
  Title
} from '@patternfly/react-core';
import DataViewKeyboardMotorAfter from "../components/DataViewKeyboardMotorAfter";
import PageLayout from "../components/PageLayout";
import KeyboardMotorAfterSteps from "../instructions/KeyboardMotorAfterSteps";

class KeyboardMotorAfter extends Component {
  render() {
    const instructions = <KeyboardMotorAfterSteps />;
    return (
      <PageLayout title="After example for Keyboard and Motor" instructions={instructions}>
        <div className="pf-l-stack main-section pf-u-h-100" >
          <div className="pf-l-stack__item pf-u-p-lg">
            <Title headingLevel="h1" size="2xl">Ice cream sundaes</Title>
            <div className="pf-c-content">
              <small>These are the ice cream sundaes you can eat.</small>
            </div>
          </div>
          <div className="pf-l-stack__item pf-m-fill data-view pf-u-p-lg">
            <DataViewKeyboardMotorAfter />
          </div>
        </div>
      </PageLayout>
    );
  }
}
 
export default KeyboardMotorAfter;