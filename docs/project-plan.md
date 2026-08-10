# Project Plan - Website "Đặc Sản Tây Nguyên"
## 1. Mục tiêu chương 1

Chương này tụi mình chỉ làm phần khung sườn của website thôi, chưa cần hoàn thiện giao diện đẹp hết mức. Cái quan trọng là:

- Kiến trúc thư mục/file rõ ràng
- Code có tổ chức, dễ đọc
- Dữ liệu sản phẩm (`products.json`) đầy đủ, đúng cấu trúc
- Quy trình làm việc nhóm trên GitHub chạy được (branch, PR, review...)

Phạm vi cụ thể tụi mình bám theo file `requirements.md` đã thống nhất, gồm 6 trang chính:

1. Trang chủ
2. Trang giới thiệu Tây Nguyên
3. Trang danh sách sản phẩm (đọc từ `products.json` bằng fetch, tối thiểu 10 sản phẩm, có lọc theo category)
4. Trang chi tiết sản phẩm (đọc id từ URL)
5. Trang nguồn gốc sản phẩm (tổng hợp theo 5 vùng: Đắk Lắk, Gia Lai, Đắk Nông, Kon Tum, Lâm Đồng)
6. Trang liên hệ (form tĩnh, validate JS)

Những cái KHÔNG làm ở giai đoạn này: giỏ hàng, đăng nhập, backend/database thật, tìm kiếm nâng cao (đã ghi rõ trong requirements.md mục 8, tránh làm dư ra ngoài đề).

## 2. Phân công nhóm

Nhóm mình có 3 người, chia việc như sau:

### Bạn (Nhóm trưởng) — Quản lý dự án + Backend dữ liệu

- Tạo GitHub Repository
- Phân chia công việc và theo dõi tiến độ
- Tạo cấu trúc thư mục dự án
- Tạo file `README.md` và `project-plan.md`
- Tạo file `products.json` chứa ít nhất 10 sản phẩm
- Kiểm tra, merge Pull Request của các thành viên
- Hoàn thiện báo cáo và chuẩn bị thuyết trình

### Thành viên 2 — Frontend - Giao diện

- Thiết kế giao diện trang chủ
- Xây dựng các trang: Giới thiệu Tây Nguyên, Danh sách sản phẩm, Phân loại sản phẩm
- Thiết kế Header, Menu, Banner, Footer
- Viết HTML, CSS và JavaScript cơ bản
- Đảm bảo giao diện responsive và thống nhất màu sắc

### Thành viên 3 — Frontend - Chức năng & Nội dung

- Xây dựng trang Chi tiết sản phẩm
- Xây dựng trang Nguồn gốc sản phẩm
- Xây dựng trang Liên hệ
- Đọc dữ liệu từ `products.json` và hiển thị danh sách sản phẩm
- Kiểm thử website, sửa lỗi, hỗ trợ hoàn thiện giao diện
- Cập nhật nhật ký dự án (nếu cần)

*Ghi chú: 3 người nên khối lượng việc mỗi người khá nhiều, cần trao đổi thường xuyên để không bị trùng hoặc sót phần nào so với `requirements.md`. Nhóm trưởng vừa quản lý vừa làm phần dữ liệu nên các bạn còn lại chủ động báo tiến độ, đừng để dồn việc vào cuối.*

## 3. Sản phẩm cần nộp

- [ ] Sơ đồ kiến trúc hệ thống (các trang liên kết với nhau ra sao)
- [ ] Danh sách chức năng dự kiến (đã có trong `requirements.md`)
- [ ] Cấu trúc thư mục dự án
- [ ] Dữ liệu mẫu `products.json` (tối thiểu 10 sản phẩm, kiểm tra kỹ trước khi merge)
- [ ] Link GitHub repository của nhóm
- [ ] File `README.md`
- [ ] File `docs/project-plan.md` (file này)
- [ ] Nhật ký sử dụng AI (ghi rõ chỗ nào có dùng AI hỗ trợ, dùng để làm gì)
- [ ] Bài trình bày 5-7 phút

## 4. Cấu trúc thư mục dự kiến

