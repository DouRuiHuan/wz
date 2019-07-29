<template>
    <div class="cars">
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
            title:"汽车",
            bottom:["进入汽车频道>"],
            select:["汽车观察","每日易乐"]
        }
    },
    created(){
        this.getPlays();
    },
    methods:{
       getPlays(){
            this.$axios.get("/wy/cars").then((res)=>{
                this.list=res.cars.list.splice(0,5)
            })
       }
    }
}
</script>
<style >
    .cars{
        margin-top: .63rem;
    }
</style>