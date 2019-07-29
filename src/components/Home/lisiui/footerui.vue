<template>
    <div class="all_footer">
        <ul>
            <li v-for="item in bottom">
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:["bottom"],
    data(){
        return {
        }    
    }
}
</script>
<style scope>
    .all_footer{
        width: 100%;
        background: #fff;
        overflow: hidden;
    }
    .all_footer>ul{
        width: 22.19rem;
        height: 2.56rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: .94rem;
        color: #ee1a1a;
         margin-bottom: .63rem;
    }
</style>