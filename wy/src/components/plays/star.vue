<template>
  <div>
    <playList :list='list' />
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
        this.list = res.data.all.star;
        console.log(this.list);
      });
    }
  }
};
</script>
<style scoped>
</style>

