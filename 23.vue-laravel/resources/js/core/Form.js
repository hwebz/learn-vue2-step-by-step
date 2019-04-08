import Errors from './Errors';

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

    put(url) {
        return this.submit('put', url);
    }

    patch(url) {
        return this.submit('patch', url);
    }

    get(url) {
        return this.submit('get', url);
    }

    post(url) {
        return this.submit('post', url);
    }

    delete(url) {
        return this.submit('delete', url);
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
        // alert(response.data.message);

        this.reset();
    }

    onFail(error) {
        this.errors.record(error.response.data.errors);
    }
}

export default Form;
