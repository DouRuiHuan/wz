<template>
  <div>
    <sportList :list="list" />
  </div>
</template>
<script>
import sportList from "../list";
export default {
  data() {
    return {
      list: []
    };
  },
  components: {
    sportList
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios.get("/wy/plays").then(res => {
          console.log(res)
        this.list = res.data.plays.play;
        console.log(this.list);
      });
    }
  }
};
</script>
<style scoped>
</style>

