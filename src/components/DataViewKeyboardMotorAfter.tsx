import React, { Component } from "react";
import ListItemKeyboardMotorAfter from "./ListItemKeyboardMotorAfter";


class DataViewKeyboardMotorAfter extends Component {
  render() {
    return (
      <ul className="pf-c-data-list" role="list" aria-label="Ice cream sundaes">
        <ListItemKeyboardMotorAfter id="listitem1" />
        <ListItemKeyboardMotorAfter id="listitem2" />
        <ListItemKeyboardMotorAfter id="listitem3" />
      </ul>
    );
  }
}
   
export default DataViewKeyboardMotorAfter;