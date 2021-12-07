// 整个包的入口

// 统一导出
// 导出颜色选择器组件
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Checkbox from './checkbox'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import CheckboxGroup from './checkbox-group'
import Form from './form'
import FormItem from './form-item'
import './fonts/iconfont.css'
 
// 存储组件列表
const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem
]

// 定义install方法，接收Vue作为参数。如果使用use注册插件。则所有的组件都将被注册
const install = function (Vue) {
  // 遍历注册组件，再在main.js中注册该文件，使用Vue.use，即全局注册
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
// 判断是否是用script直接引入文件，如果是，就不用调用Vue.use()
// 是模块化开发才用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}