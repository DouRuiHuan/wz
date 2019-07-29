<template>
    <div class="today_focus_header">
        <div class="focu_header">
            <span>
                {{title}}
            </span>
            <ul>
                <li v-for="item in select">{{item}}</li>
            </ul>
            
        </div>
        
    </div>
</template>
<script>
export default {
    props:["title","select"]
}
</script>
<style scope>
    .today_focus_header{
        background: #fff;
       
    }
    .focu_header{
        width: 22.06rem;
        height: 2rem;
        padding: .5rem 0;
         margin: 0 auto;
        line-height: 2.69rem;
        display: flex;
        justify-content: space-between;
        align-items: center; 
    }
    .focu_header>span{ 
        font-weight: bold;
        font-size:1.13rem; 
        color: #333; 
    }
    .focu_header>ul{
        display: flex;

    }
    .focu_header>ul>li{
        margin-left: 1.25rem;
        font-size: 1.06rem;
    }
</style>
