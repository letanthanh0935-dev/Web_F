# Đặc Sản Tây Nguyên

Mô tả các chức năng dự kiến của website. Đây là bản quy định để cả nhóm code đúng phạm vi, tránh làm dư/thiếu so với đề bài.

## 1. Trang chủ 

- Banner giới thiệu chủ đề "Đặc sản Tây Nguyên"
- Header cố định gồm logo + menu điều hướng (Trang chủ, Giới thiệu, Sản phẩm, Nguồn gốc, Liên hệ)
- Hiển thị **6 sản phẩm nổi bật** = 6 sản phẩm đầu tiên (theo `id`) trong `products.json`, mỗi thẻ gồm: ảnh, tên, giá
- Footer chứa thông tin nhóm (tên nhóm, thành viên); mục mạng xã hội **không bắt buộc** ở giai đoạn 1

## 2. Trang Giới thiệu Tây Nguyên

- Nội dung văn bản giới thiệu vùng đất, con người, văn hoá Tây Nguyên
- Ít nhất 1 hình ảnh minh hoạ

## 3. Trang Danh sách sản phẩm 

- Đọc dữ liệu từ `data/products.json` bằng `fetch()`, hiển thị dạng lưới (grid), **tối thiểu 10 sản phẩm**
- Mỗi thẻ sản phẩm gồm: ảnh (có thuộc tính `alt`), tên, giá, danh mục
- Chức năng lọc/phân loại theo `category` (cà phê, gia vị, trái cây, thủ công mỹ nghệ...)
- Bấm vào sản phẩm → chuyển sang trang chi tiết kèm `id` sản phẩm trên URL (ví dụ: `chi-tiet-san-pham.html?id=3`)
- **Xử lý lỗi:** nếu không tải được `products.json`, hiển thị thông báo "Không thể tải dữ liệu sản phẩm, vui lòng thử lại"
## 4. Trang Chi tiết sản phẩm 

- Đọc `id` từ URL, tìm đúng sản phẩm trong `products.json`
- Hiển thị đầy đủ: ảnh, tên, giá, đơn vị tính, mô tả, nguồn gốc
- Nút quay lại danh sách sản phẩm
- **Xử lý lỗi:** nếu `id` không tồn tại hoặc thiếu trên URL, hiển thị thông báo "Không tìm thấy sản phẩm" kèm liên kết quay về trang Danh sách sản phẩm

## 5. Trang Nguồn gốc sản phẩm 

- Giới thiệu theo từng vùng (Đắk Lắk, Gia Lai, Đắk Nông, Kon Tum, Lâm Đồng)
- Liệt kê sản phẩm đặc trưng của từng vùng (dựa trên trường `origin` trong `products.json`)
-lưu ý:
> Phân biệt với mục 4: trang này tổng hợp theo *vùng địa lý* (từ vùng → ra sản phẩm), không lặp lại mô tả chi tiết từng sản phẩm.
 
- Chia nội dung theo 5 vùng: Đắk Lắk, Gia Lai, Đắk Nông, Kon Tum, Lâm Đồng
- Với mỗi vùng: 1-2 câu giới thiệu ngắn + danh sách tên sản phẩm đặc trưng (lọc theo trường `origin`), mỗi tên liên kết đến trang Chi tiết tương ứng

## 6. Trang Liên hệ 

- Form liên hệ tĩnh: Họ tên, Email, Nội dung (chưa cần xử lý gửi thật ở giai đoạn này)
- Thông tin liên hệ nhóm (email, số điện thoại giả định)
- Validate bằng JavaScript: không để trống trường bắt buộc, kiểm tra định dạng email cơ bản (có ký tự `@`)

## 7. Yêu cầu kỹ thuật chung

- Giao diện responsive: hiển thị tốt trên desktop, tablet, mobile
- Thống nhất bảng màu và font chữ trên toàn bộ website
- Không dùng framework/thư viện ngoài ở giai đoạn 1 (thuần HTML/CSS/JS)
- Dữ liệu sản phẩm lấy 100% từ `data/products.json`, không hard-code trong HTML
- Code có comment giải thích các đoạn xử lý chính (đặc biệt phần đọc JSON)

## 8. Ngoài phạm vi 

- Chức năng giỏ hàng / thanh toán
- Đăng nhập / tài khoản người dùng
- Backend thật (server, database)
- Tìm kiếm sản phẩm nâng cao