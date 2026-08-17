// chi-tiet-san-pham.js
// Trang Chi tiet san pham: doc id tren URL (vi du chi-tiet-san-pham.html?id=3),
// tim dung san pham trong products.json va hien thi day du thong tin.

document.addEventListener("DOMContentLoaded", async () => {
    const khungChiTiet = document.getElementById("chi-tiet-san-pham");
    const thongBaoLoi = document.getElementById("thong-bao-loi");

    // Buoc 1: Doc id tu query string tren URL
    const thamSo = new URLSearchParams(window.location.search);
    const idSanPham = thamSo.get("id");

    // Neu URL khong co id -> bao loi ngay, khong can goi fetch
    if (!idSanPham) {
        thongBaoLoi.classList.remove("hidden");
        return;
    }

    // Buoc 2: Lay du lieu san pham (co xu ly loi khi khong fetch duoc)
    let toanBoSanPham = [];
    try {
        toanBoSanPham = await layDanhSachSanPham();
    } catch (loi) {
        console.error("Loi khi tai products.json:", loi);
        thongBaoLoi.classList.remove("hidden");
        return;
    }

    // Buoc 3: Tim san pham co id trung khop (so sanh dang so vi id trong JSON la number)
    const sanPham = toanBoSanPham.find(sp => sp.id === Number(idSanPham));

    if (!sanPham) {
        thongBaoLoi.classList.remove("hidden");
        return;
    }

    // Buoc 4: Render day du thong tin san pham
    khungChiTiet.classList.remove("hidden");
    khungChiTiet.innerHTML = `
        <div>
            <img src="${duongDanAnh(sanPham.image)}" alt="${sanPham.imageAlt}" class="w-full h-80 object-cover rounded-xl shadow-sm">
        </div>
        <div>
            <span class="badge-origin inline-block mb-3">${sanPham.category}</span>
            <h1 class="text-2xl md:text-3xl font-extrabold text-emerald-900 mb-2">${sanPham.name}</h1>
            <p class="text-2xl font-bold text-amber-600 mb-4">
                ${dinhDangGia(sanPham.price)} <span class="text-sm text-slate-400 font-normal">/ ${sanPham.unit}</span>
            </p>
            <p class="text-slate-700 leading-relaxed mb-4">${sanPham.description}</p>
            <p class="text-sm text-slate-600 mb-6">
                <i class="fa-solid fa-location-dot text-emerald-700 mr-1"></i>
                Nguồn gốc: <span class="font-semibold">${sanPham.origin}</span>
            </p>
            <a href="san-pham.html"
                class="inline-flex items-center bg-emerald-800 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
                <i class="fa-solid fa-arrow-left mr-2"></i> Quay lại danh sách sản phẩm
            </a>
        </div>
    `;
});
