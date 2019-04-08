Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks">{{ task.task }}</task>
        </div>
    `,
    data() {
        return {
            tasks: [
                {task: "Go to the store", complete: true},
                {task: "Go to the market", complete: false},
                {task: "Go to the mall", complete: true}
            ]
        }
    }
});

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