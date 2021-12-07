<template>
  <div class="mt-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MtCheckboxGroup',
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  provide() {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
