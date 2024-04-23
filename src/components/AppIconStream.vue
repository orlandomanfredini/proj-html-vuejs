<template>
    <font-awesome-icon :icon="iconStreaming" />
</template>

<script>
import { store } from '../store';

    export default {
        props: ['iconStreaming'],
        data(){
            return{
                store: store,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>