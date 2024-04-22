<template>
    <div class="container">
        <div class="row">
           <AppBedge v-for="(card, i) in store.badges" :key="i" :badges="card" />
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import AppBedge from './AppBedge.vue';

    export default {
        components: {
            AppBedge,
        },
        data(){
            return{
                store: store,
            }
        }
    }
</script>

<style lang="scss" scoped>
.container{
    width: 100%;
    margin: 0 auto;

    .row{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;

    }
}
</style>