<template>
  <div>
    <h1>computed</h1>
    <button @click="onChangeName">更改Name</button>
    <p>{{ fullName }}</p>
    <hello-world
      v-bind="bindData"
      ref="HWRef"
      title="HelloWorld组件"
      :array="baseArray"
      @changeTitle="onChangeTitle"
      @elButtonClick="onElButtonClick"
    >
      饿了么按钮二次封装
    </hello-world>
  </div>
</template>


<script>
import HelloWorld from "../components/HelloWorld.vue";
export default {
  data() {
    return {
      lastName: "du",
      firstName: "shenyan",
      bindData: {
        size: "small",
      },
      baseArray: ["d", "u", "s", "h"],
    };
  },
  mounted() {
    console.log("this", this);
    console.log(this.$refs.HWRef.getTitle());
  },
  components: {
    HelloWorld,
  },
  computed: {
    fullName: function () {
      return this.lastName + this.firstName;
    },
  },
  methods: {
    onChangeName: function () {
      this.lastName += "~";
    },
    onChangeTitle: function (e) {
      console.log(e);
    },
    onElButtonClick: function (e) {
      console.log(e);
    },
  },
  watch: {
    lastName: {
      handler(n, o) {
        console.log(n, o);
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
