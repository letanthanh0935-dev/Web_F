// nav.js
// Dung chung cho tat ca cac trang: bat/tat menu tren man hinh dien thoai (mobile).
// Header chinh (md:flex) da tu an tren man hinh nho, file nay dieu khien
// bang menu-mobile thay the.

document.addEventListener("DOMContentLoaded", () => {
    const nutMenu = document.getElementById("nut-menu-mobile");
    const menuMobile = document.getElementById("menu-mobile");
    if (!nutMenu || !menuMobile) return;

    nutMenu.addEventListener("click", () => {
        const dangMo = menuMobile.classList.toggle("hidden") === false;
        nutMenu.innerHTML = dangMo
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
        nutMenu.setAttribute("aria-expanded", dangMo ? "true" : "false");
    });

    // Bam vao 1 lien ket trong menu mobile thi tu dong dong menu lai
    menuMobile.querySelectorAll("a").forEach(lienKet => {
        lienKet.addEventListener("click", () => {
            menuMobile.classList.add("hidden");
            nutMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
            nutMenu.setAttribute("aria-expanded", "false");
        });
    });
});
