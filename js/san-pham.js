// san-pham.js
// Trang Danh sach san pham: fetch du lieu tu products.json, render dang luoi,
// cho phep loc theo category, bam vao san pham chuyen sang trang chi tiet.

document.addEventListener("DOMContentLoaded", async () => {
    const luoiSanPham = document.getElementById("luoi-san-pham");
    const boLocDanhMuc = document.getElementById("bo-loc-danh-muc");
    const thongBaoLoi = document.getElementById("thong-bao-loi");
    const khongCoSanPham = document.getElementById("khong-co-san-pham");

    let toanBoSanPham = [];
    let danhMucDangChon = "Tất cả";

    // Buoc 1: Lay du lieu san pham (co xu ly loi theo yeu cau de bai)
    try {
        toanBoSanPham = await layDanhSachSanPham();
    } catch (loi) {
        console.error("Loi khi tai products.json:", loi);
        thongBaoLoi.classList.remove("hidden");
        return; // Khong co du lieu thi dung lai, khong render tiep
    }

    // Buoc 2: Tao bo loc danh muc dong tu cac category co trong du lieu
    const danhSachDanhMuc = ["Tất cả", ...new Set(toanBoSanPham.map(sp => sp.category))];
    danhSachDanhMuc.forEach(danhMuc => {
        const nutLoc = document.createElement("button");
        nutLoc.textContent = danhMuc;
        nutLoc.dataset.danhMuc = danhMuc;
        nutLoc.className = layClassNutLoc(danhMuc === danhMucDangChon);
        nutLoc.addEventListener("click", () => {
            danhMucDangChon = danhMuc;
            // Cap nhat trang thai active cho cac nut
            [...boLocDanhMuc.children].forEach(nut => {
                nut.className = layClassNutLoc(nut.dataset.danhMuc === danhMucDangChon);
            });
            renderDanhSach();
        });
        boLocDanhMuc.appendChild(nutLoc);
    });

    function layClassNutLoc(dangChon) {
        const chung = "px-4 py-2 rounded-full text-sm font-semibold transition duration-200 border";
        return dangChon
            ? chung + " bg-emerald-800 text-white border-emerald-800"
            : chung + " bg-white text-emerald-800 border-emerald-200 hover:bg-emerald-50";
    }

    // Buoc 3: Ham render danh sach san pham theo danh muc dang chon
    function renderDanhSach() {
        const dsHienThi = danhMucDangChon === "Tất cả"
            ? toanBoSanPham
            : toanBoSanPham.filter(sp => sp.category === danhMucDangChon);

        luoiSanPham.innerHTML = "";

        if (dsHienThi.length === 0) {
            khongCoSanPham.classList.remove("hidden");
            return;
        }
        khongCoSanPham.classList.add("hidden");

        dsHienThi.forEach(sp => {
            const the = document.createElement("a");
            the.href = `chi-tiet-san-pham.html?id=${sp.id}`;
            the.className = "product-card bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden block";
            the.innerHTML = `
                <img src="${duongDanAnh(sp.image)}" alt="${sp.imageAlt}" class="w-full h-40 object-cover">
                <div class="p-4">
                    <span class="badge-origin inline-block mb-2">${sp.category}</span>
                    <h3 class="font-bold text-slate-800 leading-snug">${sp.name}</h3>
                    <p class="text-emerald-700 font-bold mt-2">${dinhDangGia(sp.price)} <span class="text-xs text-slate-400 font-normal">/ ${sp.unit}</span></p>
                </div>
            `;
            luoiSanPham.appendChild(the);
        });
    }

    renderDanhSach();
});
