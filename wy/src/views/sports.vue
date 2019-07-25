<template>
  <div>
    <titleList />
    <section class="wap-section">
      <div class="swiper-slide">
        <img src="../assets/2c8f5e5d0f8a475b90b0fc998a21f740.jpeg" alt />
        <span class="focus-title">莱纳德乔治正式亮相快船 所有人都在笑</span>
      </div>
    </section>

    <div class="sport-subnav">
      <ul >
        <li v-for="item in list">
          <a href="##">
            <img :src="item.img" alt="" class="unit-icon">
            <p class="unit-name">{{item.name}}</p>
          </a>
        </li>
      </ul>
    </div>

    <sportIndex />

  </div>
</template>
<script>
import titleList from "../components/Title";
import sportIndex from "../components/sports/sportIndex"
export default {
  components: {
    titleList,
    sportIndex
  },
  data() {
    return {
      list: [
        {
          img: "saishi.png",
          name: "赛事"
        },
        {
          img: "nba.png",
          name: "NBA"
        },
        {
          img: "zuqiu.png",
          name: "国际足球"
        },
        {
          img: "zhongchao.png",
          name: "中超"
        },
        {
          img: "cba.png",
          name: "CBA"
        },
        {
          img: "yingchao.png",
          name: "英超"
        },
        {
          img: "xijia.png",
          name: "西甲"
        },
        {
          img: "ouguan.png",
          name: "欧冠"
        },
        {
          img: "dejia.png",
          name: "德甲"
        },
        {
          img: "yiia.png",
          name: "意甲"
        },
        {
          img: "zonghe.png",
          name: "综合"
        }
      ]
    };
  }
};
</script>
<style scoped>
.wap-section {
  width: 100%;
  background: #ccc;
  color: #fff;
  position: relative;
}
.swiper-slide {
  width: 100%;
  height: 11.56rem;
}
.swiper-slide img {
  height: 100%;
  width: 100%;
}
.focus-title {
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  width: 86%;
  height: 2.5rem;
  font-size: 1.06rem;
  line-height: 2.5rem;
  padding: 0 10% 0 4%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 8%,
    rgba(0, 0, 0, 0.4) 40%,
    rgba(0, 0, 0, 0.29) 47%,
    rgba(0, 0, 0, 0.65) 95%
  );
}
.sport-subnav {
  padding: 1.25rem 0;
  border-bottom: 0.13rem solid #e5e5e5;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.sport-subnav li{
    display: inline-block;
    position: relative;
    height: 4.13rem;
    width: 4.19rem;
}
.sport-subnav li a{
    display: inline-block;
    height: 4.13rem;
    width: 4.19rem;
}
.sport-subnav li a::after{
    content: "";
    width: .13rem;
    height: 1.88rem;
    background: #e5e5e5;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -0.94rem;
}
.unit-icon{
    width: 4.19rem;
    height: 2.5rem;
    margin-bottom: .63rem;
}
.unit-name{
    color: #404040;
    font-size: .75rem;
    text-align: center;
    height: 1rem;
    width: 4.19rem;
}
</style>

