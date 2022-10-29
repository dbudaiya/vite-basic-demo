<script setup lang="ts" name="Son">
import { Provide } from '../App.vue'
console.log('Son中的attrs', useAttrs())

const ev = inject<Provide>('ev')
</script>

<template>
  <h3>Son组件</h3>
  <h4>{{ ev?.count }}</h4>
  <el-button @click="ev?.ECount(5)">
    按钮
  </el-button>
</template>
