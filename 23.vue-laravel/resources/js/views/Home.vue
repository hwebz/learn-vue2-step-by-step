<template>
    <div class="columns">
        <div class="column">
            <div class="message" v-for="(status, index) in statuses" :key="index">
                <div class="message-header">
                    <p>{{status.user.name}} said...</p>

                    <p>
                        <!-- {{postedOn(status)}} -->
                        {{ status.created_at | ago | capitalize}}
                    </p>
                </div>
                <div class="message-body">
                    {{status.body}}
                </div>
            </div>

            <!-- add to stream form -->
            <add-to-stream @completed="addToStream"></add-to-stream>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import Status from '../models/Status';
    import AddToStream from '../components/AddToStream.vue';

    export default {
        components: { AddToStream },
        data() {
            return {
                statuses: []
            }
        },
        filters: {
            ago(date) {
                return moment.utc(date).fromNow();
            },
            capitalize(value) {
                return value.toUpperCase().toLowerCase();
            }
        },
        created() {
            // axios.get('/statuses')
            // Status.all()
            // .then(({data}) => this.statuses = data);
            Status.all(statuses => this.statuses = statuses);
        },
        methods: {
            postedOn(status) {
                return moment.utc(status.created_at).fromNow();
            },
            addToStream(status) {
                this.statuses.unshift(status);
                alert('Your status has been added to the stream.');

                window.scrollTop(0, 0);
            }
        }
    }
</script>
