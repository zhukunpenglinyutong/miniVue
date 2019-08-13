import { Dep } from './watcher'

// 观察者：给 data 下所有的 数据添加上 getter 和 setter
export class Observe {
    constructor (data) {
        this.data = data
        this.walk(data)
    }

    // 核心方法
    // 遍历 data 中所有的数据，都添加上 getter 和 setter 方法
    walk (data) {

        if (typeof data !== 'object') return data;

        Object.keys(data).forEach( key => {

            this.defineReactive(data, key, data[key])

        })

    }
    // 数据劫持
    defineReactive (obj, key, value) {

        this.walk(value) // 递归，遍历多层

        let dep = new Dep()

        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,

            get () {
                Dep.target &&  dep.addSub(Dep.target)
                return value
            },

            set (newValue) {
                if (value === newValue) return;
                if (typeof newValue === 'object') this.walk(newValue); // 如果 newValue 是一个对象，也应该对其进行劫持
                value = newValue

                // 发布通知，让所有的订阅者更新
                dep.notify()
            }

        })
    }


}

// export default {
//     Observe: Observe
// }