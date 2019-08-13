// watcher 模板，负责把 compile模块 与 observe模块 关联起来
// 主要作用就是，监听 某个对象是否发生变化，如果变换的话，就调用 回调函数
export class watcher {
    // vm当期实例 | data 数据名称 | cb 数据发生改变之后的回调
    constructor (vm, expr, cb) {
        this.vm = vm
        this.expr = expr
        this.cb = cb

        Dep.target = this //

        // 需要把 expr 的旧值给存储起来
        this.oldValue = this.vm.$data[expr]

        Dep.target = null;
    }

    // 对外暴露的一个方法，这个方法用于更新页面
    update () {
        
        let oldValue = this.oldValue
        let newValue = this.vm.$data[this.expr]
        if (oldValue != newValue) {
            this.cb(newValue, oldValue)
        };
    }
}


// 依赖收集（用于管理所有的订阅者 和 通知这些订阅者）
export class Dep {
    constructor () {
        this.subs = []
    }

    // 添加订阅者
    addSub (watcher) {
        this.subs.push(watcher)
    }

    // 通知
    notify () {
        // 遍历所有的订阅者，调用 watcher 的 update 方法
        this.subs.forEach(sub => sub.update())
    }
}