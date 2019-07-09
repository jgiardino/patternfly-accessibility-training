import React, { Component } from "react";
import {
  Title,
  Tooltip
} from '@patternfly/react-core';
import { BlenderPhoneIcon, BicycleIcon, AngleRightIcon, AngleDownIcon } from '@patternfly/react-icons';

class ListItemKeyboardMotorBefore extends Component<{}, {expanded: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
        <li className={`pf-c-data-list__item ${this.state.expanded ? "pf-m-expanded" : ""}`} aria-labelledby="data-list-simple-no-pagination-item1">
          <div className="pf-c-data-list__item-row">
            <div className="pf-c-data-list__item-control">
              <div 
                className="pf-c-data-list__toggle pf-u-p-sm" 
                onClick={this.toggle}
              >
                {this.state.expanded && (
                  <AngleDownIcon />
                ) || (
                  <AngleRightIcon />
                )}
              </div>
            </div>
            <div className="pf-c-data-list__item-content">
              <div className="pf-c-data-list__cell pf-m-align-left">
                <div>
                  <div>
                    <Title size="md" headingLevel="h2" id="data-list-simple-no-pagination-item1">
                      ice cream sundae name
                    </Title> 
                    <small>Description of ice cream sundae</small>
                  </div>
                  <div className="pf-l-flex pf-m-wrap">
                    <div>
                      <Tooltip
                        position="bottom"
                        content={
                          <div>Blender phone</div>
                        }
                      >
                        <BlenderPhoneIcon />{` `}
                      </Tooltip>
                      <a href="#">10</a>
                    </div>
                    <div>
                      <Tooltip
                        position="bottom"
                        content={
                          <div>Bicycle</div>
                        }
                      >
                        <BicycleIcon />{` `}
                      </Tooltip>
                      <a href="#">4</a>
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
          {this.state.expanded && (
            <section className="pf-c-data-list__expandable-content" id="content-1" aria-label="Primary content details">
              <div className="pf-c-data-list__expandable-content-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </section>
          )}
        </li>
    );
  }
}
   
export default ListItemKeyboardMotorBefore;