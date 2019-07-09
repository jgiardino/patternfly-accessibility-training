import React, { Component } from "react";
import ListItemKeyboardMotorBefore from "./ListItemKeyboardMotorBefore";

class DataViewKeyboardMotorBefore extends Component {
  render() {
    return (
      <ul className="pf-c-data-list" role="list" aria-label="Simple data list example" id="data-list-simple-no-pagination">
        <ListItemKeyboardMotorBefore />
        <ListItemKeyboardMotorBefore />
        <ListItemKeyboardMotorBefore />
      </ul>
    );
  }
}
   
export default DataViewKeyboardMotorBefore;