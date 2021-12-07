<template>
  <div class="mt-switch" @click="handleClick" :class="{'is-checked': value}">
    <!-- 由于switch一般是放表单中用的，有可能用户需要传个name，因此这里要放一个input接收name，并不让他显示出来-->
    <input class="mt-switch__input"
      type="checkbox"
      :name="name"
      ref="checkbox"
    />
    <span class="mt-switch__core" ref="core">
      <span class="mt-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'MtSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted() {
    // 一进来就要修改开关的颜色
    this.setColor()
    // 同步CheckBox的值
    this.$refs.checkbox.checked = this.value
  },
  methods: {
    // 点击时 将input事件传给父组件 点击取反
    async handleClick() {
      this.$emit('input', !this.value)
      // 点击时也需要修改开关颜色
      // 注：要等待value发生了改变，再setColor，不然color值是反的
      // 数据修改后，等待dom更新后，再修改按钮的颜色
      await this.$nextTick()
      this.setColor()
      // 同步CheckBox的值
      this.$refs.checkbox.checked = this.value
    },
    setColor() {
      if (this.activeColor || this.inactiveColor) {
        // 如果传进来的value是true，则说明开关是开的状态，则设置activeColor，否则设置inactiveColor
        let color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.mt-switch{
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .mt-switch__input{
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .mt-switch__core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .mt-switch__button{
      position:absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
      }
    }
  }
// 选中样式
.is-checked {
  .mt-switch__core{
    border-color: #409eff;
    background-color: #409eff;
    .mt-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>