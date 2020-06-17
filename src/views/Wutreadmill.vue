<template>
  <div class="Resort">
    <h2>TK-51 滑雪机使用说明</h2>
    <img src="../assets/huaxueji1.png" alt>
    <h3>使用方法及注意事项</h3>
    <!-- 使用与培训 -->
    <h4>1.使用与培训</h4>
    <div class="zhiyi">
      <p>1)连接电源打开电脑等待进入系统</p>
      <p>2)进入程序</p>
      <p>3)根据需求可选择VR模式</p>
      <p>4)在VR模式下可选择不同的运动场景</p>
      <p>5) 启动:当运动者落脚点处于加速区域时，跑步机启动。</p>
      <p>
        6)加速:当运动者落脚点始终落在加速区域时，跑步机逐渐加速，并且落脚点越靠前，加速效果越明显。
        注意:过度加速会导致运动失控，产生危险。
      </p>
      <p>7) 减速:当运动者落脚点处于减速区域时，跑步移动速度降低，并且落脚点越靠后，减速效果越明显。</p>
      <p>8)停止:运动中需要停止时，使用逐渐后移到跑带中后部，跑步机将缓慢停止。</p>
    </div>
    <!-- 安全注意事项 -->
    <h4>2.安全注意事项</h4>
    <div class="zhiyi">
      <p>a注意！！！</p>
      <p>1)确保在一一个稳定的水平面上安装和使用跑步机， 安装面可承受机体和使用者体重;</p>
      <p>2)跑步机后部请至少留出长200mX宽1000mm安全空间.</p>
      <p>
        3)跑步机停止后，跑带仍可转动，请使用者站在跑带中后部或站在跳板上，确保安全。
        当出现紧急情况时，可双手撑住扶手，双脚同时跳离跑带表面，踏于跑带两侧踏板，安全撇离.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.Resort img {
  width: 100%;
  height: 350px;
}
.Resort h3 {
  width: 100%;
  padding: 0px;
  float: left;
  color: red;
  /* background-color: aqua; */
}
.Resort .zhiyi {
  width: 100%;
  float: left;
  list-style: none;
  text-align: center;
}
.zhiyi p {
  margin-left: 10px;
  text-align: justify;
  text-justify: inter-ideograph;
  text-align: left;
}
</style>