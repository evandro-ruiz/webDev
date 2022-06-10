<template>
  <div>
    <h3>Para reservar, digite seu nome e e-mail nos campos abaixo</h3>
    <form action="">
      <div> <InputText /> </div>
      <div> <InputText /> </div>
      <div> <SubmitText /> </div>
    </form>
  </div>
</template>

<script>
import InputText from './forms/InputText.vue'
import SubmitText from './forms/SubmitText.vue'

export default {
  name: 'FormCar',
  components: {
    InputText,
    SubmitText
  }
}
</script>
