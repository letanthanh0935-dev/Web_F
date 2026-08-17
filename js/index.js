// index.js
// Trang chu: fetch products.json va hien thi mot so san pham noi bat
// vao khung #product-list (khung nay truoc do bi bo trong vi chua co JS nao xu ly).

document.addEventListener("DOMContentLoaded", async () => {
    const khungSanPham = document.getElementById("product-list");
    if (!khungSanPham) return;

    const SO_LUONG_NOI_BAT = 6;

    try {
        const toanBoSanPham = await layDanhSachSanPham();
        const sanPhamNoiBat = toanBoSanPham.slice(0, SO_LUONG_NOI_BAT);

        khungSanPham.innerHTML = sanPhamNoiBat.map(sp => `
            <a href="chi-tiet-san-pham.html?id=${sp.id}"
                class="product-card bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden block">
                <img src="${duongDanAnh(sp.image)}" alt="${sp.imageAlt}" class="w-full h-40 object-cover">
                <div class="p-4">
                    <span class="badge-origin inline-block mb-2">${sp.category}</span>
                    <h3 class="font-bold text-slate-800 leading-snug">${sp.name}</h3>
                    <p class="text-emerald-700 font-bold mt-2">${dinhDangGia(sp.price)} <span class="text-xs text-slate-400 font-normal">/ ${sp.unit}</span></p>
                </div>
            </a>
        `).join("");
    } catch (loi) {
        console.error("Loi khi tai products.json:", loi);
        khungSanPham.innerHTML = `
            <p class="col-span-full text-center text-red-600 font-semibold bg-red-50 border border-red-200 rounded-lg py-4">
                Không thể tải dữ liệu sản phẩm, vui lòng thử lại
            </p>
        `;
    }
});
