import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
      0% {top : -20px;}
      25% {top : 50px;}
      50% {top : -20px;}
      75% {top : 50px;}
      100% {top : 0px;}
    }`

    let { computer } = this.props;
    return (
      <div className="flex flex-col items-center">
        <style>
          {keyframe}
        </style>
        <div className="border-4 border-green-400 bg-white w-36 h-28 rounded-2xl flex items-center justify-center relative">
          <img
            className="w-16 transform rotate-120 absolute"
            src={computer.hinhAnh}
            alt="..."
            style={{animation:`randomItem${Date.now()} 0.5s`}}
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
