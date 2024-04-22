<template>
  <AppHeader />
  
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