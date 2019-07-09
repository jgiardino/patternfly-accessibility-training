import React, { Component } from "react";
import {
  DataListItem,
  DataListItemRow,
  DataListToggle,
  Title
} from '@patternfly/react-core';
import { BlenderPhoneIcon, BicycleIcon } from '@patternfly/react-icons';

class ListItemKeyboardMotorAfter extends Component<{id: string}, {expanded: boolean }> {
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
      <DataListItem aria-labelledby={this.props.id} isExpanded={this.state.expanded}>
        <DataListItemRow>
          <DataListToggle
            onClick={this.toggle}
            isExpanded={this.state.expanded}
            id={`${this.props.id}-toggle`}
            aria-controls="ex-expand1"
          />
          <div className="pf-c-data-list__item-content">
              <div className="pf-c-data-list__cell pf-m-align-left pf-m-flex-2">
                <div>
                  <div>
                    <Title size="md" headingLevel="h2" id="data-list-simple-no-pagination-item1">
                      ice cream sundae name
                    </Title> 
                    <small>Description of ice cream sundae</small>
                  </div>
                  <div className="pf-l-flex pf-m-wrap">
                    <div>
                      <BlenderPhoneIcon />{` `}
                      <a href="#">
                        <strong>10</strong> Blender phones
                      </a>
                    </div>
                    <div>
                      <BicycleIcon />{` `}
                      <a href="#">
                        <strong>4</strong> Bicycles
                      </a>
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
        </DataListItemRow>
        {this.state.expanded && (
          <section className="pf-c-data-list__expandable-content" id="content-1" aria-label="Primary content details">
            <div className="pf-c-data-list__expandable-content-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </section>
        )}
      </DataListItem>
    );
  }
}
   
export default ListItemKeyboardMotorAfter;