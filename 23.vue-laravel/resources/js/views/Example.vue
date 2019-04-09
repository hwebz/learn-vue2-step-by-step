<template>
    <div>
        <ul>
            <li v-for="item in items">
                <slot name="menu-item" :item="item" thing="Foo" bar="bar">DEFAULT</slot>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['items']
    }
</script>
