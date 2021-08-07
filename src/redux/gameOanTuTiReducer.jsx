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
      state.mangDatCuoc = state.mangDatCuoc.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      return { ...state };
    }

    case "RAN_DOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }
    
    case "END_GAME": {
      state.soLuotChoi ++;
      let player = state.mangDatCuoc.find(item => item.datCuoc === true);
      let computer = state.computer;

      switch(player.ma) {
        case 'keo' :{
          if(computer.ma === 'keo') {
            state.ketQua = 'hòa nhau rồi nha!!!'
          } else if(computer.ma === 'bua') {
            state.ketQua = 'thua sấp mặt nha!!!'
          } else{
            state.ketQua = 'mình thắng nhá, đồ con gà !!!'
            state.soBanThang ++;
          }
          break;
        }
        case 'bua' : {
          if(computer.ma === 'keo') {
            state.ketQua = 'mình thắng nhá, đồ con gà !!!'
            state.soBanThang ++;
          } else if(computer.ma === 'bua') {
            state.ketQua = 'hòa nhau rồi nha!!!'
          } else{
            state.ketQua = 'thua sấp mặt nha!!!'
          }
          break;
        }
        case 'bao' : {
          if(computer.ma === 'keo') {
            state.ketQua = 'thua sấp mặt nha!!!'
          } else if(computer.ma === 'bua') {
            state.ketQua = 'mình thắng nhá, đồ con gà !!!'
            state.soBanThang ++;
          } else{
            state.ketQua = 'hòa nhau rồi nha!!!'
          }
          break;
        }

        default : state.ketQua = 'Đồ con gà'
      }
    }
    default: return { ...state };
  }
};

export default BaiTapOanTuTiReducer;
