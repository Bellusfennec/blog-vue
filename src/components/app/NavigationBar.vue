<template>
  <nav class="navigation">
    <div class="logo">
      <a href="/">Мой сайт</a></div>
    <div class="links">
      <router-link to="/">Главная</router-link>
      <router-link to="/login">Аккаунт</router-link>
      <router-link to="/blog">Блог</router-link>
      <router-link to="/about">О себе</router-link>
    </div>
  </nav>
  <div class="logo logo-full">
    Мой сайт
  </div>
</template>

<style lang="scss"> 
@import url('https://fonts.googleapis.com/css2?family=Neonderthaw&display=swap');
.logo-full {
  font-family: 'Neonderthaw', cursive;
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #ffc0d1;
}
.navigation {
  background: #fbfcfd;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 0px 0px 25px 0px rgba(178, 178, 178, 0.2);
  -moz-box-shadow: 0px 0px 25px 0px rgba(178, 178, 178, 0.2);
  box-shadow: 0px 0px 25px 0px rgba(178, 178, 178, 0.2);
  .logo a {
    font-family: 'Neonderthaw', cursive;
    font-size: 1.5rem;
    color: #00b6b0;
  }
  a {
    margin-right: 25px;
    color: #a6e9d7;
    transition: all 0.5s;
    &:hover {
      color: #00b6b0;
    }
    &.router-link-exact-active {
      color: #00b6b0;
    }
  }
}
</style>