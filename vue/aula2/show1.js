const showApp = {
data() {
  return {
    showPreco:"true",
    produto: "Porsche 911 Carrera",
    preco: "US$115.000"
  }
},
methods:{
  setShowPreco() {
    this.showPreco=false;
  }
}
}

Vue.createApp(showApp).mount('#app')
