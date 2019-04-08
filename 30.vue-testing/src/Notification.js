export default {
    template: `<div><h1>{{ msg | capitalize }}</h1></div>`,
    props: ['msg'],
    data() {
        return {
            message: 'Hello World'
        }
    },
    filters: {
        capitalize(message) {
            return message.toUpperCase();
        }
    },
    computed: {
        notification() {
            return this.msg.toUpperCase();
        }
    }
};