<template>
    <div class="card">
        <img :src="badges.src" alt="">
        <h4>{{ badges.title }}</h4>
        <p>{{ badges.text }}</p>
    </div>
</template>

<script>
import { store } from '../store';

    export default {
        props: ['badges'],
        data(){
            return {
                store: store,
            }
        }
    }
</script>

<style lang="scss" scoped>
.card{
    background-color: rgb(28, 27, 27);
    padding: 30px;
    width: 270px ;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;


    img{
        max-width: 50px;
        height: 50px;
        filter: invert(1);
    }

    h4{
        font-size: 20px;
    }

    p{
        font-size: 13px;
        color: rgb(176, 171, 171)
    }
}
</style>