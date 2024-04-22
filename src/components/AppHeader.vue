<template>
    <header>
        <div class="container">
            <div class="row">
                <img :src="store.logo" alt="">

                
                <ul class="link">
                    <AppLinkHeader v-for="(link, i) in store.linkHeader" :key="i" :links="link"/>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import { store } from '../store';
import AppLinkHeader from './AppLinkHeader.vue';

export default {
    components : {
        AppLinkHeader,
    },
    data() {
        return {
            store: store,
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    padding: 20px;
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

            .link{
                display: flex;
                gap: 20px;
                align-self: center;
            }
        }
    }






}
</style>