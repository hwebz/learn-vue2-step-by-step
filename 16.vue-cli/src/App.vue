<template>
  <div class="container">
    <message>{{msg}}</message>
  </div>
</template>

<script>
import Message from './Components/Message.vue';

export default {
  name: 'app',
  components: {Message},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
