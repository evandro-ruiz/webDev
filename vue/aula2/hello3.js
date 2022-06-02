const MeuNomeApp = {
  data() {
    return {
      nome: "",
      input_name: ""
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault() //não deixa o form ser enviado
      console.log("Msg da console: "+this.input_name);
      this.nome = this.input_name;
    }
  }
}

Vue.createApp(MeuNomeApp).mount('#app')
