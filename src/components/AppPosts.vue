<template>
    <div class="container">
        <div class="row">
           <img v-for="(img, i) in store.postImg" :key="i"  :src="img" alt="">
        </div>
    </div>
</template>

<script>
import { store } from '../store';

    export default {
        data(){
            return {
                store: store,
            }
        }
    }
</script>

<style lang="scss" scoped>
.container{
    width: 100%;
    margin-top: 15px;
    padding: 10px 0;

    .row{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;

        img{
            width: calc(2 * (100% / 12));
            height: 160px;
            object-fit: cover;
            padding: 2px;
        }
    }
}
</style>