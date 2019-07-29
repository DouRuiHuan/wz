<template>
<!-- 这个组件是所有列表的头部标题 -->
    <div class="today_focus">
        <!-- <div class="tfocus_header"></div> -->
        <!-- 头部 -->
        <allHeader :title="title"/>
        <!-- 内容 -->
        <allContent :list="list"/>
        <!-- 底部 -->
      
        <allFooter :bottom="bottom"/>

    </div>
</template>
<script>
import allHeader from "../lisiui/headerui"
import allFooter from "../lisiui/footerui"
import allContent from "../lisiui/contentui"
export default {
    components:{
        allHeader,allFooter,allContent
    },
    data(){
        return {
            list:[],
            title:"今日要闻",
            bottom:["换一换","进入今日要闻>"]
        }
    },
     created(){
         this.getFocus();
    },
    methods:{
        getFocus(){
            this.$axios.get("/wy/home").then((res)=>{
                this.list=res.focus.focunews.splice(1,10);
            })
        }
    }
   
}
</script>
<style scope>
.today_focus{
    position: relative;
    z-index: 3;
}
</style>