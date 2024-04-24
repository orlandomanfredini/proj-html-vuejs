<template>
    <footer>
        <div class="container">
            <div class="row">
                <AppBookings />   
                <AppLinksFooter v-for="(links, i) in store.linkFooter" :key="i" :linksFooter="links" />
                <AppNewsLetter  />
            </div>
        </div>
    </footer>
</template>

<script>
import { store } from '../store';
import AppBookings from './AppBookings.vue';
import AppLinksFooter from './AppLinksFooter.vue';
import AppNewsLetter from './AppNewsLetter.vue';


    export default {
        components: {
            AppBookings,
            AppLinksFooter,
            AppNewsLetter,
        },
        data(){
            return{
                store: store,
            }
        }
    }
</script>

<style lang="scss" scoped>
footer{
    padding: 40px 0;
    color: white;

    .container{
        width: 1000px;
        margin: 0 auto;


        .row{
            display: flex;
            flex: wrap;
            gap: 50px;


            
        }
    }

}
</style>