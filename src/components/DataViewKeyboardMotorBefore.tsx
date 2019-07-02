import React, { Component } from "react";
import {
  Button,
  PageSection,
  PageSectionVariants,
  Title
} from '@patternfly/react-core';
import { BlenderPhoneIcon, BicycleIcon } from '@patternfly/react-icons';
 
class DataViewKeyboardMotorBefore extends Component {
  render() {
    return (
      <ul className="pf-c-data-list" role="list" aria-label="Simple data list example" id="data-list-simple-no-pagination">
        <li className="pf-c-data-list__item" aria-labelledby="data-list-simple-no-pagination-item1">
          <div className="pf-c-data-list__item-row">
            <div className="pf-c-data-list__item-content">
              <div className="pf-c-data-list__cell pf-m-align-left">
                <div>
                  <div>
                    <p id="data-list-simple-no-pagination-item1">ice cream sundae name</p> 
                    <small>Description of ice cream sundae</small>
                  </div>
                  <div className="pf-l-flex pf-m-wrap">
                    <div>
                      <BlenderPhoneIcon />{` `}
                      10
                    </div>
                    <div>
                      <BicycleIcon />{` `}
                      4
                    </div>
                    <div>
                      Eaten 2 days ago
                    </div>
                  </div>
                </div>
              </div>
              <div className="pf-c-data-list__cell pf-m-align-right pf-u-text-align-right">
                <button className="pf-c-button pf-m-secondary" type="button">
                              Eat me
                </button>
                <button className="pf-c-button pf-m-link" type="button">
                              Freeze me
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    );
  }
}
   
export default DataViewKeyboardMotorBefore;