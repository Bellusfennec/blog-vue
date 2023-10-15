<template>
  <div v-for="post in posts" :key="post.id" class="post">
    <div class="post__item">
      <header>
        <h1>
          {{ post.title }}
        </h1>
      </header>
      <body>
        {{ post.body }}
      </body>
      <footer></footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.post {
  display: inline-block;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
}
</style>
