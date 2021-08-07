import React, { Component } from "react";
import "./BaiTapOanTuTi.scss";
import Computer from "./Computer";
import KetQuaTroChoi from "./KetQuaTroChoi";
import Player from "./Player";
import { connect } from "react-redux";

class BaiTapOanTuTi extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="game__container mt-5">
          <div className="flex">
            <div className="w-1/3">
              <Player />
            </div>
            <div className="w-1/3 text-center">
              <KetQuaTroChoi />
              <button
                className="bg-green-500 text-3xl text-white p-5 rounded-xl hover:bg-green-700 mt-10"
                onClick={() => {
                  const action = {
                    type: "RAN_DOM",
                  };
                  let count = 0;
                  let randomComputerItem = setInterval(() => {
                    this.props.dispatch(action);
                    count++;
                    if (count >= 15) {
                      // Dùng hàm setinterval
                      clearInterval(randomComputerItem);
                      const action = {
                        type: "END_GAME",
                      };
                      this.props.dispatch(action);
                    }
                  }, 100);
                }}
              >
                Play game
              </button>
            </div>
            <div className="w-1/3">
              <Computer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(BaiTapOanTuTi);
