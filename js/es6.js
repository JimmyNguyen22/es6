/*
1. cơ chế khai báo biến vat , let ,const
* Cẩu hỏi phỏng vấn: var ,let khác nau ntn
var : hỗ trợ cơ chế hoisting (tự khai báo 1 biến trên đầu file). Phạm vi ảnh hưởng toàn scope
let : ko hỗ trợ hoisting, phạm vi ảnh hưởng trên từng scope (cùng scope sẽ báo lỗi). Nếu khác scope thì js tự tạo thêm biến mới
=> trong es6 sử dụng let thay cho var trong tất cả trường hợp
const: tương tự như let ko hỗ trợ hoisting, và ko thể gán lại giá trị sau khi khai báo. Lưu ý: Đối với object hoặc array hoặc đối tượng thì sẽ ko gán lại đc object hoac array hay đối tượng khác mà chỉ có thể thay đổi giá trị bên trong thuộc tính hoặc phần tử 
*/

let title = "cybersoft";
{
  let title = "bc28";
  console.log(title); // bc28
}
console.log(title); // cybersoft

// ứng dụng
let arrButton = document.querySelectorAll("button");

for (let index = 0; index < arrButton.length; index++) {
  let btn = arrButton[index];
  btn.onclick = function () {
    alert(index);
  };
}

const DOMAIN = " https://svcy.myclass.vn/api";
{
  const DOMAIN = "avc";
}
const SETTING = {
  URL: "abc.com",
};
// Khi hằng số là array hoặc object thì ko thể gán lại array hoặc object khác tuy nhiên có thể thay đổi giá trị thuộc tính bên trong
SETTING.URL = "ssm";

/*
   Có 2 loại giá trị lưu trữ
  primitive value: string, number, boolean, undefined, null các kiểu dữ liệu máy tính hiểu được.
   reference value (object,array,SinhVien ...): {} hoăc [] : biến lưu trữ địa chỉ ô nhớ
   let sv = new SinhVien();
	 0xxx
   let ob1 = {};
	0yyy
 */

// -------- function --------

main();
// declare function: hỗ trợ hoisting
function main() {
  console.log("main");
}
// main()
// expression function : ko hỗ trợ hoisting,
// showMess();
var showMess = function () {
  console.log("showMess");
};
var showMess = function () {
  console.log("showMess12");
};
showMess();

// -------------- Arrow function ------
/*
  + không hỗ trợ hoisting
  + Khi function chỉ có 1 tham số thì không cần (). Hai tham số trở lên thì phải có (param1, param2)
  + Khi function chỉ có duy nhất 1 lệnh return thì có thể bỏ {} và return. Nếu nhiều dòng xử lý thì phải có {
	  lệnh 1;
	  lệnh 2 ;....
  }
  + Arrow function không hỗ trợ con trỏ this (context)
 */

let renderTitle = (title) => "Hello " + title;
console.log(renderTitle("aaa"));

/*   ------------- Context(this) ----------
+ mặc định khi this không xác định được ngữ cảnh thì this là window
+ trong object thì this sẽ là object đó
+ trong function thì this chính là function đó

=> Dung arrow function cho định nghĩa hàm để loại bỏ ngữ cảnh function của con trỏ this
*/

// var hoTen = "abc";
// this.hoTen = "abc";
// window.hoTen = "abc";
// console.log(this);
console.log("width màn hình", window.innerWidth);
// console.log("height màn hình", this.innerHeight);
window.document.title = "bc 28";
console.log(window.location.href);

let product = {
  id: 1,
  name: "product",
  price: 2000,
  showInfo: function () {
    let showInfoProduct = () => {
      console.log("id", this.id);
      console.log("name", this.name);
    };
    showInfoProduct();
  },
};
product.showInfo();

// function LopHoc() {
//   this.maLop = "";
//   this.tenLop = "";
//   this.hienThi = function () {
//     console.log("mã lớp", this.maLop);
//     console.log("ten lop", this.tenLop);
//   };
// }

// let lh1 = new LopHoc();
// let lh2 = new LopHoc();

/*
	Cho mảng màu yêu cầu
  + Render ra các button tại div#colors
  + Xử lý khi click vào các button thì <i> thay đổi màu sắc tương ứng
*/

let arrColor = [
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "pink",
  "violet",
];

let renderButton = () => {
  // input: arrColor = [];
  // output: html <button>red</button>  <button> green </button>
  let html = "";
  for (let i = 0; i < arrColor.length; i++) {
    // mỗi lần duyệt lấy ra 1 mảng
    let color = arrColor[i];
    html += `
      <button class="btn text-white" style="background-color: ${color}" onclick="changeColor('${color}')"> ${color} </button>
    `;
  }
  // in output ra giao diện
  document.querySelector(".color").innerHTML = html;
};

