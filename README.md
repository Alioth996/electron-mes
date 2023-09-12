## alioth-mes

尝试使用 **electron-vite** + Vue 搭建 **MES** 系统. 估计会踩很多坑,希望别太监.

---

### 巨人的肩膀

- Vue
- Vite
- electron-vite
- Axios
- Unocss
- Element-plus
- express

### 开发记录

- 2023/9/12
  - 项目初始化
  - 编写通用配置
  - 二维码登录前后端开发
    1. 前端获取二维码图片: **/qr_code/generate**
    2. 后端使用 **uuid** 作为二维码标识并使用 **qrcode** 库生成 **base64** 的二维码图片返回给前端
