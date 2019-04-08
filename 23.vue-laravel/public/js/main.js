let store = {
    user: {
        name: 'John Doe'
    }
}

new Vue({
    el: '#one',
    data: {
        foo: 'bar',
        shared: store
    }
});


new Vue({
    el: '#two',
    data: {
        foo: 'other',
        shared: store
    }
});

Vue.component('coupon', {
    props: ['code'],
    template: `
        <input type="text" :value="code" ref="input" @input="updateCode($event.target.value)" />
    `,
    data() {
        return {
            invalids: ['ALLFREE', '50PERCENT', 'VN']
        }
    },
    methods: {
        updateCode(code) {
            if (this.invalids.includes(code)) {
                alert('This coupon is no longer valid. Sorry!');

                this.$refs.input.value = '';

                return;
            }
            this.$emit('input', code);
        }
    }
})

new Vue({
    el: '#app',
    data: {
        coupon: 'FREEBIE'
    }
})
