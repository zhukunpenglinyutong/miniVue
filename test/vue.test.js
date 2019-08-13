// 测试部分
import { Vue } from '../src/vue'

// 集成测试 部分
describe('🔥  Vue.js 集成功能测试', () => {
    
    test('测试一：模板解析 中 插值表达式是否正常解析', () => {

        document.body.innerHTML =  `<div id="app">{{name}}</div>`
    
        new Vue({
            el: '#app',
            data () {
                return {
                    name: '朱昆鹏'
                }
            }
        })
    
        let app = document.getElementById('app')

        expect(app.innerHTML).toBe('朱昆鹏')
    });

    test('测试二：模板解析中 v-on 指令是否正常解析', () => {

        document.body.innerHTML =  `<div id="app">
            <p id="app-age">{{age}}<p>
            <button id="app-button" v-on:click="clickTest">按钮</button>
        </div>`
    
        new Vue({
            el: '#app',
            data () {
                return {
                    age: 21
                }
            },
            methods: {
                clickTest () {
                    this.$data.age += 1
                }
            }
        })
    
        let appButton = document.getElementById('app-button')
        let appAge = document.getElementById('app-age')
        
        appButton.click()
        expect(appAge.innerHTML).toBe('22')
        appButton.click()
        appButton.click()
        appButton.click()
        expect(appAge.innerHTML).toBe('25')

    });

})

describe('🔥  Vue.js 文件 单元测试', () => {

})