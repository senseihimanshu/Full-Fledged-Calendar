import React, { Component } from "react";

import "./Events.css";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reminders: {}
    };
  }

  clearFields = () => {
    document.getElementById("note").value = "";
    document.getElementById("time").value = "";
  };

  handleChangeReminders = (remindersTemp) => {
    this.props.changeReminders(remindersTemp);
  };

  handleReminder = reminder => {
    let key = `${this.props.selectedYear}${this.props.selectedMonth}${
      this.props.selectedDate
    }`;

    let remindersTemp;

    if (!(key in this.state.reminders)) {
      remindersTemp = {
        ...this.state.reminders,
        [key]: [reminder]
      };
      this.setState({
        reminders: {
          ...this.state.reminders,
          [key]: [reminder]
        }
      });
    } else {
      remindersTemp = {
        ...this.state.reminders,
        [key]: [...this.state.reminders[key], reminder]
      };
      this.setState({
        reminders: {
          ...this.state.reminders,
          [key]: [...this.state.reminders[key], reminder]
        }
      });
    }

    this.handleChangeReminders(remindersTemp);

    this.clearFields();
  };

  addReminder = e => {
    e.preventDefault();
    if (
      document.getElementById("note").value !== "" &&
      document.getElementById("time").value !== ""
    ) {
      let reminder = {
        note: document.getElementById("note").value,
        time: document.getElementById("time").value
      };

      this.handleReminder(reminder);
    } else {
      document.getElementById("showMessage").innerHTML =
        "Please fill all the details";
      setTimeout(() => {
        document.getElementById("showMessage").innerHTML = "";
      }, 2000);
    }
  };

  render() {
    return (
      <section className="events">
        <div
          className="events__container"
          style={{ overflowY: "scroll", overflowX: "hidden" }}
        >
          <ul className="events__container-parent">
            Current Events:
            {`${this.props.selectedYear}${this.props.selectedMonth}${
              this.props.selectedDate
            }` in this.state.reminders ? (
              this.state.reminders[
                `${this.props.selectedYear}${this.props.selectedMonth}${
                  this.props.selectedDate
                }`
              ].map(cur => {
                return (
                  <li
                    key={cur.time}
                    style={{
                      color: "#28b485",
                      fontSize: "2.0rem",
                      textTransform: "uppercase",
                      position: "relative",
                      listStyle: "none"
                    }}
                  >
                    {cur.note}{" "}
                    <span style={{ position: "absolute", right: "12rem" }}>
                      @{cur.time}
                    </span>
                  </li>
                );
              })
            ) : (
              <li
                style={{
                  listStyle: "none",
                  color: "#ff5400",
                  fontSize: "2.4rem"
                }}
              >
                No reminders for this date!
              </li>
            )}
          </ul>
        </div>

        <form className="events__create-event">
          <div
            id="showMessage"
            style={{
              position: "absolute",
              top: "-4rem",
              fontSize: "2.4rem",
              letterSpacing: "2px",
              color: "rgb(126, 213, 111)",
              backgroundColor: "white",
              width: "100%"
            }}
          />

          <input
            className="events__create-event-input"
            type="text"
            placeholder="Create an Event"
            id="note"
            required
          />
          <input
            className="events__create-event-time"
            type="time"
            id="time"
            required
          />
          <button type="submit" onClick={e => this.addReminder(e)}>
            <i className="events__create-event-icon icon-basic-todo-pen" />
          </button>
        </form>
      </section>
    );
  }
}

export default Events;
