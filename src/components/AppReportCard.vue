<template>
    <div class="col-4">
        <div class="content">
              <img :src="reports.icon" alt="">
              <h3>{{ reports.number }}</h3>
              <h3>"{{ reports.id }}"</h3>
        </div>
    </div>
</template>

<script>
import { store } from '../store';

    export default {
        props: ['reports'],
        data(){
            return {
                store: store,
            }
        }
    }
</script>

<style lang="scss" scoped>
.col-4{
    width: calc(3 * (100% / 12) - 30px);
    padding: 15px;
    z-index: 999;

    .content{
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: center;
        justify-content: center;
        color: white;

        img{
            filter: invert(1);
            max-width: 40px;
            max-height: 40px;
        }
        
    }
}

</style>