window.changeColor = (color) => {
  document.querySelector("#home").style.color = color;
};

// Khi trang web vừa load gọi hàm renderButton thực thi
window.onload = function () {
  renderButton();
};

// ------------ Default parameters --------------
/*
  Khi gọi hàm không truyền tham số thì hàm sẽ lấy giá trị mặc định. Tuy nhiên nếu gọi hàm truyền tham số thì hàm sẽ lấy tham số mình truyền
*/

let hienThiThongTin = (
  hoTen = "jimmy",
  namSinh = "2003",
  tuoi = 2022 - namSinh
) => {
  console.log("họ ten", hoTen);
  console.log("tuoi", tuoi);
};

hienThiThongTin();
hienThiThongTin("ivnh phu", 20, 18);
hienThiThongTin("ivnh phu", 2000);

// restparameters : nhận nhiều tham số khi gọi hàm dưới dạng array
let tinhTong = (...danhSachThamSo) => {
  // [1,2] | [1,2,3]
  switch (danhSachThamSo.length) {
    case 2:
      {
        console.log("tổng ", danhSachThamSo[0] + danhSachThamSo[1]);
      }
      break;
    case 3:
      {
        console.log(
          "tổng ",
          danhSachThamSo[0] + danhSachThamSo[1] + danhSachThamSo[2]
        );
      }
      break;
    default: {
      console.log("Tham so ko hop lệ");
    }
  }
};

tinhTong(1, 2);
tinhTong(2, 2, 3);
tinhTong(1, 3, 5, 4);

// Spread operator :Dùng để clone giá trị object hoặc array. Có thể thêm được thuộc tính hoặc gán lại giá trị thuộc tính với cú pháp ngắn gọn

let ob1 = { id: 5, price: 1000 }; // 0xxx
let ob2 = { ...ob1 }; // 0yyy
ob2.id = 10;
console.log(ob2);

let arr1 = [2, 5, 3];
let arr2 = [...arr1, 6, 7];
console.log(arr2);

// Destructuring: dùng để bóc tách thuộc tính từ object hoặc mảng ra để tạo thành 1 biến ngắn gọn hơn

let product1 = {
  id: 1,
  name: "Product 1",
  price: 1000,
  showInfo: function () {
    console.log("show info");
  },
};

let { id, showInfo, ...ttConLai } = product1;
showInfo();
console.log("ttconlai", ttConLai);
console.log(id);

// tuple

let [maSP, tenSP, gia, hienThi] = [
  1,
  "product 1",
  1000,
  function () {
    console.log("show info");
  },
];
console.log("id", maSP);
console.log("name", tenSP);
hienThi();

// ----------- Dynamic key ---------
// Cho phép truyền giá trị vào tên thuộc tính (key)
let key = "mô tả";
let value = {
  id: 22,
  [key]: "product",
  name: "jimmy",
};
console.log(value);
console.log(value[key]);

// ------------- Object literal ----------------
// Tạo ra tên thuộc tính dựa vào tên biến, và lấy giá trị biến làm giá trị thuộc tính
let id1 = "01";
let nameObject = "kiều";
let showInfo1 = function () {
  console.log(id1);
  console.log(nameObject);
};
let myClass = {
  id1,
  nameObject,
  showInfo1,
};
console.log(myClass);

// ---------------------- for in, for of --------------------//
// for in duyet Object ({}) mỗi lần duyệt lấy ra ten thuoc tính (key) của object
// for of duyet Array ([]) mỗi lần duyệt lấy ra 1 phần tử của mảng
let arrProduct = [
  { id: "01", name: "iphone", price: 1000, productTypeId: "Phone" }, // index: 0
  { id: "02", name: "iphone XS", price: 2000, productTypeId: "Phone" }, // index: 1
  { id: "03", name: "Macbook pro", price: 1500, productTypeId: "Laptop" }, // index: 2
  { id: "04", name: "Macbook pro 2022", price: 2500, productTypeId: "Laptop" },
  { id: "05", name: "Ipad Pro", price: 2500, productTypeId: "Tablet" },
  { id: "06", name: "Ipad Pro 2022", price: 3000, productTypeId: "Tablet" },
];
// for in: ngoài duyệt index của mảng thì còn duyệt được key của object
for (let index in arrProduct) {
  // mỗi lần duyệt lấy ra 1 index của mảng
  let prod = arrProduct[index];
  console.log("prod", prod);
}

