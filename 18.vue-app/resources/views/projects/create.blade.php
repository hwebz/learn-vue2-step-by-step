<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
    </head>
    <body>
        <div id="app" class="container">
            <example></example>
            @include ('projects.list')

            <form action="/projects" method="post" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
                <div class="control">
                    <label for="name" class="label">Project Name:</label>
                    <input type="text" id="name" name="name" class="input" v-model="form.name">
                    <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
                </div>
                <div class="control">
                    <label for="description" class="label">Project Description:</label>
                    <input type="text" id="description" name="description" class="input" v-model="form.description">
                    <span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
                </div>
                <div class="control">
                    <button class="button is-primary" type="submit" :disabled="form.errors.any()">Create</button>
                </div>
            </form>
        </div>

        {{-- <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="https://unpkg.com/vue@2.1.3/dist/vue.js"></script>
        <script src="/js/projects.js"></script> --}}

        {{-- <script src="/js/bundle.js"></script> --}}

        <script src="/js/vendor.js"></script>
        <script src="/js/app.js"></script>
    </body>
</html>
