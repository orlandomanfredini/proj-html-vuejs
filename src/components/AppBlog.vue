<template>
    <section>
        <div class="container">
            <div class="strong">{{ store.blog.strong }}</div>
            <h2>{{ store.blog.title }}</h2>
            <div class="row">
                <AppBlogCard v-for="(card, i) in store.blog.best" :key="i" :blogCard="card" />
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../store';
import AppBlogCard from './AppBlogCard.vue';


    export default {
        components: {
            AppBlogCard,
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
    padding: 50px 0;
    color: white;

    .container{
        max-width: 1000px;
        margin: 0 auto;
        text-align: center;


        .row{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            
        }

        .strong{
            color: rgb(242, 134, 10);
        }

        h2{
            font-size: 40px;
            margin-top: 20px;
        }
    }
}

</style>