# Matis Shop — Demo Frontend

Website demo bán quà tặng cá nhân hoá (personalized gifts), xây dựng cho đồ án tốt nghiệp (DATN) — mô phỏng bố cục của [Macorner](https://macorner.co/) với bộ nhận diện riêng của **Matis Shop**.

## Mục tiêu

Trình bày giao diện frontend của một website thương mại điện tử cho phép khách hàng cá nhân hoá sản phẩm (khắc tên, in ảnh, chọn ngày kỷ niệm) trước khi đặt hàng — tương tự mô hình Macorner, nhưng với quy mô danh mục nhỏ và tuỳ biến đơn giản (không dùng AI) phù hợp phạm vi đồ án.

## Công nghệ sử dụng

- **HTML5** — cấu trúc ngữ nghĩa, chuẩn truy cập (skip link, `aria-label`, focus-visible)
- **CSS3** — biến CSS (design tokens), CSS Grid/Flexbox, responsive (mobile-first breakpoints), tôn trọng `prefers-reduced-motion`
- **JavaScript (vanilla, ES5+)** — không phụ thuộc framework/build tool, dễ chạy trực tiếp bằng trình duyệt

> Đây là bản demo tĩnh cho phần giao diện. Ở giai đoạn phát triển đầy đủ của DATN, phần frontend này dự kiến được chuyển sang một SPA framework (React/Vue) và kết nối với backend + cơ sở dữ liệu thực tế để xử lý giỏ hàng, đơn hàng và lưu trữ sản phẩm cá nhân hoá.

## Tính năng trong bản demo

- Trang chủ theo bố cục Macorner: header (logo, tìm kiếm, tài khoản/yêu thích/giỏ hàng) → thanh danh mục → hero banner → lưới sản phẩm
- Danh mục sản phẩm cá nhân hoá (6 sản phẩm mẫu: vòng cổ khắc tên, cốc in ảnh, khung ảnh, quả cầu trang trí, gối ôm in ảnh, vòng tay khắc ngày)
- **Khối xem trước cá nhân hoá trực tiếp**: gõ tên/lời nhắn và thấy bản xem trước cập nhật ngay trên sản phẩm (minh hoạ ý tưởng "personalize before you buy")
- Thêm vào giỏ hàng (demo, lưu tạm trong bộ nhớ trình duyệt) kèm thông báo (toast)
- Responsive: desktop, tablet, mobile

## Cấu trúc thư mục

```
matis-shop/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── logo.png
└── README.md
```

## Chạy thử

Không cần cài đặt hay build. Mở trực tiếp `index.html` bằng trình duyệt, hoặc chạy một server tĩnh đơn giản:

```bash
cd matis-shop
python3 -m http.server 8080
# truy cập http://localhost:8080
```

## Ghi chú

Đây là sản phẩm demo phục vụ mục đích học tập (đồ án tốt nghiệp), không phải website kinh doanh thực tế. Danh mục sản phẩm, giá, và nội dung là dữ liệu minh hoạ.