```
dac-san-tay-nguyen/
│
├── index.html                   (Trang chủ)
├── gioi-thieu.html               (Giới thiệu Tây Nguyên)
├── san-pham.html                 (Danh sách + Phân loại sản phẩm)
├── chi-tiet-san-pham.html        (Chi tiết sản phẩm, đọc id trên URL)
├── nguon-goc.html                (Nguồn gốc sản phẩm theo vùng)
├── lien-he.html                  (Liên hệ)
│
├── css/
│   └── style.css                 (dùng chung cho tất cả các trang, 1 bảng màu/font duy nhất)
│
├── js/
│   ├── main.js                   (code dùng chung: header/menu, các hàm helper chung)
│   ├── san-pham.js                (fetch + render danh sách, xử lý lọc theo category)
│   ├── chi-tiet-san-pham.js       (đọc id từ URL, tìm và hiển thị 1 sản phẩm)
│   ├── nguon-goc.js               (fetch, gom sản phẩm theo trường origin)
│   └── lien-he.js                 (validate form liên hệ)
│
├── data/
│   └── products.json              (toàn bộ dữ liệu sản phẩm, tối thiểu 10 sản phẩm)
│
├── images/
│   ├── banner/                    (ảnh banner trang chủ, ảnh minh hoạ trang giới thiệu)
│   └── products/                  (ảnh từng sản phẩm, đặt tên trùng id trong products.json)
│
├── docs/
│   ├── project-plan.md            (file này)
│   └── nhat-ky-su-dung-ai.md       (nếu có dùng AI hỗ trợ thì ghi lại ở đây)
│
└── README.md
```

Vài lưu ý khi triển khai theo cấu trúc trên:

- `main.js` để riêng phần code lặp lại ở nhiều trang (ví dụ hiệu ứng menu, header cố định), tránh copy code trùng nhau vào từng file `.js` của mỗi trang.
- Ảnh sản phẩm để trong `images/products/` và đặt tên theo `id` (ví dụ `1.jpg`, `2.jpg`) cho dễ map với `products.json`, đỡ phải sửa tên thủ công.
- File `products.json` chỉ do nhóm trưởng (phụ trách backend dữ liệu) chỉnh sửa để tránh conflict khi merge; ai cần thêm/sửa sản phẩm thì báo qua nhóm trưởng.

## 5. Quy trình làm việc trên GitHub

1. Trưởng nhóm tạo repository, mời các thành viên vào.
2. Mỗi người tự tạo 1 branch riêng theo tên nhiệm vụ, ví dụ: `feature/trang-san-pham`, `feature/du-lieu-json`.
3. Làm việc trên branch của mình, commit thường xuyên (không dồn 1 commit to đùng cuối cùng).
4. Push branch lên GitHub.
5. Tạo Pull Request, mô tả ngắn gọn đã làm gì.
6. Ít nhất 1 thành viên khác đọc và review code, comment góp ý nếu có lỗi.
7. Sửa theo góp ý (nếu có) rồi mới merge.
8. Merge vào nhánh `main` sau khi được duyệt.
9. Cuối chương, cả nhóm kiểm tra lại toàn bộ để chắc không thiếu file/chức năng so với requirements.md.

Mỗi thành viên tự đảm bảo có: ít nhất 1 branch, ít nhất 2 commit, ít nhất 1 Pull Request, ít nhất 1 lần review/góp ý cho bạn khác. Không share mật khẩu/token GitHub cho ai ngoài nhóm.

## 6. Mốc thời gian (dự kiến)

| Ngày | Việc cần xong |
|---|---|
| 04-05/08 | Họp nhóm chốt phân công, viết requirements.md, tạo repo |
| 05-06/08 | Mỗi người làm phần được giao trên branch riêng, chuẩn bị products.json |
| 06/08 | Tạo Pull Request, review chéo, sửa lỗi |
| 07/08 (sáng) | Merge, kiểm tra lại toàn bộ trang, hoàn thiện README |
| 07/08 (chiều) | Chuẩn bị slide, tập trình bày |

## 7. Rủi ro / khó khăn dự kiến

- Dữ liệu `products.json` nếu sai định dạng sẽ làm cả trang danh sách và chi tiết không chạy được → nhóm data cần test kỹ bằng `console.log` trước khi báo hoàn thành.
- Conflict khi merge nhiều branch cùng sửa 1 file (đặc biệt `style.css`) → nên chia rõ ai được sửa phần CSS nào, tránh đụng nhau.
- Thời gian gấp (3 ngày) nên ưu tiên làm đúng và đủ theo requirements.md trước, phần đẹp/nâng cao để sau nếu còn thời gian.