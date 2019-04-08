<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

    </head>
    <body>
        <div id="one">
            <h1>
                @{{ shared.user.name }}
            </h1>
        </div>

        <div id="two">
            <h1>
                @{{ shared.user.name }}
            </h1>
        </div>

        <div id="app">
            {{-- <input type="text" v-model="coupon"> --}}
            {{-- <input type="text" :value="coupon" @input="coupon = $event.target.value"> --}}

            <coupon v-model="coupon"></coupon>
            {{-- <coupon :code="coupon" @input="cCode => coupon = cCode"></coupon> --}}
        </div>

        <script src="https://unpkg.com/vue@2.1.3/dist/vue.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>
