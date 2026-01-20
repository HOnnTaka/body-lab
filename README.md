# 体态实验室 (Body Lab)

- 基于 WebGL 的 3D 人体参数化模拟器，支持微信小程序、H5 和 App 多端运行。 体态实验室-身材模拟器lite版
- pro:https://github.com/HOnnTaka/body-lab-pro

## 技术架构

### 技术栈
- **框架**: UniApp + Vue 3
- **3D 引擎**: Three.js + three-platformize
- **构建工具**: Vite
- **UI 组件**: 自定义组件库
- 小程序需要配置云存储加载模型


## 快速开始

### 环境要求
- Node.js >= 16
- pnpm (推荐) 或 npm

### 安装依赖
```bash
pnpm install
```

### 开发运行

#### H5 开发
```bash
pnpm run dev:h5
```

#### 微信小程序开发
```bash
pnpm run dev:mp-weixin
```

#### App 开发
```bash
pnpm run dev:app
```

### 构建发布

#### H5 构建
```bash
pnpm run build:h5
```

#### 微信小程序构建
```bash
pnpm run build:mp-weixin
```



