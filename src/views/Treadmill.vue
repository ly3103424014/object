<template>
  <div class="treadmill">
    <h2>8400T 跑步机使用说明</h2>
    <!-- 图片 -->
    <img src="../assets/paobuji.png" alt>
    <!-- 特权说明 -->
    <h3>一、特权说明：</h3>
    <ul class="description">
      <li>1、 此款跑步机为内置18. 5”触屏电视，附带U盘音视频播放， WIFI实景模拟于一体的智能版跑步机。</li>
      <li>2、运动后显示相关运动数据，可以打开 手机微信或QQ扫描二维码与好友分享。</li>
      <li>3、屏幕显示相关按键信息如时间、温度、保养信息、WIFI 等。</li>
    </ul>
    <!-- 表盘关键字 -->
    <h3>二、表盘关键字：</h3>
    <div class="keyword">
      <p>(1) START 开始建</p>
      <p class="stop">(2) STOP 停止建</p>
      <p>(3) SPEED:速度</p>
      <p class="INCLINEE">(4) INCLINEE:坡度</p>
      <p>(5) INCLINEE CH0ICE: 坡度选择</p>
      <p>(6) SPEED CHOICE: 速度选择</p>
    </div>
    <!-- 程序使用说明 -->
    <h3>三、程序使用说明：</h3>
    <div class="Program">
      打开跑步机屏幕亮了之后会依次显示:竞赛模式、实景运动、 本地视频、用户自定义、
      <br>程式运动、本地音乐、 用户中心、减脂功能、 运动数据、(开始) 快速启动、系统设置、
      <br>更换桌面、网格、Wifi 设置、垃圾清理、爱奇艺、酷狗。
    </div>
    <!-- 以下为各种功能介绍: -->
    <h4>以下为各种功能介绍:</h4>
    <div class="functions">
      1、度: 1-25Km/h, 其增减量为0.1 Km/h, 可按照使用者自身条件随心所欲的调节:
      <br>2、坡度: 1~ 18%， 其增减量为0. 5%， 国内首家实现负坡度跑步功能:
      3、具有速度直选和坡度直选功能，可自调时间，距离，卡路里倒数模式;
      <br>4、带有风扇功能，风量力度和角度均可随意调整;
    </div>
    <!-- 各种程序功能说明 -->
    <h4>各种程序功能说明:</h4>
    <ul class="product">
      <li>(1)竞赛模式。进入后，可以分别进行:心肺模式、丘陵慢跑、体能测试、穿越乡间、沙滩跑模式、高原测试、力量训练、爬坡模式、放松模式、漫步模式、有氧呼吸模式、公路跑模式等模式进行设置及选择:</li>
      <li>
        (2)程式运动，进入后，具有:有氧呼吸模式、公路跑模式、漫步模式、爬坡模式、放松模式、丘陵漫跑、心肺模式、沙滩跑模式、穿越乡间、力量测试、高原测试、体能测试等
        模式进行设置及选择;
      </li>
      <li>(3)实景运动，进入后，具有:安六拉山湖畔、厦门环岛路、穿越峡谷、穿越山谷、西藏卡均村、雪山国道等模式进行设置及选择:</li>
      <li>(4)用户自定义模式:进入后，具有: U-120种运动模式。打开任意一种运动模式， 均可以点击速度、坡度进行设置:</li>
      <li>(5)用户中心/测脂功能/运动数据:均需要进行手机号注册和设置才可以使用:</li>
      <li>(6)系统设置，打开后，可以进行:时区设置、应用升级、进入后台、- -键还原、工程模式进行设置和选择。</li>
      <li>
        (7)其他，也可以通过“更换桌面":进行屏幕的选择，通过“垃圾清理”进行系统清理，在连拉上Wifi的状态下，可以通过“爱奇艺”进行视频更新或直接观看，还可以通过
        “酷狗”进行音乐的选择。
      </li>
    </ul>
    <!-- 注意事项 -->
    <h3>四、注意事项：</h3>
    <ul class="attention">
        <li>1、 为保护练习者自身膝、踝关节不受损害以及延长跑台使用寿命,跑步时严禁穿皮鞋、硬底鞋或钉 类鞋，建议练习者跑步时最好穿软质平底运动鞋。</li>
        <li>2、在调 整程序时双脚站在跑台板的两侧(不要站在跑带 上)等调式完毕后再进行下正常操作;下跑台时一定要与跑带完全静止再下来，以免摔倒，如遇紧急情况请按左侧扶手上的红色紧急停止键。</li>
        <li>3、心脏病、高血压等 患者慎用或在专人陪护下进行慢速运动。</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.treadmill h3 {
  /* margin-left: 10px; */
  overflow: hidden;
  float: left;
}
.treadmill h4 {
  float: left;
}
.treadmill img {
  width: 100%;
  height: 200px;
  border:0.5px solid gray;
}
.description {
  width: 100%;
  /* background-color: red; */
  float: left;
}
.description li {
  width: 100%;
  height: 50px;
  margin-left: -36px;
  list-style: none;
  /* background-color:blue; */
  text-align: justify;
  text-justify: inter-ideograph;
}
.keyword {
  width: 100%;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  float: left;
}
.keyword li {
  width: 100%;
  height: 50px;
  margin-left: -36px;

  list-style: none;
}
.keyword .stop {
  margin-right: 50px;
}
.keyword .INCLINEE {
  margin-right: 36px;
}
.Program {
  text-indent: 25px;
  text-align: justify;
  text-justify: inter-ideograph;
  /* background-color: red; */
  float: left;
}
.functions {
  width: 100%;
  /* background-color: red; */
  text-align: justify;
  text-justify: inter-ideograph;
  float: left;
}
.product {
  width: 100%;
  float: left;
  list-style: none;
  margin-left: 10px;
   margin-top:0px;
}
.product li {
  width: 100%;
  height: 100px;
  text-align: justify;
  text-justify: inter-ideograph;
  float: left;
  margin-left: -46px;
  margin-top:10px;
}
.attention{
  width: 100%;
  float: left;
  list-style: none;
}
.attention li{
  width: 100%;
  height: 100px;
  text-align: justify;
  text-justify: inter-ideograph;
  margin-left: -46px;
  margin-top:10px;
  padding-left: 8px;
  
}
</style>