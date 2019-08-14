/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/vue.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/compile.js":
/*!************************!*\
  !*** ./src/compile.js ***!
  \************************/
/*! exports provided: Compile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Compile\", function() { return Compile; });\n/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watcher */ \"./src/watcher.js\");\n\n\n// 专门负责解析模板内容\n\nclass Compile {\n    /**\n     * @param {} 传递的选择器\n     * @param {} Vue实例\n     */\n    constructor (el, vm) {\n        // 如果用户直接给 el 赋值了一个 DOM 对象，这样也可以\n        this.el = typeof el === 'string' ? document.querySelector(el) : el\n        this.vm = vm\n\n        // 编译模板内容（把插值表达式，指令都替换）\n        if (this.el) {\n            \n            // 1.把el中所有的节点放到 fragment（文档碎片）\n            let fragment = this.node2fragment(this.el)\n\n            // 2.编译 fragment\n            this.compile(fragment)\n\n            // 3.把 fragment 的内容一次放到 DOM 中\n            this.el.appendChild(fragment)\n        }\n    }\n\n    /** 核心方法 */\n    \n    // 把我们的节点，转为 代码片段\n    node2fragment(el) {\n\n        let fragment = document.createDocumentFragment()\n\n        // 把el中所有的子节点 挨个添加到 文档碎片中\n        let childNodes = el.childNodes // 类数组\n        this.toArray(childNodes).forEach(item => {\n            fragment.appendChild(item) // 把el中所有的子节点 挨个添加到 文档碎片中\n        })\n        return fragment\n\n    }\n\n    /**\n     * 编译文档碎片\n     * @param {*} fragment \n     */\n    compile(fragment) {\n        let childNodes = fragment.childNodes // 拿到所有的子节点\n        this.toArray(childNodes).forEach(node => {\n            \n            // 如果是 元素（标签），需要解析指令\n            if (this.isElementNode(node)) {\n                this.compileElement(node) // 解析元素（标签）节点\n            }\n\n            // 如果是文本节点，需要解析 插值表达式\n            if (this.isTextNode(node)) {\n                this.compileText(node) // 解析文本节点\n            }\n\n            // 如果当前节点还有子节点的时候，需要递归的判断\n            if (node.childNodes && node.childNodes.length > 0) {\n                this.compile(node)\n            }\n\n        })\n    }\n\n    // 解析元素（标签）节点\n    compileElement (node) {\n        // 思路：所谓指令，就是 HTML 的一个 v 开头的特殊属性\n        // 1.获取当前节点下所有的属性\n        let attributes = node.attributes // 类数组\n        this.toArray(attributes).forEach(attr => {\n            \n            let attrName = attr.name\n\n            // 2.解析Vue的指令（ v- 开头的）\n            if (this.isDirective(attr.nodeName)) {\n                let type = attrName.slice(2)\n                let attrValue = attr.value\n\n                if (this.isEventDirective(type)) {\n                    // 解析 v-on 指令\n                    // 给当前元素注册事件\n                    let eventType = type.split(':')[1] // 事件类型\n                    node.addEventListener(eventType, this.vm.$methods[attrValue].bind(this.vm))    \n                } else {\n                    ComileUtil[type](node, this.vm, attrValue)\n                }\n            }\n\n        })\n    }\n\n    // 解析文本节点\n    compileText(node) {\n\n        let txt = node.textContent\n        let reg = /\\{\\{(.+)\\}\\}/\n        if (reg.test(txt)) {\n            let expr = RegExp.$1 // $1 拿到第一个分组\n            node.textContent = txt.replace(reg, this.vm.$data[expr])\n\n            new _watcher__WEBPACK_IMPORTED_MODULE_0__[\"watcher\"](this.vm, expr, (newValue, oldValue) => {\n                node.textContent = txt.replace(reg, newValue)\n            })\n        }\n\n    }\n\n\n\n    /** 工具方法 */\n    // 类数组 ---> 数组\n    toArray (likeArray) {\n        return [].slice.call(likeArray)\n    }\n    // 是否是元素节点 | 1：元素节点 | 3：文本节点\n    isElementNode (node) {\n        return node.nodeType === 1\n    }\n    isTextNode (node) {\n        return node.nodeType === 3\n    }\n    // 是否是指令\n    isDirective (attrName) {\n        return attrName.startsWith('v-') // ES6 字符串方法，是否以某个开头\n    }\n    // 是否是一个事件指令 ：v-on:click 这样的\n    isEventDirective (attrName) {\n        return attrName.split(':')[0] === 'on'\n    }\n}\n\nlet ComileUtil = {\n\n    // 处理 v-text 指令\n    text (node, vm, attrValue) {\n        node.textContent = vm.$data[attrValue]\n        new _watcher__WEBPACK_IMPORTED_MODULE_0__[\"watcher\"](vm, attrValue, (newValue, oldValue) => {\n            node.textContent = newValue\n        })\n    },\n\n    // 解析 v-html 指令\n    html (node, vm, attrValue) {\n        node.innerHTML = vm.$data[attrValue]\n        new _watcher__WEBPACK_IMPORTED_MODULE_0__[\"watcher\"](vm, attrValue, (newValue, oldValue) => {\n            node.innerHTML = newValue\n        })\n    },\n\n    // 解析 v-model 指令\n    model (node, vm, attrValue) {\n        node.value = vm.$data[attrValue]\n\n        // 注册事件\n        node.addEventListener('input', e => vm.$data[attrValue] = event.target.value)\n        \n        new _watcher__WEBPACK_IMPORTED_MODULE_0__[\"watcher\"](vm, attrValue, (newValue, oldValue) => {\n            node.value = newValue\n        })\n    }\n\n    // 注册 v-model 事件\n\n}\n\n// export default {\n//     Compile: Compile\n// }\n\n//# sourceURL=webpack:///./src/compile.js?");

