<template>
    <div class="all"  >
        <div class="username">
            <span class="iconfont icon-wangyi"></span>
            <input type="text" placeholder="邮箱" @focus="show" @blur="hide" v-model="username">
            <v-touch  @tap="back" tag="span"><span v-show="flag" >X</span></v-touch>
        </div>
        <div class="username">
            <span class="iconfont icon-wangyi"></span>
            <input type="text" placeholder="密码" @focus="show1" @blur="hide1" v-model="password">
            <v-touch @tap="back1" tag="span"><span v-show="flag1"  >X</span></v-touch>
        </div>
        <p>使用<span>网易账号管家</span>,全面保护您的账号</p>
        <v-touch @tap="submitData" tag="button">登录</v-touch>
        <div class="want">
            <span>忘记密码?</span>
            <v-touch @tap="gosignup" tag="span">去注册</v-touch>
        </div>
        <div class="bottom">
            <p>社交账号登录</p>
        </div>
    </div>
</template>
<script>
import { setInterval } from 'timers';
export default {
    data(){
        return{
            username:"",
            password:"",
            flag:false,
            flag1:false,
            showBorder:false
        }
    },
    created() {
        this.getData();
    },
    methods:{
        gosignup(){
            this.$router.push("/signUp")
        },
        getData(){
            this.$axios.get("/wy/data").then((res)=>{
                console.log(res)
            })
        },
        submitData(){
            this.$axios.post("/wy/sign",{
                username:this.username,
                password:this.password
            }).then((res)=>{
                console.log(res)
            })
            this.username="",
            this.password=""
        },
        show(){
            this.flag=true;
            this.showBorder=true

        },
        hide(){
            this.flag=false;
        },
         show1(){
            this.flag1=true;
            this.showBorder=true
        },
        hide1(){
            this.flag1=false;
        },
        back(){
            this.username=""
        },
        back1(){
            this.password=""
        }
    }
}
</script>
<style scope>

@keyframes move {
    0% {left:-16.25rem;}
    50% {left:0rem}
    100% {left:0rem}
}
.border{
    border: .06rem solid #0ff;    
}
 .username{
    width: 13.75rem;
    height: 2.69rem;
    background: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
    margin-top: 1.25rem;
     border-radius: .31rem;
    border:1px solid  #c5cddb;
  }
  .all{
    width: 16.25rem;
    height: 41.69rem;
    animation: move 3s;
    position: relative;
    background: #fff;
    overflow: hidden;
    
  }
  .all>p{
      width: 11rem;
      height: 2.5rem;
      margin: 1rem auto;
      font-size: .81rem;
      line-height: 1.25rem;
  }
  .all>p>span{
      color: #4aafe9;
  }
  .all>button{
      width: 13.75rem;
      height: 2.38rem;
      background: #ff3333;
      border: none;
      outline: none;
      display: block;
      color: #fff;
      font-size: .81rem;
      margin: 0 auto;
      border-radius: .31rem;

  }
  .all>.want{
      width: 13.75rem;
      height: 2rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .username>span:nth-child(1){
    font-size: 1.63rem;
    color: #ddd;
    padding: 0 .44rem;
  }
  .username>input{
    width: 8.56rem;
    height: 2.56rem;
    border: none;
    outline: none;
  }
  .username>span:nth-child(3){
      width: 1.25rem;
    height: 1.25rem;
    display: block;
    margin-left: .94rem;
  }
  .username>span:nth-child(3)>span{
    color: #fff;
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    text-align: center;
    line-height: 1.25rem;
    background: #ddd;
    border-radius: 50%; 
  }

  .bottom{
      width: 7.19rem;
      height: .75rem;
      background: #fff;
  }
</style>
