<template>
    <main>
       <AppHero />
       <AppBedges class="bedges" />
       <AppWhoAre />
       
    </main>
</template>

<script>
import { store } from '../store';
import AppHero from './AppHero.vue';
import AppBedges from './AppBedges.vue';
import AppWhoAre from './AppWhoAre.vue';

    export default {
        components: {
            AppHero,
            AppBedges,
            AppWhoAre,
        },
        data(){
            return {
                store: store,
            }
        }
    }
</script>

<style lang="scss" scoped>
main{
    position: relative;

    .bedges{
        position: absolute;
        top : 400px;
    }
}

</style>