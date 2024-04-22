<template>
    <section>
        <div class="box">
            <img :src="store.sectionVideo.src" alt="">
            <h2>{{ store.sectionVideo.title }}</h2>
        </div>
    </section>
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
.box{
    width: 100%;
    height: 385px;
    position: relative;


    img{
        max-width: 100%;
        height: 100%;
    }

    h2{
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 40px;
        color: white;
    }
}

</style>