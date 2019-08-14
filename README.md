### 迷你版本Vue

<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo"></a></p>

<p align="center">
  <!-- <a href="https://circleci.com/gh/vuejs/vue/tree/dev"><img src="https://img.shields.io/circleci/project/github/vuejs/vue/dev.svg" alt="Build Status"></a>
  <a href="https://codecov.io/github/vuejs/vue?branch=dev"><img src="https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg" alt="Coverage Status"></a>
  <a href="https://npmcharts.com/compare/vue?minimal=true"><img src="https://img.shields.io/npm/dm/vue.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/v/vue.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>
  <a href="https://chat.vuejs.org/"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Chat"></a>
  <br>
  <a href="https://app.saucelabs.com/builds/50f8372d79f743a3b25fb6ca4851ca4c"><img src="https://app.saucelabs.com/buildstatus/vuejs" alt="Build Status"></a> -->
</p>

如果有新的理解，我会及时更新的，期待大佬善意的批评指点，我必虚心请教

---

### 使用

```sh
# 下载
npm install 

# 编译打包
npm run build

# 预览
npm run serve

# 测试
npm run test 

# 生成测试报告
npm run test:c
```

---

**实现代码演示（未完）**

```html
<script>
    new Vue({
        el: '#app',
        data () {
            return {
                msg: '<h1>朱昆鹏111</h1>',
                age: 21
            }
        },
        methods: {
            clickTest () {
                alert(`msg是：${this.$data.msg}`)
            }
        }
    })
</script>
```

**实现效果演示**

[动图加载不出来，或者动图不动，可以点击此链接查看动图](https://itzkp-1253302184.cos.ap-beijing.myqcloud.com/github%E5%9B%BE%E7%89%87/miniVue/1.%E5%AE%9E%E7%8E%B0%E6%95%88%E6%9E%9C%E6%BC%94%E7%A4%BA.gif)


---

### 目录介绍

- dist 打包后实现的文件
    - vue.js 打包后的Vue文件
    - index.html 功能演示文件
- src 源文件
- test 测试文件（主要使用Jest进行测试）
- ...

---

### 实现列表（大部分计划本周完成）

- 模板解析（插值表达式 和 指令）✅
- 发布订阅者模式 ✅
- v-model 双向数据绑定（这块我感觉我实现的不好，我直接写到了 解析 v-model 指令 的函数中，期待指点这块） ✅
- vm.$data && vm.$methods 挂载到 vm 上
- Vue组件写法
    - 基础组件
    - 插槽
    - ...
- Vue生命周期
- ......

---

### Vue Flow版本 核心部分实现计划

---

### Vue Typescript版本 核心部分实现计划




