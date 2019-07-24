// watcher 模板，负责把 compile模块 与 observe模块 关联起来
// 主要作用就是，监听 某个对象是否发生变化，如果变换的话，就调用 回调函数
class watcher {
    // vm当期实例 | data 数据名称 | cb 数据发生改变之后的回调
    constructor (vm, expr, cb) {
        this.vm = vm
        this.expr = expr
        this.cb = cb

        // 需要把 expr 的旧值给存储起来
        this.oldValue = this.vm.$data[expr]
    }

    // 对外暴露的一个方法，这个方法用于更新页面
    update () {
        let oldValue = this.oldValue
        let newValue = this.vm.$data[this.expr]
        if (oldValue != newValue) this.cb(newValue, oldValue);
    }
}

