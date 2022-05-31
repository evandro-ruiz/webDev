var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Olá Vue! >>'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
