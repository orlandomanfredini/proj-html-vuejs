<template>
    <div class="card" :class="visible === true ? 'opacity' : ''">
        <ul class="list">
            <li v-for="(link, i) in linkModal" :key="i">{{ link.name }}</li>
        </ul>
    </div>
</template>

<script>
import { store } from '../store';

    export default {
        props: ['linkModal', 'visible'],
        data(){
            return {
                store: store,
            }
        }
    }
</script>

<style lang="scss" scoped>
.card{
    display: flex;
    z-index: 1999;
    margin-top: 5px;
    background-color: rgb(242, 134, 10);
    position: absolute;
    width: 165px;
    height: 100px;
    border-radius:4px;
    padding: 0px;
    transition: all 700ms;
    opacity: 0;

    .list{
        display: flex;
        flex-direction: column;
        gap: 5px;
        justify-content: center;
        padding-left: 5px;


        li{
            font-size: 13px;
            color: black;
            
        }
    }
}

.opacity{
    width: 165px ;
    height: 100px;
    opacity: 1;
}
</style>