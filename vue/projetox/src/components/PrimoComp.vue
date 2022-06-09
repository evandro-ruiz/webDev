<template>
  <div>
    <h1>Olá Vue!</h1>
    <p>Meu nome é {{ nome }}  e meu hobby é {{ hobby }}.</p>
  </div>
</template>

<script>
export default {
  name: 'PrimoComp',
  data() {
    return {
      nome: "Evandro",
      hobby: "ciclismo MTB"
    }
  }
}
</script>
