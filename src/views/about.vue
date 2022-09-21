<template>
  <div>
    <h2>about</h2>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
console.log("route", route);
</script>

<style lang="scss" scoped>
</style>
