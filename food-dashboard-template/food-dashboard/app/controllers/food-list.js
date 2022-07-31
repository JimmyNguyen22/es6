import { LOAI_MON, TINH_TRANG } from "../models/constant/constant.js";
import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js";
// Lấy dữ liệu từ localStorage ra đưa vào thuộc tính của menu.danhSachMonAn
// let mangMonAn = [];
let menu = new Menu();
menu.getMonAn();

/*
window.onload = function () {
  // Trang food-list.html load xong thì lấy dữ liệu từ localStorage gán vào mangMonAn
  layMonAN();
  console.log("mangMonAn", mangMonAn);
};
// Lưu món an vào localStorage
function luuMonAn() {
  // Biến đổi mảng món ăn thành chuỗi
  let localMangMonAn = JSON.stringify(mangMonAn);
  localStorage.setItem("mangMonAn", localMangMonAn);
}

function layMonAN() {
  // kiểm tra storage có mảng đó hay ko => có mới lấy ra
  if (localStorage.getItem("mangMonAn")) {
    let localMangMonAn = localStorage.getItem("mangMonAn");
    mangMonAn = JSON.parse(localMangMonAn);
  }
}
*/

const renderTableMonAn = (mangMonAn) => {
  let html = "";
  for (let monAn of mangMonAn) {
    let newMonAn = new MonAn();
    let monAnMerge = { ...newMonAn, ...monAn };
    html += `
        <tr> 
            <td>${monAnMerge.maMon}</td>
            <td>${monAnMerge.tenMon} </td>
            <td>${LOAI_MON[monAnMerge.loai]} </td>
            <td>${monAnMerge.giaMon} </td>
            <td>${monAnMerge.khuyenMai} </td>
            <td>${monAnMerge.tinhGiaKhuyenMai()}</td>
            <td>${TINH_TRANG[monAnMerge.tinhTrang]} </td>
            <td> 
                <button class="btn btn-danger" onclick="xoaMonAN('${
                  monAnMerge.maMon
                }')"> Xoá</button>
                <button class="btn btn-primary" data-toggle="modal"
                data-target="#exampleModal" onclick="chinhSua('${
                  monAnMerge.maMon
                }')"> Sửa</button>
            </td>
        </tr> `;
  }
  document.querySelector("tbody").innerHTML = html;
};

// gọi hàm renderTableMonAn truyền vào mảng món ăn
renderTableMonAn(menu.danhSachMonAn);

window.xoaMonAn = (maMonAnClick) => {
  menu.xoaMonAn(maMonAnClick);
  // xoá món ăn trên menu.danhSachMonAn
  renderTableMonAn(menu.danhSachMonAn);
};

window.chinhSua = (maMonClick) => {
  let monAnChinhSua = menu.layThongTinMonAn(maMonClick);

  let arrInput = document.querySelectorAll(
    "#foodForm input,#foodForm select, #foodForm textarea"
  );
  for (let input of arrInput) {
    let { id } = input;
    input.value = monAnChinhSua[id];
  }
};

document.querySelector("#btnCapNhat").onclick = function () {
  // Lấy tất cả dữ liệu ng dùng lấy từ giao diện
  let monAnEdit = new MonAn();
  let arrInput = document.querySelectorAll(
    "#foodForm input,#foodForm select, #foodForm textarea"
  );
  for (let input of arrInput) {
    monAnEdit[input.id] = input.value;
  }
  // cập nhật món an trong mang = mon an người dùng edit trên giao diện
  menu.capNhapMonAn(monAnEdit.maMon, monAnEdit);
  // Tạo lại table mới
  renderTableMonAn(menu.danhSachMonAn);
};
