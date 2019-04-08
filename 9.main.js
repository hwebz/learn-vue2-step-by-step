
// window.Event = new Vue();

window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }
}

Vue.component('coupon', {
    template: `
        <input placeholder="Enter your coupon code" @blur="onCouponApplied" v-model="coupon">
    `,
    data() {
        return {
            coupon: null
        }
    },
    methods: {
        onCouponApplied() {
            this.$emit('applied', this.coupon);
            // Event.$emit('globalApplied');
            Event.fire('globalApplied');
        }
    }
});

Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li :class="{'is-active': tab.isActive}" v-for="tab in tabs">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,
    data() {
        return {
            tabs: []
        }
    },
    mounted() {
        console.log(this.$children);
    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (selectedTab.name == tab.name);
            });
        }
    }
});

Vue.component('tab', {
    props: {
        name: { required: true },
        selected: { default: false }
    },
    template: `
        <div v-show="isActive">
            <slot></slot>
        </div>    
    `,
    data() {
        return {
            isActive: false
        }
    },
    mounted() {
        this.isActive = this.selected;
    },
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    }
});

Vue.component('modal', {
    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <slot></slot>
                </div>
            </div>
            <button class="modal-close" @click="hideModal"></button>
        </div>
    `,
    methods: {
        hideModal() {
            this.$emit('close');
        }
    }
})

Vue.component('message', {
    props: ['title', 'body'],
    data() {
        return {
            isVisible: true
        }
    },
    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
                {{ title }}

                <button type="button" @click="hideModal">x</button>
            </div>

            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `,
    methods: {
        hideModal() {
            this.isVisible = !this.isVisible;
        }
    }
});

new Vue({
    el: '#root',
    data: {
        showModal: false,
        couponApplied: false,
        couponCode: null
    },
    methods: {
        onCouponApplied(couponCode) {
            this.couponApplied = true;
            this.couponCode = couponCode;
        }
    },
    created() {
        // Event.$on('globalApplied', () => {
        //     alert('global event emitter dispatched!');
        // });
        Event.listen('globalApplied', () => {
            alert('global event emitter dispatched!');
        });
    }
});