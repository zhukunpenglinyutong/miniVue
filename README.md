### 迷你版本Vue

如果有新的理解，我会及时更新的，期待大佬善意的批评指点，我必虚心请教

---

**实现代码演示（未完，大部分本周补全）**

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


<img src="https://itzkp-1253302184.cos.ap-beijing.myqcloud.com/github%E5%9B%BE%E7%89%87/miniVue/1.%E5%AE%9E%E7%8E%B0%E6%95%88%E6%9E%9C%E6%BC%94%E7%A4%BA.gif" />

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

### 测试部分

**测试框架选择：单元测试，代码覆盖率测试等，计划选择Jest（别管合不合适，我现在因为就会用这个qwq）**

**CI工具：这个找找吧，我现在只会Jenkins，这个不合适，我再找下**

---

### 使用（下面工程化均未实现，本周实现）

```js
npm install 

npm run build // 编译打包

npm run test // 测试

npm run dev // 启动一个示例

// ......
```

---

### Vue Flow版本 核心部分实现计划

---

### Vue Typescript版本 核心部分实现计划




