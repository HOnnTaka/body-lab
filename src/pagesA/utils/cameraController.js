/**
 * 相机控制器 - 球面坐标系统 + 平移
 * 旋转始终围绕模型中心，平移不影响旋转中心
 */

// #ifdef H5
import * as THREE from 'three';
// #endif
// #ifndef H5
import * as THREE from 'three-platformize';
// #endif

export function createCameraController(camera) {
  // 相机状态
  let distance = 1;
  let theta = 0;        // 水平角度
  let phi = Math.PI / 2; // 垂直角度
  let defaultDistance = 2;
  
  // 旋转中心（模型中心，不受平移影响）
  const rotationCenter = new THREE.Vector3(0, 100, 0);
  const defaultRotationCenter = new THREE.Vector3(0, 0, 0);
  
  // 平移偏移（相对于旋转中心）
  const panOffset = new THREE.Vector3(0, 0, 0);
  
  // 更新相机位置
  const update = () => {
    if (!camera) return;
    
    // 限制角度和距离
    phi = Math.max(0.1, Math.min(Math.PI - 0.1, phi));
    distance = Math.max(0.5, Math.min(10, distance));
    
    // 球面坐标转笛卡尔坐标（围绕旋转中心）
    const x = distance * Math.sin(phi) * Math.sin(theta);
    const y = distance * Math.cos(phi);
    const z = distance * Math.sin(phi) * Math.cos(theta);
    
    // 相机位置 = 旋转中心 + 球面偏移 + 平移偏移
    camera.position.set(
      rotationCenter.x + x + panOffset.x,
      rotationCenter.y + y + panOffset.y,
      rotationCenter.z + z + panOffset.z
    );
    
    // 相机始终看向旋转中心（不受平移影响）
    camera.lookAt(
      rotationCenter.x + panOffset.x,
      rotationCenter.y + panOffset.y,
      rotationCenter.z + panOffset.z
    );
  };
  
  // 根据模型自动适配相机
  const fitToModel = (object) => {
    if (!camera) return;
    
    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    
    // 设置旋转中心为模型中心
    rotationCenter.copy(center);
    defaultRotationCenter.copy(center);
    
    // 重置平移偏移
    panOffset.set(0, 0, 0);
    
    const fov = camera.fov * (Math.PI / 180);
    distance = (maxDim / 2) / Math.tan(fov / 2) * 0.66;
    defaultDistance = distance;
    
    update();
  };
  
  // 重置视角
  const reset = () => {
    distance = defaultDistance;
    theta = 0;
    phi = Math.PI / 2;
    rotationCenter.copy(defaultRotationCenter);
    panOffset.set(0, 0, 0);
    update();
  };
  
  // 旋转（围绕旋转中心）
  const rotate = (deltaTheta, deltaPhi) => {
    theta += deltaTheta;
    phi += deltaPhi;
  };
  
  // 缩放
  const zoom = (factor) => {
    distance *= factor;
  };
  
  // 平移（屏幕空间，不影响旋转中心）
  const pan = (deltaX, deltaY) => {
    // 计算相机的右向量和上向量
    const right = new THREE.Vector3();
    const up = new THREE.Vector3();
    
    camera.matrix.extractBasis(right, up, new THREE.Vector3());
    
    // 根据距离调整平移速度
    const panSpeed = distance * 0.001;
    
    panOffset.addScaledVector(right, -deltaX * panSpeed);
    panOffset.addScaledVector(up, deltaY * panSpeed);
  };
  
  return {
    update,
    fitToModel,
    reset,
    rotate,
    zoom,
    pan,
    get distance() { return distance; },
    set distance(v) { distance = v; },
    get theta() { return theta; },
    set theta(v) { theta = v; },
    get phi() { return phi; },
    set phi(v) { phi = v; },
    get rotationCenter() { return rotationCenter; },
    get panOffset() { return panOffset; },
  };
}
