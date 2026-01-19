<template>
  <view class="home">
    <!-- 顶部安全区 -->
    <view class="safe-top" :style="{ height: statusBarHeight + 'px' }"></view>
    
    <!-- 头部 -->
    <view class="header">
      <text class="title">体态实验室</text>
      <text class="subtitle">3D 人体形态可视化工具</text>
    </view>
    
    <!-- 功能卡片 -->
    <view class="cards">
      <view class="card" @click="goToLab">
        <view class="card-icon">🧬</view>
        <view class="card-info">
          <text class="card-title">开始体验</text>
          <text class="card-desc">调整体型参数，360° 预览人体模型</text>
        </view>
        <text class="card-arrow">→</text>
      </view>
    </view>
    
    <!-- 免责声明 -->
    <scroll-view class="disclaimer" scroll-y>
      <view class="section">
        <text class="section-title">📋 关于模型来源与精度</text>
        <text class="section-text">本产品使用的 3D 人体模型基于 MakeHuman Community 进行二次开发与移动端适配。</text>
        <view class="warning-box">
          <text class="warning-title">⚠️ 非医疗级精度</text>
          <text class="warning-text">模型展示的体态变化仅基于通用算法模拟（如 BMI 估算），仅供娱乐与视觉参考，不能真实反映您个人的骨骼结构或肌肉分布，严禁作为医疗诊断或健身指导依据。</text>
        </view>
      </view>
            <view class="section">
        <text class="section-title">👁️ 视觉不适与"恐怖谷"提示</text>
        <text class="section-text">为了提供极高的自由度，我们未对参数调节范围做强制锁定。</text>
        <view class="tip-item">
          <text class="tip-label">极端参数预警</text>
          <text class="tip-text">当您将某些参数（如身高、体重、肌肉量）同时拖拽至极端数值时，模型可能会出现穿模、网格破损或不符合人体生理结构的扭曲。</text>
        </view>
        <view class="tip-item">
          <text class="tip-label">心理不适</text>
          <text class="tip-text">此类极端的人体变形可能会引发"恐怖谷效应"（即因过度拟人但又非人而产生的视觉不适感）。若您感到不适，请立即重置参数或退出应用。</text>
        </view>
      </view>
      <view class="section">
        <text class="section-title">🔥 性能与发热预警</text>
        <text class="section-text">由于 3D 实时渲染（WebGL）对手机算力要求较高：</text>
        <view class="tip-item">
          <text class="tip-label">设备发热</text>
          <text class="tip-text">在长时间调节参数或高画质模式下，您的设备可能会出现轻微发热或电量消耗加快，属于正常物理现象。</text>
        </view>
        <view class="tip-item">
          <text class="tip-label">运行卡顿</text>
          <text class="tip-text">部分旧款机型或低电量模式下，可能会出现掉帧或加载缓慢。建议您关闭后台多余应用以获得流畅体验。</text>
        </view>
      </view>
      

      
      <view class="footer">
        <text class="footer-text">点击"开始体验"即表示您已阅读并同意以上声明</text>
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const statusBarHeight = ref(20);

onMounted(() => {
  try {
    const sysInfo = uni.getSystemInfoSync();
    statusBarHeight.value = sysInfo.statusBarHeight || 20;
  } catch (e) {}
});

const goToLab = () => {
  uni.navigateTo({ url: '/pagesA/lab/index' });
};
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(180deg, #e8eef5 0%, #f5f7fa 100%);
  display: flex;
  flex-direction: column;
}

.safe-top {
  flex-shrink: 0;
}

.header {
  padding: 24px 24px 20px;
  text-align: center;
}

.title {
  display: block;
  font-size: 26px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 6px;
}

.subtitle {
  display: block;
  font-size: 14px;
  color: #666;
}

.cards {
  padding: 0 16px 16px;
}

.card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 16px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.card:active {
  background: #fafafa;
}

.card-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.card-info {
  flex: 1;
}

.card-title {
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.card-desc {
  display: block;
  font-size: 12px;
  color: #888;
}

.card-arrow {
  font-size: 18px;
  color: #ccc;
  flex-shrink: 0;
}

.disclaimer {
  flex: 1;
  padding: 0 16px;
  width: unset;
}

.section {
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
}

.section-title {
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.section-text {
  display: block;
  font-size: 13px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 10px;
}

.warning-box {
  background: #fff8e6;
  border-left: 3px solid #faad14;
  padding: 12px;
  border-radius: 0 8px 8px 0;
}

.warning-title {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #d48806;
  margin-bottom: 6px;
}

.warning-text {
  display: block;
  font-size: 12px;
  color: #8c6d1f;
  line-height: 1.6;
}

.tip-item {
  background: #f8f9fa;
  padding: 10px 12px;
  border-radius: 8px;
  margin-bottom: 8px;
}

.tip-item:last-child {
  margin-bottom: 0;
}

.tip-label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
}

.tip-text {
  display: block;
  font-size: 12px;
  color: #666;
  line-height: 1.6;
}

.footer {
  padding: 20px 0 40px;
  text-align: center;
}

.footer-text {
  font-size: 11px;
  color: #999;
}
</style>
