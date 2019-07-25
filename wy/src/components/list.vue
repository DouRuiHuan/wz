<template>
  <div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="3"
    >
      <li v-for="item in list" class="wap-wrap">
        <div class="card-type">
          <h3 class="title">{{item.title}}</h3>
          <div class="detail">
            <span class="pubtime">{{item.ptime | time}}</span>
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
  props: ['list'],
  watch:{
      list(val){
          this.list = val;
        //   console.log(val)
      }
  },
  methods: {
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
