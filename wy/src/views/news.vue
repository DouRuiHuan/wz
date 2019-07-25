<template>
  <div>
    <titleList />
    <div class="newList">
      <ul >
        <li @click="change(mynews)">
          <span>首页</span>
        </li>
        <li @click="change(homenews)">
          <span>国内</span>
        </li>
        <li @click="change(internews)">
          <span>国际</span>
        </li>
        <li @click="change(historynews)">
          <span>历史</span>
        </li>
      </ul>
    </div>

    <component :is="componentName" keep-alive></component>
  </div>
</template>
<script>
import titleList from "../components/Title";
import mynews from "../components/news/myNews";
import homenews from "../components/news/homeNews";
import internews from "../components/news/interNews";
import historynews from "../components/news/historyNews";
export default {
  components: {
    titleList,
    mynews,
    homenews,
    internews,
    historynews
  },
  data() {
    return {
      mynews: "mynews",
      homenews: "homenews",
      internews: "internews",
      historynews: "historynews",

      componentName: "mynews",
      isActived:false
    };
  },
  methods: {
    change(name) {
      this.componentName = name;
    },
  }
};
</script>
<style scoped>
.newList {
  height: 2.81rem;
  padding: 0 0.69rem;
  background: #f5f7f9;
  overflow-x: auto;
}
.newList > ul {
  height: 2.81rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: -0.78rem;
}
.newList > ul > li {
  height: 2.81rem;
  line-height: 2.81rem;
  position: relative;
  overflow: hidden;
  font-size: 1rem;
}

</style>
