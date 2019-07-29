<template>
<!-- 本组件是首页的内容 -->
  <div class="home" v-gd="sic" dis="150">
    <!-- 广告图片 -->
    <img src="https://yt-adp.ws.126.net/myzhang/1080170_axhw_20190716.jpeg" alt="" v-show="componentName==='FocuNews'">
    <!-- 广告图片结束 -->
    <!-- 头部标题 -->
        <header>
          <v-touch class="iconfont icon-yonghu" @tap="showDiv" tag="span" ></v-touch>
          <span class="iconfont icon-wangyi1"></span>
          <div><span class="iconfont icon-youxiang1"></span><span>邮箱</span><span class="iconfont icon-xiaanniu"></span></div>
        </header>
        <!-- 头部结束 -->

        <!-- 隐藏的登录注册 -->
        <v-touch :class="{show:flag===true,hide_sign:flag===false}" @tap="hideDiv" tag="div">
            <Sign/>
        </v-touch>
        <!-- 隐藏的登录注册结束 -->

        <!-- 动态组件 -->
        <div  :class="{component1:sic.flag===true,component:sic.flag===false}">
            <v-touch @tap="sendComponentName('FocuNews')" tag="span" :class="{color:componentName==='FocuNews'&&sic.flag===false}">
              要闻
              <i :class="{i:componentName==='FocuNews'}"></i>
            </v-touch>
            <v-touch @tap="sendComponentName('Origin')" tag="span" :class="{color:componentName==='Origin'&&sic.flag===false}">推荐
              <i :class="{i:componentName==='Origin'}"></i>
            </v-touch>
            <v-touch @tap="sendComponentName('Recommend')" tag="span" :class="{color:componentName==='Recommend'&&sic.flag===false}">原创
              <i :class="{i:componentName==='Recommend'}"></i>
            </v-touch>
        </div>
        <component :is="componentName"></component>
        <!-- 动态组件结束 -->

      <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import FocuNews from "../components/Home/focusNews.vue"
import Origin from "../components/Home/origin.vue"
import Recommend from "../components/Home/recommend.vue"
import Sign from "../components/Home/sign"
export default {
  components:{
    FocuNews,Origin,Recommend,Sign
  },
  data(){
    return {
      componentName:'FocuNews',
      flag:false,
      sic:{
        flag:false
      }

    }
  },
  methods:{
    sendComponentName(str){
      this.componentName=str;
    },
    showDiv(){
      this.flag=true;
      console.log(111)
    },
    hideDiv(){
      this.flag=false;
      console.log(222)
    }
  }
}
</script>
<style scope>
.component1{
  position: fixed;
  top:0;
  background: #ee1a1a;
  width: 100%; height: 2.88rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* background: #fff; */
    border: .06rem solid #eee;
    color: #fff;
    z-index: 100;
}

.color{
  color: #ee1a1a;
}
.block{
  color: #333;
}
.home{
   position: fixed;
   top:0;
   right: 0;
   left: 0;
   bottom: 0;
   overflow: auto;
  }
.home>img{
  width: 100%;
  height: 3.69rem;
}
  header{
    width: 100%;
    height: 2.69rem;
    background: #ee1a1a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    color: #fff;
  }
  header>.iconfont{
    font-size: 1.5rem;
  }
  header>span:nth-child(1){
    padding-left: .63rem;
  }
  header>span:nth-child(2){
    margin-left: 1.63rem;
  }
  header>.icon-yonghu,header .icon-youxiang1{
    font-size: 1.5rem;
  }
  header>div{
    display: flex;
    justify-content: start;
    align-items: center;
    margin-right: .63rem;
  }
  header>div>span:nth-child(2){
    font-size: .94rem;
    padding: 0 .19rem;  
  }
  header>div>.icon-xiaanniu{
    font-size: .63rem;
  }
  .component{
    width: 100%; height: 2.88rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    border: .06rem solid #eee;
    color: #333;
    position: relative;
  }
  .component>span,.component1>span{
    display: block;
    font-size: 1.06rem;
  }

  .i{
    width: .8rem;
     height: .13rem;
     display: block;
     /* background: #fff; */
     position: absolute;
     bottom: 0;
     margin-left: .63rem;;
     background: #ee1a1a;
  }

  /* 隐藏的登录注册 */
  .hide_sign{
    display: none;
    width:100%;
    position: fixed;
    height:670px;
    left: 0;
    right: 0;
    bottom: 0;
    top:0;
    background: rgba(0,0,0,0.5);
    z-index: 100;
  }
  .show{
    display: block;
    width:100%;
    position: fixed;
    height:670px;
    left: 0;
    right: 0;
    bottom: 0;
    top:0;
    background: rgba(0,0,0,0.5);
    z-index: 200;
  }


</style>