/***/ }),

/***/ "./src/observe.js":
/*!************************!*\
  !*** ./src/observe.js ***!
  \************************/
/*! exports provided: Observe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observe\", function() { return Observe; });\n/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watcher */ \"./src/watcher.js\");\n\n\n// 观察者：给 data 下所有的 数据添加上 getter 和 setter\nclass Observe {\n    constructor (data) {\n        this.data = data\n        this.walk(data)\n    }\n\n    // 核心方法\n    // 遍历 data 中所有的数据，都添加上 getter 和 setter 方法\n    walk (data) {\n\n        if (typeof data !== 'object') return data;\n\n        Object.keys(data).forEach( key => {\n\n            this.defineReactive(data, key, data[key])\n\n        })\n\n    }\n    // 数据劫持\n    defineReactive (obj, key, value) {\n\n        this.walk(value) // 递归，遍历多层\n\n        let dep = new _watcher__WEBPACK_IMPORTED_MODULE_0__[\"Dep\"]()\n\n        Object.defineProperty(obj, key, {\n            enumerable: true,\n            configurable: true,\n\n            get () {\n                _watcher__WEBPACK_IMPORTED_MODULE_0__[\"Dep\"].target &&  dep.addSub(_watcher__WEBPACK_IMPORTED_MODULE_0__[\"Dep\"].target)\n                return value\n            },\n\n            set (newValue) {\n                if (value === newValue) return;\n                if (typeof newValue === 'object') this.walk(newValue); // 如果 newValue 是一个对象，也应该对其进行劫持\n                value = newValue\n\n                // 发布通知，让所有的订阅者更新\n                dep.notify()\n            }\n\n        })\n    }\n\n\n}\n\n// export default {\n//     Observe: Observe\n// }\n\n//# sourceURL=webpack:///./src/observe.js?");

/***/ }),

/***/ "./src/vue.js":
/*!********************!*\
  !*** ./src/vue.js ***!
  \********************/
/*! exports provided: Vue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Vue\", function() { return Vue; });\n/* harmony import */ var _observe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observe */ \"./src/observe.js\");\n/* harmony import */ var _compile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compile */ \"./src/compile.js\");\n\n\n\n// 定义一个类，用于创建Vue实例\nclass Vue {\n    constructor (options = {}) {\n        // 给Vue实例增加属性\n        this.$el = options.el\n        this.$data = options.data()\n        this.$methods = options.methods\n\n        // 监视 data 中的数据\n        new _observe__WEBPACK_IMPORTED_MODULE_0__[\"Observe\"](this.$data)\n\n        // 如果指定了 el 参数，我们就可以进行解析\n        if (this.$el) {\n            // 负责解析模板的内容（需要模板和整个Vue实例）\n            new _compile__WEBPACK_IMPORTED_MODULE_1__[\"Compile\"](this.$el, this)\n        }\n    }\n}\n\nwindow.Vue = Vue\n\n//# sourceURL=webpack:///./src/vue.js?");

/***/ }),

/***/ "./src/watcher.js":
/*!************************!*\
  !*** ./src/watcher.js ***!
  \************************/
/*! exports provided: watcher, Dep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"watcher\", function() { return watcher; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dep\", function() { return Dep; });\n// watcher 模板，负责把 compile模块 与 observe模块 关联起来\n// 主要作用就是，监听 某个对象是否发生变化，如果变换的话，就调用 回调函数\nclass watcher {\n    // vm当期实例 | data 数据名称 | cb 数据发生改变之后的回调\n    constructor (vm, expr, cb) {\n        this.vm = vm\n        this.expr = expr\n        this.cb = cb\n\n        Dep.target = this //\n\n        // 需要把 expr 的旧值给存储起来\n        this.oldValue = this.vm.$data[expr]\n\n        Dep.target = null;\n    }\n\n    // 对外暴露的一个方法，这个方法用于更新页面\n    update () {\n        \n        let oldValue = this.oldValue\n        let newValue = this.vm.$data[this.expr]\n        if (oldValue != newValue) {\n            this.cb(newValue, oldValue)\n        };\n    }\n}\n\n\n// 依赖收集（用于管理所有的订阅者 和 通知这些订阅者）\nclass Dep {\n    constructor () {\n        this.subs = []\n    }\n\n    // 添加订阅者\n    addSub (watcher) {\n        this.subs.push(watcher)\n    }\n\n    // 通知\n    notify () {\n        // 遍历所有的订阅者，调用 watcher 的 update 方法\n        this.subs.forEach(sub => sub.update())\n    }\n}\n\n//# sourceURL=webpack:///./src/watcher.js?");

/***/ })

/******/ });