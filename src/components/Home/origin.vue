<template>
<div class="origin">
    <context :list="list"/>
</div>
</template>
<script>
import context from "./lisiui/contentui"
export default {
    components:{context},
    data(){
        return {
            list:[]
        }
    },
    created() {
        this.getData();
    },
    methods:{
        getData(){
            this.$axios.get("/wy/home").then((res)=>{
                this.list=res.focus.focunews;
            })
        }
    }
}
</script>