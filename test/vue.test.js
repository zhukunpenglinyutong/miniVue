// 测试部分
import { Vue } from '../src/vue'


// 集成测试 部分
describe('🔥  Vue.js 集成功能测试', () => {

    let vm = null; // 暂存生成的vm实例，有的测试用例中需要用到

    // 每个测试用例都生成一个Vue的DOM结构
    beforeEach( () => {
        document.body.innerHTML =  `
        <div id="app">
            <p id="z-age">{{age}}</p>
            <p id="z-text" v-text='msg'></p>
            <p id="z-html" v-html='msg'></p>
            <input id="z-model" type="text" v-model="msg">
            <button id="z-on" v-on:click="clickTest">点击年龄+1</button>
        </div>
        `
        
        vm = new Vue({
            el: '#app',
            data () {
                return {
                    msg: '<h1>朱昆鹏111</h1>',
                    age: 21
                }
            },
            methods: {
                clickTest () {
                    this.$data.age += 1
                }
            }
        })
    })

    test('测试一：模板解析中 插值表达式{{}}是否正常解析', () => {
        let zAge = document.getElementById('z-age')
        expect(zAge.innerHTML).toBe('21')
    });

    test('测试二：模板解析v-text是否解析正常', () => {
        let zText = document.getElementById('z-text')
        expect(zText.innerHTML).toBe('&lt;h1&gt;朱昆鹏111&lt;/h1&gt;')
    })

    test('测试三：模板解析v-html是否解析正常', () => {
        let zHtml = document.getElementById('z-html')
        let len = zHtml.getElementsByTagName('h1').length
        expect(len).toBe(1)
    })

    test('测试四：双向数据绑定v-model是否正常', () => {
        let zText = document.getElementById('z-text')
        let zModel = document.getElementById('z-model')
        
        // 如何模拟input输入事件呢？ 暂时不会，但是可以设置 改变 name 的值，看看 input 是否也跟着改变
        vm.$data.msg = '朱昆鹏'
        expect(zModel.value).toBe('朱昆鹏')
        expect(zText.innerHTML).toBe('朱昆鹏')
    });

    test('测试五：模板解析中v-on指令是否正常解析', () => {
        let zOn = document.getElementById('z-on')
        let zAge = document.getElementById('z-age')
        
        zOn.click()
        expect(zAge.innerHTML).toBe('22')
        zOn.click()
        zOn.click()
        zOn.click()
        expect(zAge.innerHTML).toBe('25')
    });
    
})

describe('🔥  Vue.js 文件 单元测试', () => {

})