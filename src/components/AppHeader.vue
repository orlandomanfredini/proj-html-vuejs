<template>
    <header>
        <div class="container">
            <div class="row">
                <img :src="store.logo" alt="">


                <ul class="link">
                    <AppLinkHeader v-for="(link, i) in store.linkHeader" :key="i" :links="link" :index="i" />
                    <font-awesome-icon @click="searchBar()" class="icon-header" :icon="['fas', 'magnifying-glass']" />
                    <AppInputSearch :input="store.visibleInput" />
                </ul>


            </div>
        </div>
    </header>
</template>

<script>
import { store } from '../store';
import AppInputSearch from './AppInputSearch.vue';
import AppLinkHeader from './AppLinkHeader.vue';

export default {
    components: {
        AppLinkHeader,
        AppInputSearch,
    },
    data() {
        return {
            store: store,
        }
    },
    methods: {
        searchBar(){
            
            if(this.store.visibleInput === false){
                return this.store.visibleInput = true;
            }else{
                return this.store.visibleInput = false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    padding: 20px 30px;
    background-color: black;

    .container {
        width: 100%;


        .row {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;


            img {
                max-width: 110px;
            }

            .link {
                display: flex;
                gap: 25px;
                align-items: center;

                .icon-header {
                    color: white;
                    align-self: center;
                }
            }


        }
    }






}
</style>