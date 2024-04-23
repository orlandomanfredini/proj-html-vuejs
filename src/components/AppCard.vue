<template>
    <div class="col-3">
        <div class="card">
            <img :src="cardsInfo.src" alt="">
            <div class="body-card">
                <h5>{{ cardsInfo.title }}</h5>
                <span>Stream on:</span>
                <AppIconStream class="icon" v-for="(icon, i) in streamIcon" :key="i" :iconStreaming="icon" />
            </div>

        </div>
    </div>
</template>

<script>
import { store } from '../store';
import AppIconStream from './AppIconStream.vue';

export default {
    components: {
        AppIconStream,
    },
    props: ['cardsInfo'],
    data() {
        return {
            store: store,
            streamIcon: [
                ['fab', 'spotify'],
                ['fab', 'youtube'],
                ['fas', 'music'],
                ['fab', 'soundcloud'],
                ['fab', 'safari'],
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.col-3 {
    width: calc(4 * (100% / 12) - 30px);
    padding: 15px;

    .card {


        img {
            max-width: 100%;
        }


        .body-card {
            color: white;
            text-align: center;


            h5 {
                font-size: 15px;
            }

            span {
                align-self: flex-start;
                font-size: 12px;
                color: rgb(206, 201, 201);
            }

            .icon{
                font-size: 12px;
                margin-left: 6px;
            }


        }
    }
}
</style>