<template>
  <div class="header">
    <div>Header <img :src="vueLogo"></img></div>
  </div>
</template>

<script>
import vueLogo from './vue-logo.svg'

export default {
  data() {
    return {
      vueLogo
    }
  }
}
</script>