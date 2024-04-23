<template>
    <section>
        <div class="box">
            <img :src="store.sectionVideo.src" alt="">
            <h2>{{ store.sectionVideo.title }}</h2>
            <div class="icon-video">
                <font-awesome-icon :icon="['fas', 'play']" />
            </div>
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
        width: 100%;
        height: 100%;
    }

    h2{
        position: absolute;
        top: 65%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 40px;
        color: white;
    }

    .icon-video{
        color: rgb(242, 134, 10);
        padding: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        font-size: 22px;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid rgb(242, 134, 10);
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
}

</style>