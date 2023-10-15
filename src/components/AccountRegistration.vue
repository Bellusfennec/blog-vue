<template>
  <div class="accaunt-registration">
    <h1>Регистрация</h1>
    <form @submit.prevent>
      <input v-model="account.email" type="text" placeholder="Email" />
      <input v-model="account.password" type="text" placeholder="Пароль" />
      <button @click="createAccount">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AccountRegistration",
  data() {
    return {
      account: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    createAccount() {
      this.account.id = Date.now();
      this.$emit("create", this.account);
      this.account = {
        email: "",
        password: "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.accaunt-registration {
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
