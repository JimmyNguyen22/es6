// Lưu ý Sẽ ko đc thực hiện thao tác dom trên file class. Hoặc nếu thực hiện thì selector phải chuyển thành tham số

export class Menu {
  danhSachMonAn = [];

  addMonAn = function (newMonAn) {
    this.danhSachMonAn.push(newMonAn);
  };

  getMonAn = function () {
    if (localStorage.getItem("mangMonAn")) {
      let localMangMonAn = localStorage.getItem("mangMonAn");
      this.danhSachMonAn = JSON.parse(localMangMonAn);
    }
  };
  saveMonAn = function () {
    // Biến đổi mảng món an thành chuỗi
    this.danhSachMonAn = JSON.stringify(this.danhSachMonAn);
    localStorage.setItem("mangMonAn", this.danhSachMonAn);
  };

  xoaMonAn = function (maMonAn) {
    let index = this.danhSachMonAn.findIndex((mon) => mon.maMon === maMonAn);
    this.danhSachMonAn.splice(index, 1);
  };
  layThongTinMonAn = function (maMon) {
    let monAnLayRa = this.danhSachMonAn.find((mon) => mon.maMon === maMon);
    return monAnLayRa;
  };
  capNhapMonAn = function (maMon, monAnCapNhat) {
    let monAnTrongMang = this.layThongTinMonAn(maMon);
    for (let key in monAnTrongMang) {
      monAnTrongMang[key] = monAnCapNhat[key];
    }
  };
}
