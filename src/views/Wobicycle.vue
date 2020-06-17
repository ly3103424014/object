<template>
    <div class="zhibicycle">
      <h2>8300U 直立脚踏车说明书</h2>
       <img src="../assets/woshi.png" alt>
       <!-- 关键词 -->
    <h4>关键词:</h4>
    <div class="wordkey">
      <p>(1) CALORIES: 卡路里(热量单位)</p>
      <p>(2) TIME: 时间</p>
      <p>(3) SPEED: 速度</p>
      <p>(4) RPM: 转速</p>
      <p>(5) SCAN:浏览</p>
      <p>(6) MANUAL: 手动操控</p>
      <p>(7) INTERVAL :间隔</p>
      <p>(8) HILLS: 丘陵</p>
      <p>(9) PLATEAU:高原</p>
      <p>(10) MOUNTAIN: 高山</p>
      <p>(11) HRC :心率控制器</p>
      <p>(12) RESET:重置</p>
      <p>(13) ENTER: 进入(快速启动模式)</p>
    </div>
    <!-- 预设程序 -->
    <h4>预设程序:</h4>
    <div class="wordkey">
      <p>(1) MANUAL:手动模式程序</p>
      <p>(2) RANDOM: 随机(随意)运动程序</p>
      <p>(3) INTERVAL:耐力训练程序</p>
      <p>(4) HRC:心率训练程序</p>
      <p>(5) VALLEY: 山谷训练程序</p>
      <p>(6) ROLLING: 旋转训练程序</p>
      <p>(7) MOUNTAIN: 高山训练程序</p>
      <p>(8)IRONMAN:专项训练程序</p>
    </div>
    <!-- 描述文字 -->
    <div class="wenzi">
      <p class="qixing">1、开始骑行，当显示屏变亮后按“▲▼”键选择您所希望使用的程序，并用"ENTER"键确认。</p>
        <p>2、健身车进入程序后，显示屏会自动提示您输入相关数据。</p>
        <div>(1) WEIGHT(体重):按▲▼箭头调整此数值，调整范围为15-250， 输入您实际体重/公斤，按"Enter键”确定;
        <br>(2) TIME (训练时间):按▲▼箭头调整此数值，调整范围为10-99， 输入您所需时间，按“Enter键”确定;
         <br>(3) LEVEL (阻力水平):按▲▼箭头调整此数值的阻力大小，调整范围为1-16，然后按"ENTER”键确认。
        </div>
        <p>3、按SCAN切换键:显示TIME(时间)、DISTANCE (距离) PULSE (心率) CALORIES (卡路里)</p>
         <div>SPEED (速度) RPM (转速); LEVEL (阻力)、WATTS (功率)循环显示正在运行的数值。 </div> 
      <p>4、停止骑行，训练结束。</p>
    </div>
    <!-- 注意事项 -->
    <h3>二、注意事项:</h3>
    <ul class="attention">
        <li>1、练习者在做该器材练习时，严禁穿皮鞋、硬底鞋或钉类鞋</li>
        <li>2、在调 整程序时双脚站在跑台板的两侧(不要站在跑带 上)等调式完毕后再进行下正常操作;下跑台时一定要与跑带完全静止再下来，以免摔倒，如遇紧急情况请按左侧扶手上的红色紧急停止键。</li>
        <li>3、心脏病、高血压等 患者慎用或在专人陪护下进行慢速运动。</li>
    </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
.zhibicycle img{
    width: 100%;
    height: 300px;
}
.zhibicycle h4 {
  float: left;
}
.zhibicycle h3{
    float: left;
}
.wordkey {
  width: 100%;
  height: 400px;
  /* background-color: aqua; */
  float: left;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 17px;
}
.wenzi {
  margin-top: 60px;
  float: left;
  list-style: none;
}
.wenzi p{
width: 100%;
text-align: justify;
text-justify: inter-ideograph;
}
.wenzi div{
text-align: justify;
  text-justify: inter-ideograph;
}
.attention{
  width: 100%;
  float: left;
  list-style: none;
}
.attention li{
  width: 100%;
  /* height: 100px; */
  text-align: justify;
  text-justify: inter-ideograph;
  margin-left: -46px;
  margin-top:10px;
  padding-left: 8px;
}
</style>