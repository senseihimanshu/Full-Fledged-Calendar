import React, { Component } from "react";

class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date,
      notesArr: [],
      show: false
    };
  }

  render() {
    return (
      <tr className="Date row">
        {this.props.datesArr.map((current, index) =>
          current === "-" ? (
            <td className="col-1-of-7 empty" key={current + index}>
              {current}
            </td>
          ) : (
            <td className="col-1-of-7" key={current + index}>
              {current}
            </td>
          )
        )}
      </tr>
    );
  }
}

export default Date;
