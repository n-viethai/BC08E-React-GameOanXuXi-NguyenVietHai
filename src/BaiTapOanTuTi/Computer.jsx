import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let { computer } = this.props;
    // console.log(computer);
    return (
      <div className="flex flex-col items-center">
        <div className="border-4 border-green-400 bg-white w-36 h-28 rounded-2xl flex items-center justify-center">
          <img
            className="w-16 transform rotate-120"
            src={computer.hinhAnh}
            alt="..."
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          className="w-48 h-48 mt-3"
          src="./img/gameOanTuTi/playerComputer.png"
          alt="iron man"
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    computer: state.gameOanTuTiReducer.computer,
  };
};
export default connect(mapStateToProps)(Computer);
