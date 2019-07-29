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
            title:"体育",
            bottom:["进入体育频道>"],
            select:["赛事","NBA","中超","CBA"]
        }
    },
    created(){
        this.getPlays();
    },
    methods:{
       getPlays(){
            this.$axios.get("/wy/plays").then((res)=>{
                this.list=res.plays.play.splice(0,5)
                console.log(this.list);
            })
       }
    }
}
</script>
<style scope>
    .plays{
        margin-top: .63rem;
    }
</style>