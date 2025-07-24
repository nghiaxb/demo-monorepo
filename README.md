# Giới thiệu về Monorepo

## 🧩 Monorepo là gì?

**Monorepo** (Monolithic Repository) là một cách tổ chức mã nguồn trong đó **nhiều project (app, thư viện, module)** được đặt **trong cùng một repository duy nhất**.

Ví dụ:
 <br>my-monorepo/
 <br>├── apps/
 <br>│ ├── web-admin/
 <br>│ └── web-user/
 <br>├── packages/
 <br>│ ├── ui/
 <br>│ ├── auth/
 <br>│ └── utils/
 <br>├── package.json
 <br>└── tsconfig.json


## ✅ Ưu điểm của Monorepo

### 1. **Dễ quản lý mã nguồn**
- Một repo duy nhất cho toàn bộ hệ thống.
- Không cần clone/push/pull nhiều repo.

### 2. **Tái sử dụng code tốt hơn**
- Các thư viện dùng chung (auth, ui, utils...) có thể được import trực tiếp giữa các app.

### 3. **Thống nhất cấu hình**
- Cùng chung cấu hình ESLint, Prettier, TypeScript, CI/CD.

### 4. **Tối ưu hóa build/test (nếu dùng Nx, Turborepo...)**
- Chạy lại chỉ phần bị ảnh hưởng.
- Có thể dùng cache để tăng tốc CI/CD.

### 5. **Dễ refactor lớn**
- Dễ đổi tên hàm, đổi cấu trúc toàn hệ thống nhờ chung codebase.
---

## 🤔 Khi nào nên dùng Monorepo?

### ✅ **Nên dùng khi:**
- Dự án có **nhiều ứng dụng hoặc thư viện liên quan đến nhau**.
- Có nhiều phần dùng **code chung** (components, utils...).
- Cần **thống nhất quy chuẩn** code, lint, build, CI.
- Team làm việc **collaborative**, cần đổi/refactor thường xuyên.

### ❌ **Không nên dùng khi:**
- Các ứng dụng **hoàn toàn độc lập**, không dùng chung gì cả.
- Có nhu cầu phân quyền rất chặt (ví dụ: 1 team chỉ được xem đúng 1 app).
- Dự án nhỏ, chỉ có 1 app → Monorepo làm mọi thứ phức tạp không cần thiết.

---

## 🛠 Công cụ hỗ trợ Monorepo

| Công cụ | Mô tả |
|--------|-------|
| `pnpm` workspace | Quản lý dependency hiệu quả cho monorepo |
| `Nx` | Build system mạnh mẽ: lint/test/build theo ảnh hưởng |
| `Turborepo` | Lightweight monorepo tool do Vercel phát triển |
| `Lerna` | Công cụ cổ điển, chuyên release version nhiều package |
| `Rush` | Dành cho enterprise, hỗ trợ cực kỳ chi tiết |

---

## 🧪 Ví dụ thực tế

### 🏢 Dự án công ty

```bash
apps/
  ├── admin-dashboard
  └── user-portal

packages/
  ├── auth
  ├── ui
  └── utils
