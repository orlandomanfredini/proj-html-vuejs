<template>
    <section>
        <div class="container">
            <div class="box">
                  <img :src="store.albumOut.src" alt="">
                  <div class="strong">{{ store.albumOut.strong }}</div>
                  <h2>{{ store.albumOut.title }}</h2>
                  <AppButton class="btn" />
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../store';
import AppButton from './AppButton.vue';

    export default {
        components: {
            AppButton,
        },
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
    height: 550px;


    .box{
        width: 100%;
        height: 100%;
        position: relative;

        img{
            width: 100%;
            height: 100%;
        }

        .strong{
            position: absolute;
            top: 35%;
            left: 50px;
            transform: translateY(-50%);
            color: rgb(242, 134, 10);
        }

        h2{
            color: white;
            font-size: 44px;
            position: absolute;
            top: 45%;
            left: 50px;
            transform: translateY(-50%);
            margin-top: 20px;
        }

        .btn{
            position: absolute;
            left: 50px;
            top: 60%;
            transform: translateY(-50%);
            margin-top: 20px;
        }
    }
}
</style>