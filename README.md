### 快速上手

```npm
npm i dream-vue-ui
```

导入main.js

```javascript
import Vue from 'vue';

import DreamUI from 'dream-vue-ui'

import 'dream-vue-ui/dist/dream-vue-ui.css'

import App from './App.vue';


Vue.use(DreamUI);


new Vue({

el: '#app',

render: h => h(App)

});
```

官方文档网站 ：后期上线

## dream-vue-ui 设计文档dr-card  卡片

- 参数：

  | 参数名称        | 说明                             | 默认值   | 可选值   | 类型    |
| --------------- | -------------------------------- | -------- | -------- | ------- |
  | header          | 通过指定slot的name,插入特定的DOM | ————     | ————     | string  |
  | show            | 设置阴影显示                     | true     | ————     | boolean |
  | borderColor     | 自定义背景边框颜色               | #fff     | rgb,rgba | string  |
  | backgroundColor | 设置card背景颜色                 | #fff     | ————     | string  |
  | entiretyColor   | 设置body部分字体颜色             | \#303133 | ————     | string  |
  

header参数:

| 参数名称    | 说明         | 默认值   | 可选值 | 类型    |
| ----------- | ------------ | -------- | ------ | ------- |
| titleCenter | 标题是否居中 | false    | ———    | boolean |
| titleColor  | 标题文本样式 | \#303133 | ———    | string  |

  代码：

  ```vue
  // titleColor参数用于控制header的标题颜色，titleCenter参数用于控制header的展示位置
  <dr-card  titleColor="#85c1e9" titleCenter="true"> 
      <div slot="header" >
         <dr-icon icon="shibai2"></dr-icon>
         标题
       </div>
      <div>
        主体内容
      </div>
    </dr-card>
  ```

  

- dr-button 按钮

  参数：

  | 参数名称 | 说明         | 默认值  | 可选值                                               | 类型    |
  | -------- | ------------ | ------- | ---------------------------------------------------- | ------- |
  | type     | 按钮样式     | default | default / primary  /success / info /warning / danger | string  |
  | size     | 按钮尺寸     | default | medium / small / mini                                | string  |
  | round    | 是否启用圆形 | false   | ————                                                 | boolean |
  | icon     | 按钮图标     | null    | ————                                                 | string  |

  代码：

  ```vue
  <dr-button type="primary" size="small">按钮</dr-button>
  ```

  

- dr-icon icon图标

  参数：

  | 参数名称 | 说明           | 默认值 | 可选值 | 类型   |
  | -------- | -------------- | ------ | ------ | ------ |
  | icon     | icon图标的名称 | ————   | ————   | string |

  代码例子：

  ```vue
  <dr-icon icon="jiandu"></dr-icon>
  ```



- dr-link 文字链接

  参数：

  | 参数名称  | 说明           | 默认值  | 可选值                                      | 类型    |
  | --------- | -------------- | ------- | ------------------------------------------- | ------- |
  | type      | 类型           | default | primary / success / warning / danger / info | string  |
  | disabled  | 是否禁用状态   | false   | ————————                                    | boolean |
  | icon      | 图标名称       | ————    | ————————                                    | string  |
  | underline | 是否禁止下划线 | false   | ————————                                    | boolean |
  | href      | 原生 href 属性 | ————    | ————————                                    | string  |

  代码：

  ```vue
  <dr-link type="success" icon="jiandu">文字链接</dr-link>
  ```



- dr-dialog提示框

  参数：

  | 参数名称        | 说明           | 默认值       | 可选值                                | 类型    |
  | --------------- | -------------- | ------------ | ------------------------------------- | ------- |
  | title           | 提示框头部标题 | "提示"       | ——————                                | string  |
  | backgroundColor | 提示框背景颜色 | #fff         | ——————                                | string  |
  | borderColor     | 提示框边框颜色 | #dddfe6      | ——————                                | string  |
  | enterAnimation  | 入场动画       | bounceInDown | bounce  /  fadeInDown / bounceInUp    | string  |
  | leaveAnimation  | 出场动画       | bounceOut    | bounceOutDown /  fadeOut /  fadeOutUp | string  |
  | titleIcon       | 标题icon图标   | null         | ——————                                | string  |
  | titleCenter     | 标题是否居中   | false        | false / true                          | boolean |
  | show.sync       | 是否显示提示框 | false        | false / true                          | boolean |

  代码：

  ```vue
  <dr-dialog :show.sync="show" enterAnimation="fadeInDown" leaveAnimation="fadeOutUp" >
        文本
      </dr-dialog>
  ```

  