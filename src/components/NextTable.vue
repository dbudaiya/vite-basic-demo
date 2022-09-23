<template>
  <el-table v-bind="$attrs">
    <el-table-column
      v-for="i in columnOptions"
      :prop="i.prop"
      :label="i.lable"
      v-bind="i.option"
      :key="i.prop"
    />
  </el-table>
  <slot name="other"></slot>
</template>

<script>
export default {
  name: "NextTable",
  // 透传属性...
  props: {
    columnOptions: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
