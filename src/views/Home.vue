<template>
  <div class="home"></div>
  <h1>Главная страница</h1>
  <PostList :posts="posts" />
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/PostList.vue";

export default {
  name: "Home",
  components: {
    PostList,
  },
  // props: {
  //   main: {
  //     type: string,
  //     required: true,
  //   },
  // },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
