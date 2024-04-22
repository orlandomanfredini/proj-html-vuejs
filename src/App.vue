<template>
  <AppHeader />
  <h1>Hello World</h1>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import { store } from './store';
  export default {
    components: {
      AppHeader,
    },
     data(){
      return {
        store: store,
      }
     }
  }
</script>

<style lang="scss" scoped>

</style>