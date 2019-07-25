<template>
  <div>
    <titleList />
    <div class="playList">
      <ul>
        <li @click="change(myplay)" >
          <span>首页</span>
        </li>
        <li @click="change(tv) ">
          <span>电视</span>
        </li>
        <li @click="change(movie)" >
          <span>电影</span>
        </li>
        <li @click="change(star)">
          <span>明星</span>
        </li>
        <li @click="change(music)">
          <span>音乐</span>
        </li>
        <li @click="change(music) ">
          <span>影视歌</span>
        </li>
      </ul>
    </div>

    <component :is="componentName" keep-alive></component>
  </div>
</template>

<script>
import titleList from "../components/Title";
import movie from "../components/plays/movie";
import music from "../components/plays/music";
import myplay from "../components/plays/myplay";
import star from "../components/plays/star";
import tv from "../components/plays/tv";
export default {
  components: {
    titleList,
    movie,
    music,
    myplay,
    star,
    tv
  },
  data() {
      return {
        movie:"movie",
        music:"music",
        myplay:"myplay",
        star:"star",
        tv :"tv",

        componentName :"myplay"
      }
  },
  methods: {
    change(name) {
      this.componentName = name;
    },
  }
};
</script>
<style scoped>
.playList {
  height: 2.81rem;
  padding: 0 0.69rem;
  background: #f5f7f9;
  overflow-x: auto;
}
.playList > ul {
  height: 2.81rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: -0.78rem;
}
.playList > ul > li {
  height: 2.81rem;
  line-height: 2.81rem;
  position: relative;
  overflow: hidden;
  font-size: 1rem;
}

</style>
