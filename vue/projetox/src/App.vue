<template>
  <div>
    <PrimoComp />
    <AutoDesc />
  </div>
</template>

<script>
import PrimoComp from './components/PrimoComp.vue'
import AutoDesc from './components/AutoDesc.vue'

export default {
  name: 'App',
  components: {
    PrimoComp,
    AutoDesc
  }
}
</script>
