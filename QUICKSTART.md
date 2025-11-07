# 快速开始指南

## 30 秒快速启动

### 第 1 步：安装依赖
```bash
cd llm_expert_roles_ui
pnpm install
```

### 第 2 步：启动开发服务器
```bash
pnpm dev
```

### 第 3 步：打开浏览器
访问 `http://localhost:5173/`

完成！您现在可以看到 LLM 专家角色全集的完整展示。

---

## 常用命令

| 命令 | 说明 |
|------|------|
| `pnpm install` | 安装项目依赖 |
| `pnpm dev` | 启动开发服务器（热重载） |
| `pnpm build` | 构建生产版本 |
| `pnpm preview` | 预览生产构建 |
| `pnpm lint` | 运行代码检查 |

---

## 项目特性

✨ **Neumorphism UI 设计** - 现代的柔和阴影风格
🎯 **100+ 专家角色** - 完整的 LLM 角色数据库
🔍 **搜索和筛选** - 快速查找相关角色
🌓 **深色/浅色主题** - 支持主题切换
📱 **响应式设计** - 完美适配所有设备
⚡ **快速性能** - 基于 Vite 和 React 19

---

## 项目结构

```
client/src/
├── components/          # React 组件
├── data/               # 角色数据
├── pages/              # 页面组件
├── contexts/           # React 上下文
├── App.tsx             # 主应用组件
└── index.css           # 全局样式
```

---

## 下一步

- 📖 查看 [LOCAL_SETUP.md](./LOCAL_SETUP.md) 了解详细的本地运行指南
- 🎨 修改 `client/src/data/expertRoles.ts` 添加或编辑角色
- 🎭 在 `client/src/index.css` 中自定义样式和主题
- 🚀 运行 `pnpm build` 构建生产版本

---

## 系统要求

- Node.js 18.0 或更高版本
- npm 8.0 或 pnpm 7.0 或更高版本

---

## 遇到问题？

详见 [LOCAL_SETUP.md](./LOCAL_SETUP.md) 中的"常见问题解决"部分。

---

祝您使用愉快！🎉