for (let prod of arrProduct) {
  // mỗi lần duyệt lấy ra 1 phần tử của mảng
  console.log("prod", prod);
}

let productDefault = {
  id: "01",
  name: "product 1",
  price: 1000,
  desc: "product desc",
};

let tr = "<tr>";
for (let key in productDefault) {
  console.log(key, productDefault[key]);
  tr += `<td>${productDefault[key]}</td>`;
}
tr += "</tr>"; // có bao nhiêu thuộc tính thì tự tạo thẻ td
console.log(tr);

// một số hàm xử lý mảng trong es6 [].method

// .filter: Dùng để lọc 1 mảng con (kết quả trả về mảng) từ mảng chính. Nếu phần tử thoả arrow function thì phần tử đó sẽ được add vào mảng kết quả. Nếu ko có phần tử nào khớp arrow function thì kết quả trả về mảng rỗng []

/* Lấy ra các product là phone */
let arrPhone = arrProduct.filter((item) => item.productTypeId === "Phone");
console.log("arrPhone", arrPhone);

// lấy sp có giá từ 2k trở xuống
let arrPrice2000 = arrProduct.filter((item) => item.price <= 2000);
console.log("arrPrice2000", arrPrice2000);

// .findIndex : Dùng để tìm vị trí phần tử trong mảng khớp với arrow function. Nếu ko tìm thấy thì trả về -1
let index = arrProduct.findIndex((prod) => prod.id === "03"); // trả về 2
console.log("index: " + index);
// .find: Lấy ra 1 giá trị trong mảng khớp với arrow function. nếu tim ko thấy thi trả về undefined. (tương tư findIndex nhưng trả về phần tử đó thay vi vị tri cua phần tử đó)
let pt05 = arrProduct.find((item) => item.id === "05");
if (pt05) {
  pt05.price = 5000;
  console.log("arrProduct", arrProduct);
} else {
  console.log("không tìm thấy");
}
// .map(): hàm dùng để biến đổi mảng này thành mảng khác, tạo ra mảng mới từ mảng cũ
/*  
let arrResult = arrProduct.map((item, index) => {
  // xử lý để trả về ele mới
  let newValue = { id: item.id, name: item.name };
  return newValue;
});
console.log(arrResult);

let inner = arrProduct.map((item, index) => {
  let tr = `<tr>
	<td>${item.id} </td>
	<td>${item.name} </td>
	<td>${item.price} </td>
	<td>${item.productTypeId} </td>
  </tr>`;
  return tr;
});
console.log(inner);

for (let tr of inner) {
  document.querySelector("#tableProduct").innerHTML += tr;
}
*/

//reduce: tương tự map tuy nhien biến 1 mảng thành 1 giá trị ([],{},string, number...)
// vd muốn tính tổng tiền của 1 số sản phẩm

let tongTien = arrProduct.reduce((price, item, index) => {
  // price = 0, price 1000, price 3000
  return price + item.price; // 1000 3000
}, 0);
console.log(tongTien);

let renderTblProduct = () => {
  let html = arrProduct.reduce((innerHTML, item, index) => {
    return (
      innerHTML +
      `<tr>
     	 <td>${item.id} </td>
       <td>${item.name} </td>
       <td>${item.price} </td>
   	  <td>${item.productTypeId} </td>
  </tr>`
    );
  }, "");
  document.querySelector("#tableProduct").innerHTML = html;
};

renderTblProduct();

// reverse: Hàm đảo ngược mảng
arrProduct.reverse();
console.log("arrProduct", arrProduct);

// sort
// short theo giá tiền sản phẩm

document.querySelector("#btnSapXep").onclick = function () {
  let arrSortGia = arrProduct.sort((itemKeTiep, item) => {
    let giaSP = item.price;
    let giaSPKeTiep = itemKeTiep.price;
    return giaSPKeTiep - giaSP;
  });
  arrProduct = arrSortGia;
  renderTblProduct();
};

// Bài tập: thông tin nhân viên
document.querySelector("#btnXuatThongTin").onclick = (event) => {
  event.preventDefault(); // Chặn reload cua browser
  let arrInput = document.querySelectorAll("#frm input,#frm select");
  let nv = {};
  // DOM
  for (let tagInput of arrInput) {
    let { id, value } = tagInput;
    nv[id] = value;
  }
  let html = "";
  for (let key in nv) {
    html += `<tr> 
    <td>${key}</td>
    <td>${nv[key]}</td>
    </tr>`;
  }
  document.querySelector("#tblNhanVien").innerHTML = html;
};
