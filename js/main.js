// Tap tin JavaScript co ban cho trang web

document.addEventListener("DOMContentLoaded", () => {
  console.log("Trang web Dac san Tay Nguyen da tai xong!");

  // Chuc nang 1: Cuon mượt khi bam vao cac muc tren Menu Header
  const danhSachLienKet = document.querySelectorAll('a[href^="#"]');
  danhSachLienKet.forEach(lienKet => {
    lienKet.addEventListener("click", (sukien) => {
      sukien.preventDefault();
      const maMuc = lienKet.getAttribute("href");
      if (maMuc === "#") return;

      const phanTuMuc = document.querySelector(maMuc);
      if (phanTuMuc) {
        phanTuMuc.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});