<template>
<ul class="today_focus_content">
    <li v-for="item in list">
        <div class="new_info" v-if="!item.imgextra">
            <h3 v-if="item.imgsrc===''">{{item.title}}</h3>
            <h4 v-else-if="item.imgsrc!==''">{{item.title}}</h4>
        
            <div class="details">
                <span>{{item.source}}</span>
                <span>{{item.ptime | time}}</span>
                <span>{{item.replyCount}}跟帖</span>
            </div>
            <div class="new_img">
                <img :src="item.imgsrc" alt="">
            </div>
        </div>
         <div class="new_info1" v-if="item.imgextra">
            <h3>{{item.title}}</h3>
             
            <div class="new_img">
                    <img :src="item.imgsrc" alt="">
                
                <div v-for="item1 in item.imgextra">
                    <img :src="item1.imgsrc" alt="">
                </div>
            </div>
            <div class="details">
                <span>{{item.source}}</span>
                <span>{{item.ptime | time}}</span>
                <span>{{item.replyCount}}跟帖</span>
            </div>
        </div>

    </li>
</ul>
</template>
<script>
export default {
    props:["list"]
}
</script>
<style scope>
        .today_focus_content{
        width: 100%;
        background: #fff;
        overflow: hidden;
    }
    .today_focus_content>li{
        width: 100%; 
        border-bottom: 1px solid #eee;
        color: #333;
        overflow: hidden;
    }
    .today_focus_content>li:last-child{
        border: none;
    }
    .today_focus_content>li>.new_info{
        width: 22.06rem;
        height: 5.81rem;
        margin: auto;
        margin-top: .78rem;
        position: relative;
        overflow: hidden;
    }

    .today_focus_content>li>.new_info>h3,.today_focus_content>li>.new_info1>h3{
          font-size: 1.06rem;
        font-weight: normal;
    }
    .today_focus_content>li>.new_info>h4{
        width: 14.75rem;
        font-size: 1.06rem;
        font-weight: normal;
    }
     .today_focus_content>li>.new_info>.details{
         font-size: .75rem;
         color: #b4b4b4;
         margin-top: .63rem;

     }
     .today_focus_content>li>.new_info>.details>span,.today_focus_content>li>.new_info1>.details>span{
         padding-right: .31rem;
     }
      .today_focus_content>li>.new_info>.new_img{
          width: 7.31rem;
          height: 4.56rem;
          position: absolute;
          right: 0;
          top: 0;
      }
      .today_focus_content>li>.new_info>.new_img>img{
           width: 7.31rem;
          height: 4.56rem;
      }
      .new_info1{
          width: 100%;
          overflow: hidden;
      }
      .new_info1>h3{
          width: 22.06rem;
          margin: 0 auto;
          margin-top: .31rem;
      }
      .new_info1>.new_img{
          width: 22.06rem;
          margin: .58rem auto;
          display: flex;
          justify-content: space-between;
      }
      .new_info1>.new_img img{
          width: 7.31rem;
          height: 4.56rem;
      }
      .new_info1>.details{
          width: 22.06rem;
          height: 1.06rem;
          margin: 0 auto;
          font-size: .75rem;
          color: #b4b4b4;
          margin-top: .63rem;
          margin-bottom: .6rem;
      }
    .today_focus_content>img{
        opacity: 0;
        
    }
</style>