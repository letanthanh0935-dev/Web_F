// nguon-goc.js
// Trang Nguon goc san pham: fetch products.json, gom san pham theo truong "origin"
// roi chen vao dung khoi <ul data-vung="..."> tuong ung cua tung vung.

document.addEventListener("DOMContentLoaded", async () => {
    const thongBaoLoi = document.getElementById("thong-bao-loi");
    const danhSachKhoiVung = document.querySelectorAll(".list-vung");

    // Buoc 1: Lay du lieu san pham (co xu ly loi)
    let toanBoSanPham = [];
    try {
        toanBoSanPham = await layDanhSachSanPham();
    } catch (loi) {
        console.error("Loi khi tai products.json:", loi);
        thongBaoLoi.classList.remove("hidden");
        return;
    }

    // Buoc 2: Voi moi vung, loc san pham co origin trung ten vung roi render danh sach ten,
    // moi ten lien ket den trang Chi tiet tuong ung (chi-tiet-san-pham.html?id=...)
    danhSachKhoiVung.forEach(khoiUl => {
        const tenVung = khoiUl.dataset.vung;
        const sanPhamCuaVung = toanBoSanPham.filter(sp => sp.origin === tenVung);

        if (sanPhamCuaVung.length === 0) {
            khoiUl.innerHTML = `<li class="text-slate-400 text-sm italic">Chưa có sản phẩm nào được ghi nhận cho vùng này.</li>`;
            return;
        }

        khoiUl.innerHTML = sanPhamCuaVung.map(sp => `
            <li>
                <a href="chi-tiet-san-pham.html?id=${sp.id}"
                    class="flex items-center justify-between bg-slate-50 hover:bg-emerald-50 border border-slate-100 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-800 transition">
                    <span><i class="fa-solid fa-leaf text-emerald-600 mr-2"></i>${sp.name}</span>
                    <i class="fa-solid fa-chevron-right text-xs text-slate-400"></i>
                </a>
            </li>
        `).join("");
    });
});
