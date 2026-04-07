# Personal Site

一个可直接部署的静态个人主页模板，适合使用 `Cloudflare Pages` 托管，并通过 `Namesilo` 管理域名解析。

## 文件结构

- `index.html`: 页面结构与内容
- `styles.css`: 视觉样式与响应式布局
- `main.js`: 页面轻交互
- `favicon.svg`: 站点图标

## 本地预览

最简单的方法是直接双击 `index.html` 打开。  
如果你想用本地静态服务器，也可以在这个目录执行：

```powershell
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 先替换这些内容

在上线前，至少修改下面几项：

1. `index.html` 里的 `你的名字`
2. `hello@example.com`
3. `GitHub`、`LinkedIn`、`X / Twitter` 链接
4. 三个项目卡片的标题、简介和链接
5. Hero 区域里的身份介绍和状态信息

## 部署到 GitHub

1. 在 GitHub 新建一个仓库，例如 `personal-site`
2. 把这个目录中的文件上传到仓库根目录
3. 确认仓库里至少有：
   - `index.html`
   - `styles.css`
   - `main.js`
   - `favicon.svg`

## 部署到 Cloudflare Pages

1. 登录 Cloudflare
2. 进入 `Workers & Pages`
3. 选择 `Create application` -> `Pages` -> `Connect to Git`
4. 连接你的 GitHub 仓库
5. 构建设置按静态站点处理：
   - Framework preset: `None`
   - Build command: 留空
   - Build output directory: `/`
6. 点击部署

如果你不想连接 Git，也可以选择直接上传静态文件目录。

## 在 Namesilo 配置域名

以 `yourdomain.com` 为例：

1. 在 Cloudflare Pages 中打开你的项目
2. 进入 `Custom domains`
3. 添加：
   - `yourdomain.com`
   - `www.yourdomain.com`
4. Cloudflare 会给出需要添加的 DNS 记录
5. 回到 Namesilo 的域名管理页，打开 `Manage DNS`
6. 按 Cloudflare 提示添加记录

常见情况：

- `www` 通常配置为 `CNAME`
- 根域名通常按 Cloudflare 提供的目标记录填写

不要凭印象乱填记录值，以 Cloudflare 当时页面显示的记录为准。

## 验证上线

完成解析后检查：

1. `https://yourdomain.com` 可以访问
2. `https://www.yourdomain.com` 可以访问
3. 页面样式、图标和按钮正常
4. 邮箱链接和社交链接可用
5. Cloudflare 自动签发 HTTPS 证书

## 后续扩展

如果后面你要加博客，可以升级到 `Astro` 或其他静态站点生成器。  
当前这套结构适合先快速上线，再逐步演进。
