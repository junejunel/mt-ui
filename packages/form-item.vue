<template>
  <div class="mt-form-item">
    <label :style="labelStyle" class="mt-form-item__label">{{label}}</label>
    <div class="mt-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MtFormItem',
  props: {
    label: String
  },
  inject: ['Form'],
  computed: {
    labelStyle() {
      return {
        width: this.Form.labelWidth
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.mt-form-item{
  margin-bottom: 25px;
  .mt-form-item__label{
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .mt-form-item__content{
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hide;
  }
}
</style>