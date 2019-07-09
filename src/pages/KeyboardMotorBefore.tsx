import React, { Component } from "react";
import "./KeyboardMotorBefore.css";
import {
  Title
} from '@patternfly/react-core';
import DataViewKeyboardMotorBefore from "../components/DataViewKeyboardMotorBefore";
import PageLayout from "../components/PageLayout";
import KeyboardMotorBeforeSteps from "../instructions/KeyboardMotorBeforeSteps";

class KeyboardMotorBefore extends Component {
  render() {
    const instructions = <KeyboardMotorBeforeSteps />;
    return (
      <PageLayout before title="Before example for Keyboard and Motor" instructions={instructions}>
        <div className="pf-l-stack main-section pf-u-h-100" >
          <div className="pf-l-stack__item pf-u-p-lg">
            <Title headingLevel="h1" size="2xl">Ice cream sundaes</Title>
            <div className="pf-c-content">
              <small>These are the ice cream sundaes you can eat.</small>
            </div>
          </div>
          <div className="pf-l-stack__item pf-m-fill data-view pf-u-p-lg keyboard-motor-before">
            <DataViewKeyboardMotorBefore />
          </div>
        </div>
      </PageLayout>
    );
  }
}
 
export default KeyboardMotorBefore;