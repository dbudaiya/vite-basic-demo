<template>
  <h2>about</h2>
  <SyElInput :value="inputRule.value" v-bind="inputRule.options">
    <!-- 具名插槽 -->
  </SyElInput>
  <!-- <router-view></router-view> -->
</template>

<script>
import SyElInput from '@/components/SyElInput.vue';
export default {
  name: "About",
  components:{
    SyElInput
  },
  data(){
    return{
      inputRule:{
        value:'lalal',
        // ke透传选项
        options:{}
      }
    }
  }
};
</script>

