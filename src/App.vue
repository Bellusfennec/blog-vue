<template>
  <component :is="layout" :posts="posts">
    <router-view />
  </component>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";

export default {
  components: {
    DefaultLayout,
    AuthLayout,
    DashboardLayout,
  },
  // data() {
  //   return {
  //     main: {
  //       siteName: "moy site",
  //     },
  //   };
  // },
  data() {
    return {
      posts: [
        { id: 1, title: "Пост 1", body: "текст 1" },
        { id: 2, title: "Пост 2", body: "текст 2" },
      ],
      mainSetings: [
        { id: 1, title: "Пост 1", body: "текст 1" },
        { id: 2, title: "Пост 2", body: "текст 2" },
      ],
    };
  },
  computed: {
    layout() {
      return this.$route.meta.layout || "DefaultLayout";
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
}
#app {
  height: 100%;
}
a {
  text-decoration: none;
  &:hover {
  }
}
input,
button {
  font-size: inherit;
  font-family: inherit;
  padding: 5px 10px;
  display: block;
}
input {
  width: 100%;
}
button {
  cursor: pointer;
}
h1 {
  margin: 30px 0;
}
</style>
