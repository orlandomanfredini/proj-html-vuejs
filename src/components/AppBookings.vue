<template>
    <div class="col-4">
        <h5>{{ store.bookings.title }}</h5>
        <ul>
            <li v-for="(info, i) in store.bookings.info" :key="i">{{ info }}</li>
        </ul>
        <ul class="icon">
            <li v-for="(icon, i) in store.bookings.icon">
                <img :src="icon" alt="">
            </li>
        </ul>
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
.col-4{
    width: calc(3 * (100% / 12) - 20px);
    padding: 10px;


    h5{
        color: white;
        font-size: 18px;
    }

    li{
        font-size: 11px;
        color: rgb(164, 162, 162);
        margin-top: 3px;
    }

    .icon{
        display: flex;
        gap: 12px;
        margin-top: 15px;


        img{
            max-width: 15px;
            max-height: 15px;
            filter: invert(1);
        }
    }
}
</style>