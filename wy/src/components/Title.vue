<template>
  <div class="cannel-nav">
    <div class="home-back">
      <a href="" @click="goback">
        <strong></strong>
      </a>
        
    </div>
    <div class="channel-name">
      <h1>新闻频道</h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    goback(){
      this.$router.push("/")
    }
  },
};
</script>
<style scoped>
.cannel-nav {
  width: 21.51rem;
  height: 2.81rem;
  padding: 0 0.97rem;
  background: #fff;
  line-height: 2.81rem;
  display: flex;
  flex: 1;
  align-items: center;
}
.channel-name {
  height: 1.56rem;
  width: 16.81rem;
}
.channel-name > h1 {
  height: 1.56rem;
  line-height: 1.56rem;
  width: 23.44rem;
  margin-left: -5.66rem;
  text-align: center;
  font-size: 1.13rem;
}
.home-back {
  width: 4.69rem;
  height: 1.09rem;
}
.home-back a{
  display: block;
  width: 3.13rem;
  height: 1.09rem;;
}
.home-back strong {
  float: left;
  width: 3.13rem;
  height: 1.09rem;
  background: url(../assets/wylogo.png) no-repeat 0 0;
  background-size: 2.09rem 1rem;
  padding-left: 1.19rem;
  margin-left: 1rem;
}
.home-back strong::before{
    content: "";
    display: block;
    width: .63rem;
    height: 1.09rem;
    background: url(../assets/index.png) no-repeat 0 0;
    background-size: 100% 100%;
    margin-left: -2.6rem;
}
</style>

