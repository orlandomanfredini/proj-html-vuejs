<template>
    <section>
        <img :src="backgroundSection" alt="">
        <div class="container">
            <div class="row">
                <AppReportCard v-for="(report, i) in store.reportsConcerts" :key="i" :reports="report" />
            </div>
        </div>

    </section>
    
</template>

<script>
import { store } from '../store';
import AppReportCard from './AppReportCard.vue';







    export default {
        components: {
            AppReportCard,
        },
        data(){
            return {
                store: store,
                backgroundSection: '../public/assetsImg/counter_parallax.jpg'
            }
        }
    }
</script>

<style lang="scss" scoped>
section{
    width: 100%;
    height: 300px;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }

    .container{
        max-width: 1000px;
        height: 100%;
        margin: 0 auto;
        
        


        .row{
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
    }
}

</style>