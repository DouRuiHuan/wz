<template>
<div class="focus_list">
    <!-- 首页路由 -->
    <div :class="{focus:flag===false,focus1:flag===true}">
        <ul class="list">
            <li><router-link to="/news/新闻">新闻</router-link></li>
            <li><router-link to="/plays/体育">体育</router-link></li>
            <li><router-link to="/sports/娱乐">娱乐</router-link></li>
            <li><router-link to="/econs/财经">财经</router-link></li>
            <li><router-link to="/images/图片">图片</router-link></li>
            <li><router-link to="/cars/汽车">汽车</router-link></li>
            <li><router-link to="/star/星闻">星闻</router-link></li>
            <li><router-link to="/military/">军事</router-link></li>
            <li><router-link to="/livetelecast/军事">直播</router-link></li>
            <li><router-link to="/video/视频">视频</router-link></li>
            <li><router-link to="/science/科技">科技</router-link></li>
            <li><router-link to="/cellphone/手机">手机</router-link></li>
            <li><router-link to="#">数码</router-link></li>
            <li><router-link to="#">本地</router-link></li>
            <li><router-link to="#">网易号</router-link></li>
            <li><router-link to="#">段子</router-link></li>
            <li><router-link to="#">时尚</router-link></li>
            <li><router-link to="#">跟帖</router-link></li>
            <li><router-link to="#">游戏</router-link></li>
            <li><router-link to="#">教育</router-link></li>
            <li><router-link to="#">公开课</router-link></li>
            <li><router-link to="#">健康</router-link></li>
            <li><router-link to="#">旅游</router-link></li>
            <li><router-link to="#">亲子</router-link></li>
            <li><router-link to="#">艺术</router-link></li>
            <li><router-link to="#">双创</router-link></li>
            <li><router-link to="#">房产</router-link></li>
            <li><router-link to="#">家居</router-link></li>
            <li><span class="iconfont icon-xiaanniu" @click="changeSize"></span></li>
        </ul>
    </div>
    <!-- 今日要闻 -->
    <todayFocus/>
    <!-- 体育 -->
    <Plays/>
    <!-- 娱乐 -->
    <happy/>
    <!-- 汽车 -->
    <cars/>

    <!-- 军事 -->
    <div class="military"></div>
    <!-- 财经 -->
    <div class="econs"></div>
    <!-- 地址 -->
    <div class="adress"></div>
    <!-- 网易 -->
    <div class="wangyi"></div>
    
    <!-- 科技 -->
    <div class="science"></div>
    <bottom/>
    <footers/>
</div>
</template>
<script>
import todayFocus from "./list/todayfocus"
import Plays from "./list/plays"
import happy from "./list/happy"
import cars from "./list/cars"
import bottom from "./list/bottom"
import footers from "./list/footer"
export default {
    components:{
        todayFocus,Plays,happy,cars,bottom,footers
    },
    data(){
        return {
            flag:false,
        }
    },
    methods:{
        changeSize(){
            this.flag=!this.flag;
        }
        
    }
}
</script>
<style scope>
.aaa{
    background: #fff;
    width: 100%;
}
.focus{
    width: 100%; height: 5.5rem;
    overflow: hidden;
    position: relative;
    transition: all 1s;
}
.focus1{
    width: 100%; height: 11rem;
    transition: all 2s;
    position: relative;
}
.list{
    width: 23.5rem; height: 10.75rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1rem; 
}
.list>li{
    display: block;
    margin: 0 .94rem;
    font-size: 1rem;
    width: 2rem;
    height: 2.19rem;
    white-space: nowrap;
}
.list>li:last-child{
    position: absolute;
    width: 2.19rem;
    bottom: 0;
    right: 0;
    text-align: center;
    background: #f8f8f8;
}
</style>
