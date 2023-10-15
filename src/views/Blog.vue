<template>
  <div class="blog">
    <h1>Блог</h1>
    <PostForm @create="createPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";

export default {
  name: "Blog",
  components: {
    PostList,
    PostForm,
  },
  // data() {
  //   return {
  //     posts: [
  //       { id: 1, title: "Пост 1", body: "текст 1" },
  //       { id: 2, title: "Пост 2", body: "текст 2" },
  //     ],
  //   };
  // },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    // createPost(post) {
    //   this.posts.push(post);
    // },
  },
};
</script>

<style lang="scss" scoped>
.blog {
  background: none;
}
</style>
