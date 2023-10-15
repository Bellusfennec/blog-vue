<template>
  <div class="wrapper">
    <div class="layout content">
      <NavigationBar />
      <router-view :posts="posts" />
    </div>
    <FooterMain />
  </div>
</template>

<script>
import NavigationBar from "@/components/app/NavigationBar.vue";
import FooterMain from "@/components/app/FooterMain.vue";

export default {
  name: "DefaultLayout",
  components: {
    NavigationBar, FooterMain,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  background: #f7f3f4;
}
.wrapper {
  display: table;
  height: 100%;
  width: 100%
}
.content {
  display: table-row;
  height: 100%;
}
</style>
