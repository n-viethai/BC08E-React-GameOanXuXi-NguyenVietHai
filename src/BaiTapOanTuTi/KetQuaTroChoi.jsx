import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
      let {ketQua,soBanThang,soLuotChoi} = this.props;
    return (
      <div className="text-3xl">
        <div className="my-10">
          <p className="text-yellow-400 ">{ketQua}</p>
        </div>
        <div className="my-10">
          <p className="text-green-400 ">
            Số bàn thắng : 
            <span className="text-yellow-400"> {soBanThang} </span>
          </p>
        </div>
        <div className="my-10">
          <p className="text-green-400 ">
            Tổng số màn chơi : 
            <span className="text-yellow-400"> {soLuotChoi} </span>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        ketQua : state.gameOanTuTiReducer.ketQua,
        soBanThang : state.gameOanTuTiReducer.soBanThang,
        soLuotChoi : state.gameOanTuTiReducer.soLuotChoi
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi)
