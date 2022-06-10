<template>
  <div>
    <h2>Descrição do automóvel {{ modelo }}</h2>
    <InfoDesc />
    <FormCar />
  </div>
</template>

<script>
import InfoDesc from './InfoDesc.vue'
import FormCar from './FormCar.vue'

export default {
  name: 'AutoDesc',
  components: {
    InfoDesc,
    FormCar
  },
  data() {
    return {
      modelo: "Porsche 911"
    }
  }
}
</script>
