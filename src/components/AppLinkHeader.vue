<template>
    <li><a :href="links.src">{{ links.name }}</a></li>
</template>

<script>
import { store } from '../store';

    export default {
        props: ['links'],
        data(){
            return{
                store: store,
            }
        }
    }
</script>

<style lang="scss" scoped>
li{
    a{
        color: white;
        font-size: 13px;
    }

    
}

li:hover{
    a{
        color: #F2860A;
    }
    
}

</style>