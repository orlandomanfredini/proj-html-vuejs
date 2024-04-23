<template>
    <section>
        <div class="container">
            <div class="strong">{{ store.whoWeAre.strong }}</div>
            <h2>{{ store.whoWeAre.title }}</h2>
            
            <div class="row">
               <AppCard v-for="(card, i) in store.cardsStreaming" :key="i" :cardsInfo="card" />
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../store';
import AppCard from './AppCard.vue';

    export default {
        components: {
            AppCard,
        },
        data(){
            return {
                store: store,
            }
        }
    }
</script>

<style lang="scss" scoped>
section{
    padding: 50px 0px;

    .container{
        max-width: 1000px;
        margin: 0 auto;
        text-align: center;


        .strong{
            color: rgb(242, 134, 10);
            
        }

        h2{
            color: white;
            font-size: 40px;
            margin-top: 20px;
        }

        


        .row{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
        }
    }
}

</style>