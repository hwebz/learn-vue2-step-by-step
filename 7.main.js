Vue.component('task', {
    template: '<li>{{message}}<slot></slot></li>',
    data() {
        return {
            message: 'Foobar'
        };
    }
});

new Vue({
    el: '#root'
})