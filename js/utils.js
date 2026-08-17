// utils.js
// Cac ham dung chung: lay du lieu san pham tu products.json va dinh dang gia tien
// Dung chung cho: san-pham.js, chi-tiet-san-pham.js, nguon-goc.js

/**
 * Doc du lieu san pham tu data/products.json bang fetch().
 * File nay nam trong /js, nhung cac trang goi no lai nam trong /pages,
 * nen duong dan fetch phai la duong dan tuong doi TU TRANG HTML dang mo,
 * tuc la "../data/products.json".
 * Tra ve mang san pham, hoac ném loi de trang goi no tu xu ly (hien thong bao).
 */
async function layDanhSachSanPham() {
    const response = await fetch("../data/products.json");
    if (!response.ok) {
        throw new Error("Khong tai duoc du lieu san pham");
    }
    const danhSach = await response.json();
    return danhSach;
}

/**
 * Vi trong products.json duong dan anh duoc luu dang "assets/images/xxx.jpg"
 * (tuong doi tu thu muc goc du an), con cac trang HTML lai nam trong /pages,
 * nen can them "../" phia truoc de trinh duyet tim dung file anh.
 */
function duongDanAnh(duongDanTrongJson) {
    return "../" + duongDanTrongJson;
}

/** Dinh dang so tien theo kieu Viet Nam, vi du: 190000 -> "190.000đ" */
function dinhDangGia(gia) {
    return gia.toLocaleString("vi-VN") + "đ";
}
