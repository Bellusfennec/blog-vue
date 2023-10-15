<template>
  <div class="login">
    <h1>Логин</h1>
    <AccountRegistration @create="createAccount" />
  </div>
</template>

<script>
import AccountRegistration from "@/components/AccountRegistration.vue";

export default {
  name: "Login",
  components: {
    AccountRegistration, 
  },
  data() {
    return {
      accounts: [
        { id: 1, email: "mail@mail.ru", password: "123" },
        { id: 2, email: "gmail@gmail.com", password: "456" },
      ],
    };
  },
  methods: {
    createAccount(account) {
      console.log(account);
      this.accounts.push(account);
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  color: black;
}
</style>
