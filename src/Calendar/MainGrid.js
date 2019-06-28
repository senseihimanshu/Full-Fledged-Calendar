import React, { Component } from "react";

import "./MainGrid.css";
import Date from "./Date";

import moment from "moment";

class MainGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: moment().format("M"),
      active: ""
    };

    this.datesArr = [[], [], [], [], [], []];

    this.update = this.update.bind(this);
  }

  componentWillMount() {
    this.setState({
      active: `month-${this.state.month}`
    });
  }

  componentDidMount() {
    document
      .getElementsByClassName(`month-${this.state.month}`)[0]
      .classList.toggle("active");
  }

  changeMonth = (e, changedMonth) => {
    document
      .getElementsByClassName(`month-${this.state.month}`)[0]
      .classList.toggle("active");

    this.setState({
      month: changedMonth,
      active: `month-${changedMonth}`
    });

    e.target.classList.toggle("active");
  };

  update() {
    this.datesArr = [[], [], [], [], [], []];

    for (
      let t = 0;
      t < moment(`${this.props.currentYear}/${this.state.month}/1`).day();
      t++
    ) {
      this.datesArr[0].push("-");
    }

    let i = 1;
    for (let j = 0; j < 6; j++) {
      for (
        ;
        i <=
        moment(`${this.props.currentYear}/${this.state.month}/1`).daysInMonth();
        i++
      ) {
        if (this.datesArr[j].length < 7) {
          this.datesArr[j].push(i);
        } else {
          break;
        }
      }
    }
  }


  render() {
    this.update();

    return (
      <section className="main__grid">
        <div className="main-months">
          <div className="row">
            <div className="col-1-of-12">
              <a
                href="#"
                className="month-1"
                onClick={e => this.changeMonth(e, 1)}
              >
                Jan
              </a>
            </div>
            <div className="col-1-of-12">
              <a
                href="#"
                className="month-2"
                onClick={e => this.changeMonth(e, 2)}
              >
                Feb
              </a>
            </div>
            <div className="col-1-of-12">
              <a
                href="#"
                className="month-3"
                onClick={e => this.changeMonth(e, 3)}
              >
                Mar
              </a>
            </div>
            <div className="col-1-of-12">
              <a
                href="#"
                className="month-4"
                onClick={e => this.changeMonth(e, 4)}
              >
                Apr
              </a>
            </div>
            <div className="col-1-of-12">
              <a
                href="#"
                className="month-5"
                onClick={e => this.changeMonth(e, 5)}
              >
                May
              </a>
            </div>
            <div className="col-1-of-12">
              <a
                href="#"
                className="month-6"
                onClick={e => this.changeMonth(e, 6)}
              >
                June
              </a>
            </div>
            <div className="col-1-of-12">
              <a
                href="#"
                className="month-7"
                onClick={e => this.changeMonth(e, 7)}
              >
                July
              </a>
            </div>
            <div className="col-1-of-12">
              <a
                href="#"
                className="month-8"
                onClick={e => this.changeMonth(e, 8)}
              >
                Aug
              </a>
            </div>
            <div className="col-1-of-12">
              <a
                href="#"
                className="month-9"
                onClick={e => this.changeMonth(e, 9)}
              >
                Sept
              </a>
            </div>
            <div className="col-1-of-12">
              <a
                href="#"
                className="month-10"
                onClick={e => this.changeMonth(e, 10)}
              >
                Oct
              </a>
            </div>
            <div className="col-1-of-12">
              <a
                href="#"
                className="month-11"
                onClick={e => this.changeMonth(e, 11)}
              >
                Nov
              </a>
            </div>
            <div className="col-1-of-12">
              <a
                href="#"
                className="month-12"
                onClick={e => this.changeMonth(e, 12)}
              >
                Dec
              </a>
            </div>
          </div>
        </div>

        <div className="main-dates">
          <table>
            <tbody>
              <tr className="row days">
                <td className="col-1-of-7">Sun</td>
                <td className="col-1-of-7">Mon</td>
                <td className="col-1-of-7">Tue</td>
                <td className="col-1-of-7">Wed</td>
                <td className="col-1-of-7">Thur</td>
                <td className="col-1-of-7">Fri</td>
                <td className="col-1-of-7">Sat</td>
              </tr>
              
              <Date datesArr={this.datesArr[0]} changeSelected={this.props.changeSelected} month={this.state.month} year={this.props.currentYear} reminders={this.props.reminders}/>
              <Date datesArr={this.datesArr[1]} changeSelected={this.props.changeSelected} month={this.state.month} year={this.props.currentYear} reminders={this.props.reminders}/>
              <Date datesArr={this.datesArr[2]} changeSelected={this.props.changeSelected} month={this.state.month} year={this.props.currentYear} reminders={this.props.reminders}/>
              <Date datesArr={this.datesArr[3]} changeSelected={this.props.changeSelected} month={this.state.month} year={this.props.currentYear} reminders={this.props.reminders}/>
              <Date datesArr={this.datesArr[4]} changeSelected={this.props.changeSelected} month={this.state.month} year={this.props.currentYear} reminders={this.props.reminders}/>
              <Date datesArr={this.datesArr[5]} changeSelected={this.props.changeSelected} month={this.state.month} year={this.props.currentYear} reminders={this.props.reminders}/>
            </tbody>
          </table>

        </div>

      </section>
    );
  }
}

export default MainGrid;
