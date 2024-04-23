<template>
    <main>
       <AppHero />
       <AppBedges class="bedges" />
       <AppWhoAre />
       <AppSectionVideo />
       <AppCards />
       <AppAlbum />
       <AppReports />
       
    </main>
</template>

<script>
import { store } from '../store';
import AppHero from './AppHero.vue';
import AppBedges from './AppBedges.vue';
import AppWhoAre from './AppWhoAre.vue';
import AppSectionVideo from './AppSectionVideo.vue';
import AppCards from './AppCards.vue';
import AppAlbum from './AppAlbum.vue';
import AppReports from './AppReports.vue';

    export default {
        components: {
            AppHero,
            AppBedges,
            AppWhoAre,
            AppSectionVideo,
            AppCards,
            AppAlbum,
            AppReports,
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