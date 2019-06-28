import React, { Component } from "react";
import moment from "moment";

class Header extends Component {
  render() {
    return (
      <div className="header__content">
        {/* <div className="bg-video">
                    <video className="bg-video__content" autoplay="" loop="">
                        <source src="./assets/img/Computer_guy.mp4" type="video/mp4" />
                        Your Browser is not supported!
                    </video>
                </div> */}

        <h2 className="header-date">{this.props.selectedDate}</h2>
        {/* <h4 className="header-day">{this.props.selectedMonth}</h4> */}
        {/* <h4 className="header-day">{this.props.selectedYear}</h4> */}
        <h4 className="header-day">{moment(`${this.props.selectedYear}-${this.props.selectedMonth}-${this.props.selectedDate}`).format("dddd")}</h4>
      </div>
    );
  }
}

export default Header;
