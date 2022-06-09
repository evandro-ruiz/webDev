<template>
  <div>
    <h2>Descrição do automóvel {{ modelo }}</h2>
    <InfoDesc />
  </div>
</template>

<script>
import InfoDesc from './InfoDesc.vue'

export default {
  name: 'AutoDesc',
  components: {
    InfoDesc
  },
  data() {
    return {
      modelo: "Porsche 911"
    }
  }
}
</script>
