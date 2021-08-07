const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/gameOanTuTi/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/gameOanTuTi/bua.png", datCuoc: true },
    { ma: "bao", hinhAnh: "./img/gameOanTuTi/bao.png", datCuoc: false },
  ],
  ketQua: "Nhấn Play để bắt đầu chiến!!!",
  soBanThang: 0,
  soLuotChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/gameOanTuTi/keo.png" },
};

const BaiTapOanTuTiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      let mangCuocUpdate = state.mangDatCuoc.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }

    case "RAN_DOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapOanTuTiReducer;
