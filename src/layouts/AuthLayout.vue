<template>
  <div class="layout">
    <NavigationBar />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from "@/components/app/NavigationBar.vue";

export default {
  name: "AuthLayout",
  components: {
    NavigationBar,
  }
};
</script>

<style lang="scss" scoped>
.layout {
  background: #c0cccc;
}
</style>