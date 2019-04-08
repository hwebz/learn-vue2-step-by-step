import Vue from 'vue/dist/vue.js';
import test from 'ava';
import Notification from '../src/Notification';

var vm;

test.beforeEach(t => {
    let N = Vue.extend(Notification);

    vm = new N({
        propsData: {
            msg: 'Foobar'
        }
    }).$mount();
});

test('that it renders a notification', t => {
    // t.is(Notification.data().message, 'Hello World');

    // let n = new Vue(Notification).$mount();
    
    // console.log(n.$el.textContent.innerHTML);
    // t.is(n.$el.textContent, 'foobar');

    t.is(vm.$el.textContent, 'FOOBAR');
    
});

test('that it computes the notification', t => {
    t.is(vm.notification, 'FOOBAR');
})