import React, { Component } from "react";
import moment from "moment";

class Date extends Component {

  changeSelected = e => {
    this.props.changeSelected(e.innerHTML, this.props.month, this.props.year);
  };

  render() {

    return (
      <tr className="Date row">
        {this.props.datesArr.map((current, index) =>
          current === "-" ? (
            <td className="col-1-of-7 empty" key={current + index}>
              {current}
            </td>
          ) : current == moment().format("D") &&
            this.props.month == moment().format("M") &&
            this.props.year == moment().format("YYYY") ? (
            <td
              className="col-1-of-7 currentDate"
              key={current + index}
              onClick={e => this.changeSelected(e.target)}
            >
              {current}
            </td>
          ) : 
          
          (`${this.props.year}${this.props.month}${current}` in this.props.reminders && this.props.reminders[`${this.props.year}${this.props.month}${current}`].length ? (
            <td
              className="col-1-of-7 reminder"
              key={current + index}
              onClick={e => this.changeSelected(e.target)}
            >
              {current}
            </td>
          ): (
            <td
              className="col-1-of-7"
              key={current + index}
              onClick={e => this.changeSelected(e.target)}
            >
              {current}
            </td>
          ))
        )}
      </tr>
    );
  }
}

export default Date;
