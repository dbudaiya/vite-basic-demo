<template>
  <div @click="change(title + '-emit测试')">hello-world 组件</div>
  <el-button v-bind="$attrs" @click="onElButtonClick('md我被点击了')">
    <slot></slot>
  </el-button>
  <ul>
    <!-- <li v-for="i in array" :key="i">
      {{ i }}
    </li> -->
    <li v-for="i in cpdArray" :key="i">
      {{ i }}
    </li>
  </ul>
  <son-cpn v-bind="$attrs" />
  {{ cpdTitle }}
</template>

<script>
import SonCpn from "./SonCpn.vue";
export default {
  name: "HelloWorld",
  components: {
    SonCpn,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    array: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    cpdTitle: function () {
      return this.title + "- 处理Props值[computed-get方法]";
    },
    cpdArray: {
      get: function () {
        return this.array;
      },
      set: function (nval) {
        const a = ["e", "n"];
        this.cpdArray.push(...a);
        console.log(nval);
      },
    },
  },
  created() {
    console.log(this, "created方法调用!!");
  },
  mounted() {
    const a = ["e", "n"];
    console.log("mounted方法调用!");
    //单项数据流
    // this.array = [...a]
    // this.array.push(...a);
  },
  methods: {
    getTitle: function () {
      return this.title;
    },
    change: function (e) {
      this.$emit("change-title", e);
    },
    onElButtonClick: function (e) {
      this.cpdArray = "lalla";
      this.$emit("el-button-click", e);
    },
  },
};
</script>

