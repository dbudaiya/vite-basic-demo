<template>
  <h3>{{ counter }}</h3>
  <h4>{{ double }}</h4>
  <el-button @click="incerment">
    按钮
  </el-button>
  <el-button @click="resetState">
    重置
  </el-button>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from './store/modules/counter'
const store = useCounterStore()
const { counter, double } = storeToRefs(store)
const { incerment } = store

// 补丁对象
const chenState = () => {
  // store.$patch()
}
const resetState = () => {
  store.$reset()
}
</script>
