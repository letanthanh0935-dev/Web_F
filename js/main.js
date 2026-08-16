document.addEventListener('DOMContentLoaded', () => {
  console.log('Trang web Đặc sản Tây Nguyên đã tải xong!');

  // Mượt khi click menu nội bộ
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Render 6 sản phẩm đầu tiên trên trang chủ từ products.json
  const productList = document.getElementById('product-list');
  if (productList) {
    fetch('./data/products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Không thể tải dữ liệu sản phẩm, vui lòng thử lại');
        }
        return response.json();
      })
      .then(products => {
        const featuredProducts = products.slice(0, 6);
        productList.innerHTML = featuredProducts.map(product => `
          <a href="pages/chi-tiet-san-pham.html?id=${product.id}" class="block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition border border-slate-200">
            <img src="${product.image}" alt="${product.imageAlt || product.name}" class="w-full h-52 object-cover">
            <div class="p-4">
              <div class="text-xs uppercase tracking-wide text-emerald-700 font-semibold mb-2">${product.category}</div>
              <h3 class="text-lg font-bold text-slate-800 mb-2">${product.name}</h3>
              <div class="text-amber-600 font-bold text-lg">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}</div>
            </div>
          </a>
        `).join('');
      })
      .catch(error => {
        console.error('Lỗi khi tải dữ liệu sản phẩm:', error);
        productList.innerHTML = `<div class="col-span-full text-center text-red-600 bg-red-50 border border-red-200 rounded-xl p-4">${error.message}</div>`;
      });
  }
});