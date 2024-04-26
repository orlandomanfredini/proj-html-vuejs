<template>
    <input :class="input === true ? 'opacity' : '' " type="text" placeholder="Cerca contenuti">
</template>

<script>
import { store } from '../store';

    export default {
        props: ['input'],
        data(){
            return {
                store: store,
            }
        }
    }
</script>

<style lang="scss" scoped>
input{
    height: 0px;
    width: 0px;
    border: 1px solid rgb(97, 96, 96);
    background-color: transparent;
    color: grey;
    padding: 8px;
    opacity: 0;
    transition: all 300ms ease-in;
}

.opacity{
    width: 190px;
    height: 30px;
    opacity: 1;
}
</style>