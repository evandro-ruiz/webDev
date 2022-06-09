<template>
  <h3>Onde estou? R: {{ onde }}</h3>
</template>

<script>
export default {
  name: 'LifeCycle',
  data() {
    return {
      onde: "Estou em data()"
    }
  },
  created() {
      console.log("created()");
  },
  beforeMount() {
      console.log("beforeMount()");
  },
  mounted() {
    setTimeout ( () => {
      console.log('mounted()');
      this.onde = "Passei pelo mounted()"}, 2000);
  }
}
</script>
