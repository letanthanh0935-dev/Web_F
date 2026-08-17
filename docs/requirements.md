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



## Định hướng phát triển chức năng Đặt hàng (giai đoạn 2)

Tài liệu này mô tả hướng phát triển **chức năng giỏ hàng và đặt hàng** cho website "Đặc Sản Tây Nguyên" ở giai đoạn tiếp theo. Chức năng này **không thuộc phạm vi giai đoạn 1** (xem `requirements.md` mục 8: "Ngoài phạm vi"), tài liệu này chỉ mang tính định hướng để nhóm chủ động nếu phát triển tiếp, không phải yêu cầu bắt buộc của đồ án hiện tại.

## 1. Mục tiêu

Cho phép người dùng: xem sản phẩm → thêm vào giỏ hàng → điều chỉnh giỏ hàng → điền thông tin nhận hàng → xác nhận đặt hàng, mà **không phá vỡ** các trang và dữ liệu đang có ở giai đoạn 1.

## 2. Nguyên tắc thiết kế

- Vẫn dùng **JavaScript thuần**, chưa cần backend thật ở mức đồ án — dùng `localStorage` của trình duyệt để lưu giỏ hàng tạm thời.
- Tận dụng lại `data/products.json` và các hàm đã có trong `js/utils.js` (`layDanhSachSanPham`, `dinhDangGia`) làm nguồn dữ liệu sản phẩm duy nhất — không tạo thêm nguồn dữ liệu sản phẩm thứ hai để tránh lệch giá/tên khi sản phẩm gốc thay đổi.
- Triển khai theo từng bước nhỏ, mỗi bước test độc lập được trước khi làm bước tiếp theo, để không ảnh hưởng các trang đang chạy ổn định.

## 3. Các bước triển khai đề xuất

### Bước 1 — Nút "Thêm vào giỏ" ở trang chi tiết sản phẩm
- Tạo file mới `js/gio-hang.js` với hàm `themVaoGio(idSanPham, soLuong)`
- Cấu trúc dữ liệu lưu trong `localStorage`, ví dụ khoá `gioHang`:
  ```json
  [
    { "id": 3, "soLuong": 2 },
    { "id": 7, "soLuong": 1 }
  ]
  ```
- Chỉ lưu `id` và `soLuong`; khi cần hiển thị tên/giá/ảnh thì tra cứu lại từ `products.json` tại thời điểm hiển thị.

### Bước 2 — Icon giỏ hàng + số lượng trên header
- Thêm icon giỏ hàng dùng chung trong `js/main.js` (nơi đang xử lý các phần dùng chung cho header/menu)
- Đọc `localStorage`, tính tổng số lượng sản phẩm, hiển thị dạng badge số trên icon

### Bước 3 — Trang giỏ hàng (`pages/gio-hang.html`)
- Đọc giỏ hàng từ `localStorage`, đối chiếu với `products.json` để lấy đầy đủ thông tin từng dòng
- Cho phép: tăng/giảm số lượng, xoá sản phẩm khỏi giỏ, tự tính tổng tiền
- Xử lý trạng thái giỏ hàng trống: thông báo + liên kết quay lại trang danh sách sản phẩm

### Bước 4 — Trang đặt hàng / checkout (`pages/dat-hang.html`)
- Form thông tin người nhận: họ tên, số điện thoại, địa chỉ — validate theo cùng cách đang làm trong `js/lien-he.js` (không để trống, kiểm tra định dạng cơ bản)
- Hiển thị lại tóm tắt đơn hàng lấy từ giỏ hàng
- Ở mức đồ án: khi bấm "Đặt hàng", chỉ cần hiển thị thông báo xác nhận thành công và xoá giỏ hàng khỏi `localStorage` — **chưa cần gửi dữ liệu lên server thật**

## 4. Nếu muốn nâng cấp lên có backend thật

Đây là mức mở rộng cao hơn, chỉ nên thực hiện nếu còn thời gian hoặc được yêu cầu ở học phần sau:

- Thay `localStorage` bằng gọi API tới backend (ví dụ Node.js + Express, hoặc PHP), lưu đơn hàng vào cơ sở dữ liệu (MySQL/MongoDB)
- Thêm xác thực người dùng (đăng nhập) trước khi đặt hàng
- Gửi email/thông báo xác nhận đơn hàng thật

## 5. Rủi ro và lưu ý khi triển khai

- `localStorage` chỉ lưu trên một trình duyệt/một máy — không đồng bộ giữa các thiết bị của cùng một người dùng, cần nêu rõ giới hạn này khi báo cáo/thuyết trình.
- Khi thêm các trang mới (`gio-hang.html`, `dat-hang.html`), cần cập nhật lại sơ đồ liên kết trang và `docs/project-plan.md` cho đồng bộ.
- Không nên đầu tư làm giỏ hàng trong khi các yêu cầu bắt buộc của giai đoạn 1 (README, nhật ký sử dụng AI, các trang theo `requirements.md`) chưa hoàn thiện — ưu tiên hoàn thành đúng và đủ giai đoạn 1 trước khi mở rộng thêm.