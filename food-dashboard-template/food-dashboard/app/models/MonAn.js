export class MonAn {
  maMon = "";
  tenMon = "";
  loai = "";
  giaMon = "";
  khuyenMai = "";
  tinhTrang = "";
  hinhMon = "";
  moTa = "";
  tinhGiaKhuyenMai = function () {
    return this.giaMon - (this.giaMon * this.khuyenMai) / 100;
  };
}
