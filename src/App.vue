<template>
  <div id="app">
    <div class="container jumbotron py-4">
      <h1 class="display-4 text-center">Translator UI</h1>
      <p class="lead text-center">A simple google-translate like application. Backend is supported by Node.JS, Frontend is supported by Vue.js.</p>
      <hr class="my-4">
      <p class="text-center">author: babangcreator</p>
    </div>
    <translator/>
  </div>
</template>

<script>
import Translator from "./components/Translator.vue"
import "bootstrap"

export default {
  name: 'app',
  components: {
    Translator
  }
}
</script>
<style lang="sass">
  @import "~bootstrap/scss/bootstrap"
</style>
