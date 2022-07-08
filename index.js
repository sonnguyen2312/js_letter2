var a = 5;
var b = 10;
var c = 15;
console.log('a= ',a,'b= ',b);
console.log('Lớn hơn: ',a > b);
console.log('Bé hơn: ',a < b);
console.log('Bằng: ',a == b);
console.log('Khác: ',a != b);
console.log('Lớn hơn hoặc bằng: ', a >= b);
console.log('Bé hơn hoặc bằng: ',a <= b);
//Ví dụ 1: Tính trị tuyệt đối
/*
    1. Cấu trúc rẽ nhánh trong lập trình
*/  
document.getElementById('btnTinhTriTuyetDoi').onclick = function (){
    //input: iSo: number
    var iSo = document.getElementById('iSo_1').value;
    //output: số: number
    var ketQua = 0;
    //progress
    ketQua = iSo;
    if (ketQua < 0 ){
        ketQua = -iSo;
    }
    document.getElementById('ketQuaViDu1').innerHTML = ketQua;
}
/*
    Cấu trúc rẽ nhánh trong lập trình:
    ------if else------
    + Đúng thì xử lý trường hợp 1
    + Sai thì xử lý trường hợp 2
*/
document.getElementById('btnKiemTraSo').onclick = function (){
    //input: number
    var iSo = document.getElementById('iSo_2').value;
    //output: string
    ketQua = '';
    //progress
    if (iSo % 2 == 0 ){
        ketQua = 'Sô chẵn';
    }
    else {
        ketQua = 'Số lẽ';
    }
    document.getElementById('ketQuaViDu2').innerHTML = iSo + ' là ' + ketQua;
}
//Bài tập 1: Nhập vào điểm trung bình.Nếu lớn hơn =5 thì ra đậu hoặc ngược lại  bé hơn 5 thì in ra rớt
document.getElementById('btnXepLoai').onclick = function () {
    //input: diemTB: number
    var diemTB = document.getElementById('diemTrungBinh').value;
    //output: xepLoai: string
    var xepLoai = '';
    //progress
    if (Number(diemTB) >= 5){
        xepLoai = 'Đậu'
    }
    else {
        xepLoai = 'Rớt'
    }
    //In kết quả lên giao diện
    document.getElementById('ketQuaBai1').innerHTML = 'Kết quả: '+xepLoai;
}
//Bài tập 2: Cho người dùng nhập vào 2 số.Tìm số lớn nhất
document.getElementById('btnTimSoLonNhat').onclick = function () {
    //input soThu1:number soThu2: number
    var soThu1 = Number(document.getElementById('soThu1').value);
    var soThu2 = Number(document.getElementById('soThu2').value);
    //output: ketQua: number
    var max = soThu1;
    //progress
    if (max < soThu2) {
        max = soThu2;
    }
    var ketQua = max;
    //In kết quả ra màn hình
    document.getElementById('ketQuaBai2').innerHTML = 'Số lớn nhất là: ' + ketQua;
}
//Bài tập 3
document.getElementById('btnTinhTien').onclick = function () {
    var soGioLam = Number(document.getElementById('soGioLam').value);
    var tienCong = Number(document.getElementById('tienCongTrenGio').value);
    var tienLuong = 0;
    if (soGioLam <= 40) {
        tienLuong = soGioLam * tienCong;
    }
    else {
        tienLuong = 40*tienCong + (soGioLam - 40)*tienCong*1.5;
    }
    document.getElementById('tienLuong').innerHTML = 'Tiền lương: ' + tienLuong;
}