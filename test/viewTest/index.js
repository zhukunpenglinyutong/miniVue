let vm = new Vue({
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