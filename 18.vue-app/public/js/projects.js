class Errors {
    constructor() {
        this.errors = {};
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    record(errors) {
        this.errors = errors;
    }

    clear(field) {
        if (field) {
            delete this.errors[field];
        } else {
            this.errors = {};
        }
    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }
}

class Form {
    constructor(data) {
        this.originalData = data;

        for(let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();
    }

    data() {
        let data = {}

        for(let property in this.originalData) {
            data[property] = this[property];
        }

        // let data = Object.assign({}, this);
        // delete data.originalData;
        // delete data.errors;

        return data;
    }

    reset() {
        for(let field in this.originalData) {
            this[field] = '';
        }

        this.errors.clear();
    }

    get(url) {

    }

    post(url) {

    }

    delete(url) {

    }

    submit(requestType, url) {
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
            // .then(this.onSuccess.bind(this))
            // .catch(this.onFail.bind(this));
            .then(response => {
                this.onSuccess(response);

                resolve(response.data);
            })
            .catch(error => {
                this.onFail(error);

                reject(error.response);
            });
        });
    }

    onSuccess(response) {
        alert(response.data.message);

        this.reset();
    }

    onFail(error) {
        this.errors.record(error.response.data.errors);
    }
}

new Vue({
    el: '#app',
    data: {
        form: new Form({
            name: '',
            description: ''
        })
    },
    methods: {
        onSubmit() {
            this.form.submit('post', '/projects')
            .then(data => console.log(data))
            .catch(error => console.log(error));
        }
    }
});
