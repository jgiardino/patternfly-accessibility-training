import React, { Component } from "react";
import {
  Button
} from '@patternfly/react-core';
import { AngleDownIcon, AngleUpIcon } from '@patternfly/react-icons';


interface Props {
  id: string;
  last?: boolean;
  first?: boolean;
}

class UpDownKeyboardScreenRdrAfter extends Component<Props, {}> {
  render() {
    return (
        <div className="pf-c-data-list__action pf-u-display-flex pf-u-flex-nowrap">
          <Button
            variant="plain"
            id={`${this.props.id}-button-up`}
            aria-label="Move up"
            aria-labelledby={`${this.props.id}-button-up ${this.props.id}`}
            isDisabled={this.props.first}
          >
            <AngleUpIcon />
          </Button>
          <Button
            variant="plain"
            id={`${this.props.id}-button-down`}
            aria-label="Move down"
            aria-labelledby={`${this.props.id}-button-down ${this.props.id}`}
            isDisabled={this.props.last}
          >
            <AngleDownIcon />
          </Button>
        </div>
    );
  }
}
   
export default UpDownKeyboardScreenRdrAfter;