<template>
  <div>
    <h1>Cpn组件</h1>
    <component :is="cpn" ref="cpn" v-bind="bindData">
      <el-icon :size="size" :color="color">
        <Edit />
      </el-icon>
    </component>
    <el-button type="info" :icon="Message1" circle />
  </div>
</template>

<script>
import { ElButton } from "element-plus";
import HW from "../components/HelloWorld.vue";

import { Edit, Message } from "@element-plus/icons-vue";
export default {
  name: "isComponents",
  components: {
    HW,
    ElButton,
    Edit,
  },
  data() {
    return {
      cpn: "el-button",
      bindData: {
        circle: true,
      },
      Message1: Message
    };
  },
  mounted() {
    console.log("cpn", this);
  },
};
</script>

<style lang="scss" scoped>
</style>
