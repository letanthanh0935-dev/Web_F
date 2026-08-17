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