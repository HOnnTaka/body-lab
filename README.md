# 体态实验室 (Body Lab)

基于 WebGL 的 3D 人体参数化模拟器，支持微信小程序、H5 和 App 多端运行。 lite版

## 技术架构

### 前端技术栈
- **框架**: UniApp + Vue 3
- **3D 引擎**: Three.js + three-platformize
- **构建工具**: Vite
- **UI 组件**: 自定义组件库

### 后端技术栈
- **云服务**: UniCloud
- **数据库**: 云数据库 (JSON)
- **存储**: 云存储
- **函数**: 云函数

### 核心技术
- **3D 渲染**: WebGL + Three.js
- **模型格式**: glTF 2.0 (.glb)
- **压缩算法**: Draco 几何压缩
- **变形技术**: BlendShapes/ShapeKeys

## 功能模式

### 简易模式 (Simple)
**交互方式**: 2-3 个宏观滑块
- 体脂率 (同时影响腹部、面部、腿部、手臂)
- 肌肉量 (同时影响胸部、手臂、腿部、背部)
- 身高比例 (同时影响腿长、躯干、脖子)


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
