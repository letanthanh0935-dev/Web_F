/**
 * san-pham-index.js - Hiển thị 6 sản phẩm nổi bật trên trang chủ
 */

async function loadFeaturedProducts() {
  const productListContainer = document.getElementById('product-list');
  
  try {
    // Fetch dữ liệu sản phẩm
    const response = await fetch('data/products.json');
    if (!response.ok) {
      throw new Error('Không thể tải dữ liệu sản phẩm');
    }

    const products = await response.json();
    
    // Lấy 6 sản phẩm đầu tiên (theo id)
    const featuredProducts = products.slice(0, 6);

    // Hiển thị sản phẩm
    let html = '';
    featuredProducts.forEach(product => {
      const formattedPrice = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(product.price);

      html += `
        <a href="pages/chi-tiet-san-pham.html?id=${product.id}" style="text-decoration: none; color: inherit;">
          <div class="product-card">
            <img src="${product.image}" alt="${product.imageAlt}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px 8px 0 0;">
            <div style="padding: 15px; background: white; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0; border-top: none;">
              <h3 style="font-size: 16px; font-weight: 600; margin: 0 0 8px 0; color: #333;">${product.name}</h3>
              <p style="font-size: 18px; font-weight: bold; color: #d97706; margin: 0;">${formattedPrice}</p>
              <p style="font-size: 12px; color: #999; margin: 5px 0 0 0;">${product.category}</p>
            </div>
          </div>
        </a>
      `;
    });

    productListContainer.innerHTML = html;

  } catch (error) {
    console.error('Lỗi khi tải sản phẩm:', error);
    productListContainer.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 20px; text-align: center; color: #d32f2f;">
        Không thể tải dữ liệu sản phẩm. Vui lòng thử lại.
      </div>
    `;
  }
}

// Gọi hàm khi trang load
document.addEventListener('DOMContentLoaded', loadFeaturedProducts);
