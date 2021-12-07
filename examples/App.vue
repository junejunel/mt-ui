<template>
  <div id="app">
    <mt-button>好的</mt-button>
       
    <mt-switch v-model="active"></mt-switch>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      active: false,
    }
  }
}
</script>

<style lang="scss">

</style>
