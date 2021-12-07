<template>
  <!-- 选中样式：当前label值和父组件传过来的value值相等时，加了radio-group后要改成model，因为model中包含两种情况-->
  <label class="mt-radio" :class="{'is-checked': label === model}">
    <span class="mt-radio__input">
      <span class="mt-radio__inner"></span>
      <!-- 原始的radio 在页面上将其隐藏 -->
      <!-- 注：想要操作多个input，让多个input是一组，但不能直接v-model="value"，因为value是父组件的属性 -->
      <input
        type="radio"
        class="mt-radio__original"
        :value="label"
        :name="name"
        v-model="model"
      />
    </span>
    <span class="mt-radio__label">
      <slot></slot>
      <!-- radio中不传内容时 就将label当做内容 -->
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'MtRadio',
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    // 父组件使用v-model传过来的值
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  inject: {
    RadioGroup: {
      // 如果 radio不是包在radio-group里的，那就默认为空
      default: ''
    }
  },
  // 要能绑定组件自己的数据，但又不是组件写死的，
  // model取决于父组件传过来的值，又能修改这个值
  // 因此需要提供一个计算属性model
  // 用双向绑定一个计算属性，必须提供get和set
  computed: {
    model: {
      get() {
        // 当radio不被radioGroup包裹时，获取的是this.value
        // 当radio被radioGroup包裹时，获取的是this.RadioGroup.value
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set(value){
        // 触发父组件给当前组件注册的input事件
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      // 用于判断radio是否被radioGroup所包裹,!!:改成布尔值
      return !!this.RadioGroup
    }
  },
}
</script>

<style lang="scss" scoped>
.mt-radio{
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  .mt-radio__input{
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .mt-radio__inner{
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after{
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .mt-radio__original{
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .mt-radio__label{
    font-size: 14px;
    padding-left: 10px;;
  }
}
  // 选中的样式
.mt-radio.is-checked{
  .mt-radio__input{
    .mt-radio__inner{
      border-color: #409eff;
      background-color: #409eff;
      &:after{
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .mt-radio__label{
    color:#409eff;
  }
}

</style>