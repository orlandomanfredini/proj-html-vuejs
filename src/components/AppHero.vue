<template>
    <div class="container">
        <div class="hero-content">
            <img style="width: 100%; height: 500px;" :src="store.jumboImg" alt="">

            <h5>INSTRUMNETAL ROCK</h5>
            <h1>MUSIC IN THIS VIDEO</h1>
            <div class="button"> <AppButton/> </div>
            
        </div>

    </div>
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

    
    .hero-content{
        width: 100%;
        height: 100%;
        position: relative;


        h5{
         color:rgb(242, 134, 10) ;
         position: absolute;
         top: 20%;
         left: 50%;
         transform: translate(-50%, -50%);

        }

        h1{
            font-size: 48px;
            color: white;
            margin-top: 20px;
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .button{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
                
        }
    }

}

</style>