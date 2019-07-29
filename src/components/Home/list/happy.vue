<template>
    <div class="plays">
          <!-- 头部 -->
        <allHeader :title="title" :select="select"/>
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
            title:"娱乐",
            bottom:["进入娱乐频道>"],
            select:["电影","电视","明星"]
        }
    },
    created(){
        this.getPlays();
    },
    methods:{
       getPlays(){
            this.$axios.get("/wy/happy").then((res)=>{
                this.list=res.happy.happy.splice(0,5)
            })
       }
    }
}
</script>
<style >
    .plays{
        margin-top: .63rem;
    }
</style>