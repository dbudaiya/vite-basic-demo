<template>
  <div>
    SonCpn组件 - attrs透传
  </div>
</template>

<script>
  export default {
    name:"SonCpn",
    mounted(){
      console.log('$attrs',this.$attrs)
    }
  }
</script>

<style lang="scss" scoped>

</style>
