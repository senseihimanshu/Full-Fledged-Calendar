import React, { Component } from "react";
import moment from "moment";

import "./App.css";
import Header from "./Calendar/Header";
import Events from "./Calendar/Events";
import MainHeader from "./Calendar/MainHeader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment().format("D"),
      selectedMonth: moment().format("M"),
      selectedYear: moment().format("YYYY"),
      reminders: {}
    };
  }

  changeReminders = (reminders) => {
    this.setState({
      reminders
    });
  }

  changeSelected = (date, month, year) => {
    this.setState({
      selectedDate: date,
      selectedMonth: month,
      selectedYear: year
    });
  };

  render() {

    return (
      <div className="container">
        <header className="header">
          <Header
            selectedDate={this.state.selectedDate}
            selectedMonth={this.state.selectedMonth}
            selectedYear={this.state.selectedYear}
          />
          <Events
            selectedDate={this.state.selectedDate}
            selectedMonth={this.state.selectedMonth}
            selectedYear={this.state.selectedYear}
            changeReminders={this.changeReminders}
          />
        </header>

        <main>
          <MainHeader changeSelected={this.changeSelected} reminders={this.state.reminders} />
        </main>
      </div>
    );
  }
}

export default App;
