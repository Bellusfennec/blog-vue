<template>
  <h1>Создать пост</h1>
  <form @submit.prevent class="post-form">
    <input v-model="post.title" type="text" placeholder="Название" />
    <input v-model="post.body" type="text" placeholder="Описание" />
    <button @click="createPost">Отправить</button>
  </form>
</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  emits: ["create"],
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.post-form {
  width: 400px;
  border: 1px solid #ccc;
  padding: 10px;
  & input {
    margin-top: 10px;
  }
  & button {
    margin-top: 10px;
  }
}
</style>
