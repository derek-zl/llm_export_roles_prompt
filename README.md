# 本地运行指南 - LLM 专家角色全集

本文档详细说明如何在您的本地计算机上运行此项目。

## 前置要求

在开始之前，请确保您的计算机上已安装以下软件：

| 软件 | 版本 | 下载链接 |
|------|------|--------|
| Node.js | 18.0 或更高 | https://nodejs.org/ |
| npm 或 pnpm | 最新版本 | npm 随 Node.js 安装；pnpm: https://pnpm.io/ |
| Git | 最新版本 | https://git-scm.com/ |

### 检查安装

打开终端/命令提示符，运行以下命令验证安装：

```bash
node --version    # 应显示 v18.0.0 或更高
npm --version     # 应显示 8.0.0 或更高
pnpm --version    # 如果使用 pnpm（可选）
git --version     # 应显示 git version 2.x.x 或更高
```

## 安装步骤

### 1. 克隆或下载项目

**方式 A：使用 Git 克隆（推荐）**

```bash
git clone <项目仓库地址>
cd llm_expert_roles_ui
```

**方式 B：直接下载代码**

如果您已经下载了代码文件，直接解压到本地文件夹，然后在终端中进入项目目录：

```bash
cd llm_expert_roles_ui
```

### 2. 安装依赖

使用 pnpm（推荐，速度更快）：

```bash
pnpm install
```

或使用 npm：

```bash
npm install
```

**预期输出：** 您应该看到类似以下的输出：

```
added 500+ packages in 2m
```

### 3. 启动开发服务器

```bash
pnpm dev
```

或使用 npm：

```bash
npm run dev
```

**预期输出：** 您应该看到类似以下的输出：

```
➜  Local:   http://localhost:5173/
➜  press h to show help
```

### 4. 在浏览器中打开

打开您的网络浏览器，访问以下地址：

```
http://localhost:5173/
```

您应该能看到 LLM 专家角色全集的主页面。

## 项目结构说明

```
llm_expert_roles_ui/
├── client/                          # 前端代码
│   ├── public/                      # 静态资源
│   │   └── index.html              # HTML 入口
│   ├── src/
│   │   ├── components/             # React 组件
│   │   │   ├── RoleCard.tsx        # 角色卡片组件
│   │   │   ├── RoleDetailModal.tsx # 角色详情弹窗
│   │   │   ├── CategoryFilter.tsx  # 分类筛选组件
│   │   │   ├── SearchBar.tsx       # 搜索组件
│   │   │   └── PromptTemplate.tsx  # Prompt 模板组件
│   │   ├── data/
│   │   │   └── expertRoles.ts      # 专家角色数据
│   │   ├── pages/
│   │   │   ├── Home.tsx            # 主页面
│   │   │   └── NotFound.tsx        # 404 页面
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx    # 主题上下文
│   │   ├── App.tsx                 # 应用主组件
│   │   ├── main.tsx                # 应用入口
│   │   └── index.css               # 全局样式
│   ├── package.json                # 项目配置
│   └── tsconfig.json               # TypeScript 配置
├── server/                          # 服务器占位符（静态项目不需要）
├── shared/                          # 共享代码占位符
├── package.json                    # 根项目配置
├── vite.config.ts                  # Vite 构建配置
├── tailwind.config.ts              # Tailwind CSS 配置
├── tsconfig.json                   # TypeScript 配置
└── README.md                       # 项目说明
```

## 常见问题解决

### 问题 1：`command not found: pnpm` 或 `npm`

**原因：** Node.js 或 npm 未正确安装。

**解决方案：**
1. 重新下载并安装 Node.js（https://nodejs.org/）
2. 安装后重启终端
3. 运行 `node --version` 验证安装

### 问题 2：`npm ERR! code ERESOLVE`

**原因：** 依赖版本冲突。

**解决方案：**
```bash
# 清除缓存
npm cache clean --force

# 重新安装
rm -rf node_modules package-lock.json
npm install
```

### 问题 3：`Port 5173 is already in use`

**原因：** 端口被其他应用占用。

**解决方案：**

**方式 A：** 使用不同的端口
```bash
pnpm dev -- --port 3000
```

**方式 B：** 关闭占用该端口的应用，然后重新运行

### 问题 4：页面加载缓慢或样式不显示

**原因：** 浏览器缓存问题。

**解决方案：**
1. 按 `Ctrl + Shift + Delete`（Windows/Linux）或 `Cmd + Shift + Delete`（Mac）打开清除浏览器数据
2. 选择"缓存的图片和文件"，点击"清除数据"
3. 刷新页面（`Ctrl + R` 或 `Cmd + R`）

### 问题 5：`Cannot find module` 错误

**原因：** 依赖未正确安装。

**解决方案：**
```bash
# 删除 node_modules 和锁文件
rm -rf node_modules pnpm-lock.yaml package-lock.json

# 重新安装
pnpm install
```

## 开发工作流

### 编辑代码

所有源代码位于 `client/src/` 目录。当您编辑文件时，开发服务器会自动重新加载页面（热模块替换）。

### 添加新的角色

编辑 `client/src/data/expertRoles.ts` 文件，在 `expertRoles` 数组中添加新的角色对象：

```typescript
{
  id: 'your-role-id',
  name: '您的角色名称',
  category: 'core', // 或其他分类
  categoryLabel: '核心 AI/ML 领域',
  description: '角色描述',
  skills: ['技能1', '技能2', '技能3'],
}
```

### 修改样式

全局样式位于 `client/src/index.css`。Neumorphism 相关的样式类包括：

- `.neu-card` - 卡片样式
- `.neu-button` - 按钮样式
- `.neu-input` - 输入框样式
- `.grid-cols-auto` - 网格布局
- `.animate-*` - 动画效果

### 修改主题颜色

在 `client/src/index.css` 的 `:root` 或 `.dark` 部分修改 CSS 变量：

```css
:root {
  --primary: oklch(...);
  --accent: oklch(...);
  /* ... 其他颜色 */
}
```

## 构建生产版本

当您准备部署应用时，运行以下命令生成优化的生产构建：

```bash
pnpm build
```

或使用 npm：

```bash
npm run build
```

**输出：** 构建文件将生成在 `dist/` 目录中。

### 预览生产构建

```bash
pnpm preview
```

这将在本地启动一个生产服务器，您可以在 `http://localhost:4173/` 查看构建结果。

## 部署到线上

### 部署到 Vercel（推荐）

1. 将代码推送到 GitHub
2. 访问 https://vercel.com，使用 GitHub 账号登录
3. 点击"New Project"，选择您的仓库
4. 点击"Deploy"

### 部署到 Netlify

1. 将代码推送到 GitHub
2. 访问 https://netlify.com，使用 GitHub 账号登录
3. 点击"New site from Git"
4. 选择您的仓库并配置构建设置
5. 点击"Deploy site"

### 部署到自己的服务器

1. 运行 `pnpm build` 生成生产构建
2. 将 `dist/` 目录中的所有文件上传到您的服务器
3. 配置 Web 服务器（如 Nginx）以提供这些文件

## 获取帮助

如果遇到问题，请：

1. 检查本文档的"常见问题解决"部分
2. 查看 Node.js 官方文档：https://nodejs.org/docs/
3. 查看 Vite 官方文档：https://vitejs.dev/
4. 查看 React 官方文档：https://react.dev/

## 许可证

此项目采用 MIT 许可证。详见 LICENSE 文件。

---

祝您使用愉快！如有任何问题，欢迎反馈。
