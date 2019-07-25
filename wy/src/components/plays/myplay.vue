<template>
  <div>
    <section class="wap-section">
      <img src="../../assets/playpic.png" alt />
      <span class="focus-title">刘翔与老婆穿情侣装 搂肩灿笑好甜蜜</span>
    </section>
    <section class="stars-rank">
      <div class="title-wrap">
        <div class="title">巨星势力榜</div>
        <div class="digest">快给偶像送花吧</div>
      </div>
      <div class="rank">
        <div class="rank-1 rank-item">
          <div class="head">
            <img src="../../assets/liutao.png" alt />
          </div>
          <div class="name">
            <i>刘涛</i>
          </div>
          <div class="support">
            <i>310876朵</i>
          </div>
        </div>

        <div class="rank-0 rank-item">
          <div class="head">
            <img src="../../assets/liuxianhua.png" alt />
          </div>
          <div class="name">
            <i>刘宪华</i>
          </div>
          <div class="support">
            <i>336797朵</i>
          </div>
        </div>

        <div class="rank-2 rank-item">
          <div class="head">
            <img src="../../assets/yangyang.png" alt />
          </div>
          <div class="name">
            <i>杨洋</i>
          </div>
          <div class="support">
            <i>256289朵</i>
          </div>
        </div>
      </div>
    </section>
    <playList :list="list" />
  </div>
</template>
<script>
import playList from "../list";
export default {
  data() {
    return {
      list: []
    };
  },
  components: {
    playList
  },
  created() {
    this.getList();
  },

  methods: {
    getList() {
      this.$axios.get("/wy/all").then(res => {
        this.list = res.data.all.play;
        console.log(this.list);
      });
    }
  }
};
</script>
<style scoped>
.wap-section {
  width: 100%;
  height: 11.56rem;
  background: #ccc;
  color: #fff;
  position: relative;
}
.wap-section img {
  width: 100%;
  height: 100%;
}
.wap-section .focus-title {
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  width: 86%;
  height: 2.5rem;
  font-size: 1.06rem;
  padding: 0 2.34rem 0 0.94rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 8%,
    rgba(0, 0, 0, 0.4) 40%,
    rgba(0, 0, 0, 0.29) 47%,
    rgba(0, 0, 0, 0.65) 95%
  );
}
.stars-rank {
  padding: 0.63rem 0;
  margin: 0 0.94rem;
}
.stars-rank .title-wrap {
  margin: 0.31rem 0;
}
.stars-rank .title-wrap .title {
  font-size: 1.06rem;
  color: #404040;
  display: inline-block;
}
.stars-rank .title-wrap .digest {
  font-size: 0.75rem;
  color: #888;
  display: inline-block;
  margin-left: 0.63rem;
}
.rank {
  background: url(../../assets/superstar.png) no-repeat;
  background-size: contain;
  width: 21.56rem;
  height: 5.31rem;
}
.rank .rank-item {
  width: 7.13rem;
  height: 5.31rem;
  position: relative;
  float: left;
}
.rank .head {
  position: absolute;
  border-radius: 50%;
  border: 0.19rem solid #fff;
}
.rank .name {
  position: absolute;
  font-weight: bold;
  color: #767676;
  bottom: 0.94rem;
  padding-right: 0.31rem;
}
.rank .support {
  right: 0.31rem;
  position: absolute;
  bottom: 0.16rem;
  color: #767676;
}
.rank .support span {
  font-size: 0.75rem;
  display: inline-block;
}
.rank-1 .head {
  width: 2.38rem;
  height: 2.38rem;
  right: 0.94rem;
  top: 0.63rem;
}
.rank .head img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.rank-1 .name {
  font-size: 0.88rem;
  left: 0.63rem;
}
.rank-0 .head{
  width: 2.5rem;
  height: 2.5rem;
  right: 1.56rem;
  top: .16rem;
}
.rank-0 .name{
  font-size: 1rem;
  left: .31rem
}
.rank-2 .head{
  width: 2.38rem;
  height: 2.38rem;
  right: 1.56rem;
  top: .63rem;
}
.rank-2 .name{
  font-size: .88rem;
  left: .31rem
}
.rank-2 .support{
  right: .63rem;
}
</style>

