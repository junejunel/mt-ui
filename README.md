# mt-ui
## 说明
本项目仅作为vue组件封装的练习参考

## 使用

1. 安装
```javascript
npm i mymt-ui / yarn add mymt-ui
```
2. 全局注册
```javascript
import MtUI from 'mymt-ui'
Vue.use(MtUI)
```
3. 导入样式
```javascript
import 'mymt-ui/dist/mt-ui.css'
```
-----------------

## 组件

### 按钮(Button)

#### 参数支持

| 参数名 | 参数描述 | 参数类型 | 默认值 |
| ------| ------ | ------ | ------ |
| type | 按钮类型(primary / success / warning / danger / info) | string | default |
| plain | 是否是朴素按钮 | boolean | false |
| round | 是否是圆角按钮 | boolean | false |
| circle | 是否是圆形按钮 | boolean | false |
| disabled | 是否禁用按钮 | boolean | false |
| icon | 图标类名 | string | 无 |

#### 事件支持

| 事件 | 值 | 描述 |
| ------| ------ | ------ |
| click | Function | 点击事件 |

-----------------

### 对话框(Dialog)

#### 参数支持

| 参数名 | 参数描述 | 参数类型 | 默认值|
| ------| ------ | ------ | ------ |
| title | 对话框标题 | string | 提示
| width | 宽度 | string | 50%|
| top | 与顶部的距离 | string | 15vh | 
| visible | 是否显示dialog（支持sync修饰符） | boolean | false|

#### 事件支持

| 事件名 | 事件描述 |
| ------| ------ | 
| opened | 模态框显示的事件 |
| closed | 模态框关闭的事件 |

#### 插槽说明

| 插槽名称 | 插槽描述 | 
| ------| ------ |
| default | dialog的内容 | 
| title | dialog的标题 | 
| footer | dialog的底部操作区 | 

-----------------

### 输入框(Input)

#### 参数支持

| 参数名称 | 参数描述 | 参数类型 | 默认值 | 
| ------| ------ | ------ |------ |
| placeholder | 占位符 | string | 无 | 
| type | 文本框类型(text/password) | string | text | 
| disabled | 禁用 | boolean | false | 
| clearable | 是否显示清空按钮 | boolean | false | 
| show-password | 是否显示密码切换按钮 | boolean | false | 
| name | name属性 | string | 无 | 

#### 事件支持

| 事件名称 | 事件描述 | 
| ------| ------ |
| blur | 失去焦点事件 | 
| change | 内容改变事件 |
| focus | 获取的焦点事件 | 

-----------------

### 切换(Switch)

#### 参数支持

| 参数名称 | 参数描述 | 参数类型 | 默认值 | 
| ------| ------ | ------ |------ |
| v-model | 双向绑定 | 布尔类型 | false | 
| name| name属性 | string | text | 
| activeColor | 自定义的激活的颜色 | string | #409EFF
| inactiveColor | 自定义的不激活的颜色 | string | #DCDFE6|

#### 事件支持

| 事件名称 | 事件描述 | 
| ------| ------ |
| change | change时触发的事件 | 

-----------------

### 单选框(Radio)

#### 参数支持

| 参数名称 | 参数描述 | 参数类型 | 默认值 | 
| ------| ------ | ------ |------ |
| v-model | 双向绑定 | 布尔类型 | false | 
| label | 单选框的value值 | [string，num，boolean] | ''| 
| name | name属性 | string | 空 | 

-----------------

### 单选框组(RadioGroup)

使用radio组件的缺点，需要给每个组件都绑定v-model,可以使用radio-group包裹，
通过 v-model 指定组内所有 radio 的 v-model

-----------------

### 复选框(Checkbox)

#### 参数支持

| 参数名称 | 参数描述 | 参数类型 | 默认值 | 
| ------| ------ | ------ |------ |
| label	| 单选框label值 | [String, Number, Boolean] | '' | 
| name | 表单命名 | String | 空 | 
| value| 表单值 | String | '' | 

-----------------

### 复选框组(CheckboxGroup)

用于包裹多个 checkbox，通过 v-model 指定组内所有checkout 的 v-model

-----------------

### 表单项(Form-item)

#### 参数支持

| 参数名称 | 参数描述 | 参数类型 | 默认值 | 
| ------| ------ | ------ |------ |
|label |单选框 label值 | String | '' |

-----------------

### 表单(Form)

#### 参数支持

| 参数名称 | 参数描述 | 参数类型 | 默认值 | 
| ------| ------ | ------ |------ |
| model	| 表单对象 | Object	| 必填 |
| label-width | 标签宽度| String | 80px |

-----------------
