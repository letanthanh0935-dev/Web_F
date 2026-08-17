// lien-he.js
// Trang Lien he: validate form tinh bang JavaScript, khong gui du lieu that.
// Yeu cau: khong de trong truong bat buoc, kiem tra email co ky tu "@".

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-lien-he");
    const oHoTen = document.getElementById("ho-ten");
    const oEmail = document.getElementById("email");
    const oNoiDung = document.getElementById("noi-dung");
    const thongBaoThanhCong = document.getElementById("thong-bao-thanh-cong");

    form.addEventListener("submit", (sukien) => {
        sukien.preventDefault();
        thongBaoThanhCong.classList.add("hidden");

        let hopLe = true;

        hopLe = kiemTraKhongTrong(oHoTen) && hopLe;
        hopLe = kiemTraEmail(oEmail) && hopLe;
        hopLe = kiemTraKhongTrong(oNoiDung) && hopLe;

        if (hopLe) {
            // Form tinh: chua xu ly gui that, chi hien thong bao thanh cong
            thongBaoThanhCong.classList.remove("hidden");
            form.reset();
        }
    });

    /** Kiem tra 1 truong input/textarea khong duoc de trong */
    function kiemTraKhongTrong(oTruong) {
        const oLoi = oTruong.parentElement.querySelector(".loi-truong");
        const hopLe = oTruong.value.trim() !== "";
        oTruong.classList.toggle("border-red-500", !hopLe);
        oLoi.classList.toggle("hidden", hopLe);
        return hopLe;
    }

    /** Kiem tra email: khong duoc de trong va phai co ky tu "@" */
    function kiemTraEmail(oTruong) {
        const oLoi = oTruong.parentElement.querySelector(".loi-truong");
        const giaTri = oTruong.value.trim();
        const hopLe = giaTri !== "" && giaTri.includes("@");
        oTruong.classList.toggle("border-red-500", !hopLe);
        oLoi.classList.toggle("hidden", hopLe);
        return hopLe;
    }
});
