<template>
  <div>
    <section class="news-section">
      <div class="swiper-container">
        <img src="http://cms-bucket.ws.126.net/2019/07/18/5f4340e7ccaa45b4b401cbaa3b234a9d.jpeg" />
        <span class="swiper-title">浙江迎台风“丹娜丝” 岸边掀巨浪</span>
      </div>
    </section>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <li v-for="item in list.slice(1)" class="wap-wrap">
        <div class="card-type">
          <h3 class="title">{{item.title}}</h3>
          <div class="detail">
            <span class="news-source">{{item.source}}</span>
            <span class="pubtime">{{item.mtime | time}}</span>
            <span class="reply">{{item.priority}}跟帖</span>
          </div>
        </div>
        <div class="news-pic">
          <img :src="item.imgsrc" alt />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios.get("/wy/home").then(res => {
        this.list = res.data.focus.focunews;
      });
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 1000);
    }
  }
};
</script>

<style scoped>
.news-section {
  width: 100%;
  height: 11.56rem;
  background: #ccc;
  color: #fff;
  position: relative;
}
.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  height: 11.56rem;
  width: 23.44rem;
}
.swiper-container img {
  height: 100%;
  width: 100%;
}
.swiper-title {
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  width: 86%;
  height: 2.5rem;
  font-size: 1.13rem;
  line-height: 2.5rem;
  padding: 0 10% 0 4%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 8%,
    rgba(0, 0, 0, 0.4) 40%,
    rgba(0, 0, 0, 0.29) 47%,
    rgba(0, 0, 0, 0.65) 95%
  );
}
.wap-wrap {
  font-size: 1rem;
  padding: 0.69rem;
  background: #fff;
  border-bottom: 1px solid #f5f7f9;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.card-type {
  width: 14.75rem;
}
.wap-wrap .title {
  padding-right: 0.38rem;
  font-weight: normal;
  max-height: 2.81rem;
  line-height: 1.38rem;
  font-size: 1rem;
}
.detail {
  color: #b4b4b4;
  line-height: 1rem;
  height: 1rem;
  margin-top: 0.44rem;
  overflow: hidden;
}
.detail span {
  font-size: 0.75rem;
  margin-right: 0.38rem;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
}
.news-pic {
  width: 117px;
  height: 4.56rem;
}
.news-pic img {
  display: block;

  height: 100%;
  width: 100%;
}
</style>
