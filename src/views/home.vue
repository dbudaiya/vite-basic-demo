<script setup lang="ts" name="Home">
import PiniaLogo from '../components/PiniaLogo.vue'
import GithubLogo from '../components/GithubLogo.vue'
import Son from './Son.vue'
nextTick(() => {
  console.log('1', 1)
})
console.log('2', 2)
</script>

<template>
  <h3>Home组件</h3>
  <Son />
  <PiniaLogo />
  <GithubLogo />
</template>
