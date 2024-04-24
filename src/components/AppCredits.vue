<template>
    <div class="container">
        <p>{{ credit }}</p>
    </div>
</template>

<script>
import { store } from '../store';



    export default {
        props: ['credit'],
        deta(){
            return{
                store: store,
                 
            }
        }
    }
</script>

<style lang="scss" scoped>
.container{
    width: 100%;
    height: 60px;

    p{
        color: rgb(172, 170, 170);
        font-size: 13px;
        text-align: center;
        line-height: 60px;
    }
}
</style>