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
            <ul>
                {{-- <li v-for="skill in skills">@{{ skill }}</li> --}}
                <li v-for="skill in skills" v-text="skill"></li>
            </ul>
            <a href="/projects/create">Projects Management</a>
        </div>

        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="https://unpkg.com/vue@2.1.3/dist/vue.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>
