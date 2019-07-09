
import React, { Component } from "react";
import { AngleRightIcon, AngleDownIcon } from '@patternfly/react-icons';

interface Props {
  children?: any,
  labelAria?: string
};

class NutritionalInfoLink extends Component<Props, {expanded: boolean }> {
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
      <div className={`pf-c-expandable ${this.state.expanded ? "pf-m-expanded" : ""}`}>
        <a 
          className="pf-c-expandable__toggle" 
          aria-expanded={this.state.expanded}
          aria-label={this.props.labelAria}
          onClick={this.toggle}
          href="#"
        >
          {this.state.expanded && (
            <AngleDownIcon />
          ) || (
            <AngleRightIcon />
          )}
          <span>Nutritional information</span>
        </a>
        {this.state.expanded && (
          <div className="pf-c-expandable__content">
            {this.props.children}
            Sugar, Corn Syrup, Butter (Cream, Salt), Refined Coconut Oil, Whey, Salt, Soy Lecithin, Natural Flavor
          </div>
        )}
      </div>
    );
  }
}
   
export default NutritionalInfoLink;