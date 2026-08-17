# Đặc Sản Tây Nguyên

Website giới thiệu và trưng bày các sản phẩm đặc sản vùng Tây Nguyên — Đắk Lắk, Gia Lai, Đắk Nông, Kon Tum, Lâm Đồng. 
**Giai đoạn 1 (hiện tại)** xây dựng phần khung sườn: hiển thị thông tin sản phẩm, phân loại, nguồn gốc theo vùng, và form liên hệ tĩnh — dữ liệu đọc từ file JSON tĩnh, chưa có backend/database thật, chưa có giỏ hàng hay tài khoản người dùng (xem phạm vi chi tiết tại `docs/requirements.md` mục 8). Định hướng phát triển chức năng đặt hàng cho giai đoạn sau được trình bày riêng tại [`docs/dinh-huong-dat-hang.md`](docs/dinh-huong-dat-hang.md).

## 1. Mục tiêu dự án

- Luyện kỹ năng tổ chức một dự án frontend nhiều trang có cấu trúc rõ ràng, dễ mở rộng
- Thực hành quy trình làm việc nhóm chuẩn trên GitHub (branch → Pull Request → review → merge)

## 2. Tính năng chính

| Trang | Chức năng |
|---|---|
| Trang chủ | Banner giới thiệu, hiển thị 6 sản phẩm nổi bật |
| Giới thiệu | Nội dung + hình ảnh về vùng đất, con người Tây Nguyên |
| Danh sách sản phẩm | Đọc `products.json` bằng `fetch()`, hiển thị dạng lưới, lọc theo danh mục |
| Chi tiết sản phẩm | Đọc `id` trên URL, hiển thị đầy đủ thông tin 1 sản phẩm |
| Nguồn gốc sản phẩm | Tổng hợp sản phẩm theo 5 vùng địa lý |
| Liên hệ | Form tĩnh, validate bằng JavaScript (không gửi dữ liệu thật) |

## 3. Cấu trúc thư mục

```
├── pages/           Các trang HTML
│   ├── index.html
│   ├── gioi-thieu.html
│   ├── san-pham.html
│   ├── chi-tiet-san-pham.html
│   ├── nguon-goc.html
│   └── lien-he.html
├── js/               JavaScript xử lý cho từng trang
│   ├── main.js        code dùng chung (menu, cuộn mượt...)
│   ├── utils.js        hàm dùng chung: fetch dữ liệu, định dạng giá
│   └── san-pham.js, chi-tiet-san-pham.js, nguon-goc.js, lien-he.js, index.js, nav.js
├── css/style.css      style bổ sung cho Tailwind CSS
├── data/products.json  dữ liệu sản phẩm (nguồn dữ liệu duy nhất, không hard-code trong HTML)
├── assets/images/     hình ảnh sản phẩm
└── docs/              tài liệu dự án (requirements, project-plan, định hướng đặt hàng, )
```

## 4. Công nghệ sử dụng

- HTML5, CSS3, Tailwind CSS (qua CDN)
- JavaScript thuần (Vanilla JS) — không dùng framework JS
- Dữ liệu tĩnh dạng JSON, không có backend/database thật ở giai đoạn này

## 5. Hướng dẫn chạy dự án

Trang web dùng `fetch()` để đọc `data/products.json`. Trình duyệt **chặn `fetch()` đọc file cục bộ vì lý do bảo mật (CORS)** nếu mở file bằng cách double-click (địa chỉ dạng `file:///...`). Vì vậy bắt buộc phải chạy qua một local server, dù chỉ là server đơn giản chạy trên máy cá nhân.

**Cách 1 — dùng Python (có sẵn trên hầu hết máy):**
```bash
# đứng ở thư mục gốc dự án (chứa data/, pages/, js/...)
python -m http.server 8000
```
Mở trình duyệt: `http://localhost:8000/pages/index.html`

**Cách 2 — VS Code Live Server (khuyến khích, không cần gõ lệnh):**
1. Cài extension **Live Server**
2. Chuột phải vào `pages/index.html` → **Open with Live Server**


## 6. Thành viên nhóm

### Nhóm trưởng (Lê Tấn Thanh) — Quản lý dự án + Backend dữ liệu

- Tạo GitHub Repository
- Phân chia công việc và theo dõi tiến độ
- Tạo cấu trúc thư mục dự án
- Tạo file `README.md` và `project-plan.md`
- Tạo file `products.json` chứa ít nhất 10 sản phẩm
- Kiểm tra, merge Pull Request của các thành viên
- Hoàn thiện báo cáo và chuẩn bị thuyết trình

### Thành viên 2 (Nguyễn Ngọc Khánh) — Frontend - Giao diện

- Thiết kế giao diện trang chủ
- Xây dựng các trang: Giới thiệu Tây Nguyên, Danh sách sản phẩm, Phân loại sản phẩm
- Thiết kế Header, Menu, Banner, Footer
- Viết HTML, CSS và JavaScript cơ bản
- Đảm bảo giao diện responsive và thống nhất màu sắc

### Thành viên 3 (Lại Minh Tuệ) — Frontend - Chức năng & Nội dung

- Xây dựng trang giới thiệu
- Xây dựng trang Chi tiết sản phẩm
- Xây dựng trang Nguồn gốc sản phẩm
- Xây dựng trang Liên hệ
- Đọc dữ liệu từ `products.json` và hiển thị danh sách sản phẩm
- Kiểm thử website, sửa lỗi, hỗ trợ hoàn thiện giao diện


## 7. Tài liệu liên quan

- [`docs/requirements.md`](docs/requirements.md) — mô tả chi tiết chức năng từng trang
- [`docs/project-plan.md`](docs/project-plan.md) — kế hoạch, phân công, quy trình GitHub
- [`docs/dinh-huong-dat-hang.md`](docs/dinh-huong-dat-hang.md) — định hướng phát triển chức năng đặt hàng (giai đoạn sau)
