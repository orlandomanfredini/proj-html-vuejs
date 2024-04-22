<template>
    <button>READE MORE</button>
</template>

<script>
import { store } from '../store';

    export default {
        data(){
            return{
                store: store,
            }
        }
    }
</script>

<style lang="scss" scoped>

button{
    padding: 10px 32px;
    border: 1px solid rgb(242, 134, 10) ;
    background: transparent;
    color: white;
}

</style>