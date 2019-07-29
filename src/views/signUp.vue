<template>
    <div class="signup">
        <div class="sign_up">
            <div>
                <input type="text" placeholder="6-18位字母数字组合" maxlength="18" v-model="username">
                <!-- <span>X</span> -->
            </div>
            <v-touch @tap="show">
                <span>{{msg}}</span>
                <i>▼</i>
            </v-touch>
        </div>

        <div class="show" v-show="flag">
            <div class="show_div" >
                <ul>
                    <v-touch v-for="item in list" tag="li" @tap="changeMsg(item)">
                        {{item}}
                    </v-touch>
                </ul>
            </div>
        </div>

        <div class="label">
            <input type="text" placeholder="6-16位数字字母字符组合密码" maxlength="16" v-model="password">
            <!-- <span>X</span> -->
        </div>
        <h2 >点此进行验证</h2>
        <v-touch tag="button"  @tap="find">下一步</v-touch>
        <div class="sign_bottom">
            <input type="checkbox">
            <p>用户注册即代表同意<span>《服务条款》</span>和<span>《网易隐私政策》</span></p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'@163.com',
            username:"",
            password:"",
            flag:false,
            list:["@163.com","@126.com","@yeah.net"]
        }
    },
    created(){
        this.getUser();
    },
    methods:{
        show(){
            this.flag=true;
        },
        changeMsg(item){
            this.msg=item;
            this.flag=false;
        },
        getUser(){
            this.$axios.get("/wy/data").then((res)=>{
                this.list=res.data;
                
                console.log(this.list)
            })
        },
        find(){
            this.$axios.post("/wy/login",{
                username:this.username+this.msg,
                password:this.password
            }).then((res)=>{
                if(res.status===0){
                    this.$router.push("/")
                }
            })
        }
    }
}
</script>
<style>
.signup{
    width: 100%;
    background: #fff;
    height: 41.88rem;
    overflow: hidden;
}
.sign_up{
    width: 20.13rem;
    height: 4.25rem;
    display: flex;
    margin: 0 auto;
    margin-top: 2.25rem;
    justify-content: space-between;
    align-items: flex-end;

}
.sign_up>div:nth-child(1){
    width: 11.2rem;
    height: 3.06rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: .25rem;
}
.sign_up>div:nth-child(2){
    width:7.81rem;
    height:3.06rem;
    border: 1px solid #ddd;
    border-radius: .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sign_up>div:nth-child(1)>input{
    width: 9.5rem;
    height: 3.06rem;
    border:none;
    outline: none;
    padding-left: .63rem; 
    font-size: 1rem;
}
.signup>.label{
    display: block;
    width: 20.13rem;
    height: 2.94rem;
    margin: 0 auto;
    margin-top: 1.25rem;
    border: 1px solid #ddd;
}
.signup>.label>input{
    width: 13.94rem;
    height: 2.94rem;
    border: none;
    padding-left: .63rem;
    font-size:1rem;
    outline: none;
}
.signup>button{
    width: 20.13rem;
    height: 2.63rem;
    display: block;
    margin: 0 auto;
    margin-top: 1.25rem;
    border: none;
    background: #b7272d;
    border-radius: .25rem;
    color: #fff;
    font-size: 1rem;
}
.signup>h2{
    font-weight: normal;
    width: 19.94rem;
    height: 2.56rem;
    font-size: 1rem;
    margin: 0 auto;
    line-height: 2.56rem;
    text-align: center;
    background: #eee;
    margin-top: 1.25rem;
    color: #45494c;
}
.sign_bottom{
    width: 20.13rem;
    height: 2.31rem;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    margin-top: .63rem;
}
.sign_bottom>input{
    width: .94rem;
    height: .94rem;
    background:#fff;
    margin-top: .14rem;
}
.sign_bottom>p{
    font-size: .81rem;
}
.sign_bottom>p>span{
    color: #0095ff;
}
.sign_up>div:nth-child(2)>span{
    font-size: .94rem;
    color: #333;
    font-weight: bold;
}
.show{
    width: 100%;
    height: 41.88rem;
    background: rgba(0,0,0,0.5)
}
.show_div{
    width: 18.75rem;
    height: 10.94rem;
    background: #fff;
    border-radius: .31rem;
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin: auto auto;
}
.show_div>ul>li{
    width: 15.94rem;
    height: 3.57rem;
    margin: auto;
    line-height: 3.44rem;
    font-size: .94rem;
    color: #333;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
}
</style>
