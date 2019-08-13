import { Observe } from './observe'
import { Compile } from './compile'

// 定义一个类，用于创建Vue实例
export class Vue {
    constructor (options = {}) {
        // 给Vue实例增加属性
        this.$el = options.el
        this.$data = options.data()
        this.$methods = options.methods

        // 监视 data 中的数据
        new Observe(this.$data)

        // 如果指定了 el 参数，我们就可以进行解析
        if (this.$el) {
            // 负责解析模板的内容（需要模板和整个Vue实例）
            new Compile(this.$el, this)
        }
    }
}

window.Vue = Vue