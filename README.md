# Đặc Sản Tây Nguyên - Website

Website giới thiệu các đặc sản của vùng Tây Nguyên, bao gồm cà phê, cacao, mật ong, gia vị, trái cây, và các sản phẩm truyền thống khác.

## Trang Chính

1. **Trang Chủ** (index.html) - Hiển thị 6 sản phẩm nổi bật đầu tiên
2. **Giới Thiệu** (gioi-thieu.html) - Thông tin về vùng Tây Nguyên, con người và văn hoá
3. **Danh Sách Sản Phẩm** (san-pham.html) - Hiển thị tất cả sản phẩm với chức năng lọc theo danh mục
4. **Chi Tiết Sản Phẩm** (chi-tiet-san-pham.html) - Xem chi tiết của từng sản phẩm (đọc id từ URL)
5. **Nguồn Gốc** (nguon-goc.html) - Sản phẩm được tổng hợp theo 5 vùng: Đắk Lắk, Gia Lai, Đắk Nông, Kon Tum, Lâm Đồng
6. **Liên Hệ** (lien-he.html) - Form liên hệ với validate JavaScript

## Tính Năng

- **Responsive Design** - Tương thích với desktop, tablet, mobile
- **Fetch Products** - Đọc dữ liệu sản phẩm từ `data/products.json` bằng JavaScript Fetch API
- **Filter by Category** - Lọc sản phẩm theo danh mục trên trang danh sách
- **URL Parameters** - Sử dụng query parameter `id` để xem chi tiết sản phẩm
- **Form Validation** - Kiểm tra form liên hệ (required fields, email format)

## Dữ Liệu

File `data/products.json` chứa tối thiểu 10 sản phẩm với các trường:
- id, name, category, origin, description, price, unit, image, imageAlt

## Phân Công

- **Thành viên 1** - Quản lý dự án + Backend dữ liệu (products.json)
- **Thành viên 2** - Giao diện trang chủ, danh sách sản phẩm
- **Thành viên 3** - Chi tiết sản phẩm, nguồn gốc, liên hệ

## Công Nghệ

- HTML5
- CSS3 (Responsive, Grid, Flexbox)
- JavaScript (Fetch API, DOM manipulation)
- Không sử dụng framework hay thư viện ngoài