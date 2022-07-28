import { LOAI_MON, TINH_TRANG } from "../models/constant/const.js";
import { MonAn } from "../models/MonAn.js";
document.querySelector("#btnThemMon").onclick = function () {
  let arrInput = document.querySelectorAll(
    "#foodForm input,#foodForm select,#foodForm textarea"
  );
  // Lấy thông tin người dùng nhập từ giao diện
  let mon = new MonAn();
  for (let input of arrInput) {
    // for of
    let { id, value } = input; // destructuring object
    mon[id] = value; // dynamic key
  }
  let html = "";
  for (let key in mon) {
    let giaTri = mon[key];
    if (typeof mon[key] === "function") {
      giaTri = mon[key]();
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
    }
    html += ` <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 class="my-0">${key}</h6>
            </div>
            <span id="sp${key}" class="text-muted">${giaTri}</span>
    </li>`;
  }
  // DOM đến thẻ ul hiển thị nội dung li
  document.querySelector("ul.list-group").innerHTML = html;
};
