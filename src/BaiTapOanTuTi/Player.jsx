import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  renderMangDatCuoc = () => {
    let { mangDatCuoc } = this.props;
    return mangDatCuoc.map((item, index) => {
      //   xét giá trị đặt cược thêm viền cho item được chọn
      let className = "";
      if (item.datCuoc) {
        className =
          "w-1/2 m-auto border border-white cursor-pointer hover:bg-blue-300 p-2 rounded-xl bg-yellow-500";
      } else {
        className =
          "w-1/2 m-auto border border-white cursor-pointer hover:bg-blue-300 p-2 rounded-xl";
      }
      return (
        <div className="w-1/3" key={index}>
          <div
            className={className}
            onClick={() => {
              const action = {
                type: "DAT_CUOC",
                maCuoc: item.ma,
              };
              this.props.dispatch(action);
            }}
          >
            <img className="w-24" src={item.hinhAnh} alt="..." />
          </div>
        </div>
      );
    });
  };
  render() {
    let { mangDatCuoc } = this.props;
    return (
      <div className="flex flex-col items-center">
        <div className="border-4 border-green-400 bg-white w-36 h-28 rounded-2xl flex items-center justify-center">
          <img
            className="w-16 transform rotate-120"
            src={mangDatCuoc.find((item) => item.datCuoc === true).hinhAnh}
            alt="..."
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          className="w-48 h-48 mt-3"
          src="./img/gameOanTuTi/player.png"
          alt="iron man"
        />
        <div className="flex mt-6">{this.renderMangDatCuoc()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.gameOanTuTiReducer.mangDatCuoc,
  };
};
export default connect(mapStateToProps)(Player);
