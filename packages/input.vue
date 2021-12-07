<template>
  <div class="mt-input" :class="{'mt-input__suffix': showSuffix}">
    <!-- 子组件中驼峰命名，父组件中用-：showPassword -->
    <!-- 显示密码 即：将输入框类型切换为text 此处要在子组件中自己定义一个属性控制文本是否显示，不能写死为type -->
    <!-- 如果传了show-password,判断是否需要切换 密码的显示 如果不传就不判断 -->
    <input
      :class="['mt-input__inner', {'is-disabled': disabled}]"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput">
      <span class="mt-input__suffix" v-if="showSuffix">
        <i class="mt-input__icon mt-icon-shanchu" v-if="clearable && value" @click="clear"></i>
        <!-- 小眼睛图标 显示密码时高亮 -->
        <i
          class="mt-input__icon mt-icon-yanjing"
          :class="{'mt-icon-yanjing-active': passwordVisible}"
          v-if="showPassword && type ==='password'"
          @click="handlePassword"
        >
        </i>
      </span>
  </div>
</template>

<script>
export default {
  name: 'MtInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 用于控制是否显示密码框
      passwordVisible: false
    }
  },
  computed: {
    // 只要这两个中传了一个 就显示小图标
    showSuffix() {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput(e) {
      // 处理input事件，传给父组件接收，父组件使用了v-model，相当于
      this.$emit('input',e.target.value)
    },
    clear() {
      // 把内容清空
      this.$emit('input','')
    },
    handlePassword() {
      // 点击小眼睛显示密码
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.mt-input{
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .mt-input__inner{
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,045,.355,1);
    width: 100%;

    &:focus{
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled{
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor:not-allowed;
    }
  }
}
.mt-input__suffix{
  .mt-input__inner{
    padding-right: 30px;
  }
  .mt-input__suffix{
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i{
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
    .mt-icon-yanjing-active{
      color: blue;
    }
  }
}

</style>