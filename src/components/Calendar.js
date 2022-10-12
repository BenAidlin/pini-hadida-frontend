import React, {Component} from 'react';
import {DayPilotCalendar} from "@daypilot/daypilot-lite-react";

class Calendar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      viewType: "Resources",
      startDate: "2022-11-07",
      columns: [
        {name: "שבת", id: "R1"},
        {name: "שישי", id: "R2"},
        {name: "חמישי", id: "R3"},
        {name: "רביעי", id: "R4"},
        {name: "שלישי", id: "R5"},
        {name: "שני", id: "R6"},
        {name: "ראשון", id: "R7"},
      ]
    };
  }

  render() {
    return (
      <DayPilotCalendar
        {...this.state}
      />
    );
  }
}

export default Calendar;