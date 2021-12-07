<template>
  <div class="mt-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MtForm',
  props: {
    model: {
      type: Object,
      require: true,
    },
    labelWidth: {
      type: String,
      default: '80px',
    },
  },
  provide() {
    return {
      Form: this 
    }
  }
}
</script>

<style lang="scss" scoped>

</style>