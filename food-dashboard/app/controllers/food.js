import { LOAI_MON, TINH_TRANG } from "../models/constant/constant.js";
import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js";
import { translate } from "../translate/Vi.js";

// let mangMonAn = []; Cách 1 : khó menternance
let menu = new Menu(); // Cách 2: es6 oop
menu.getMonAn();
console.log("menu", menu);

document.querySelector("#btnThemMon").onclick = function () {
  var arrInput = document.querySelectorAll(
    "#foodForm input,#foodForm select,#foodForm textarea"
  );
  //[inputMaMon,inputTenMon,...]
  // console.log('arrInput',arrInput);

  //Lấy thông tin người dùng nhập từ giao diện
  let mon = new MonAn(); // {maMon:'',tenMon:'',...}

  for (let input of arrInput) {
    // for of
    let { id, value } = input; // destruring object
    mon[id] = value; //dynamic key
  }
  // mon = {maMon:1,tenMon:'Cơm chiên', loai: 'loai1',..., tinhGiaKhuyenMai: function () {}}
  let html = "";
  for (let key in mon) {
    // for in: Duyệt qua các thuộc tính của object món ăn tạo ra các li tương ứng
    let giaTri = mon[key];
    if (typeof mon[key] == "function") {
      giaTri = mon[key](); //Gọi hàm
    }
    switch (key) {
      case "loai":
        {
          giaTri = LOAI_MON[mon[key]];
        }
        break;
      case "tinhTrang":
        {
          giaTri = TINH_TRANG[mon[key]];
        }
        break;
      case "hinhMon": {
        giaTri = `<img src="${mon[key]}" width="200" height="100">`;
      }
    }

    html += `<li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0">${translate[key]}</h6>
                    </div>
                    <span id="sp-${key}" class="text-muted"> ${giaTri}</span>
                </li>`;
  }

  //Dom đến thẻ ul hiển thị nội dung li
  document.querySelector("ul.list-group").innerHTML = html;
  // lưu món ăn vào mảng món ăn
  // mangMonAn.push(mon);
  // luuMonAn();
  menu.addMonAn(mon);
  menu.saveMonAn();
};

{
  /* // Cách 1: Lưu món an vào localStorage
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

    // Đợi html load xong thì các hàm trong function sẽ đc gọi
  window.onload = function () {
    layMonAN();
  };
  }*/
}
