<template>
<div class="recommend">
    <context :list="list"/>
</div>
</template>
<script>
import context from "./lisiui/contentui"
export default {
    components:{context},
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            this.$axios.get("/wy/plays").then((res)=>{
                this.list=res.plays.play
            })
        }
    }
}
</script>