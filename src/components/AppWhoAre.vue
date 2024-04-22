<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="strong">{{ store.whoWeAre.strong }}</div>
                <h2>{{ store.whoWeAre.title }}</h2>
                <p>{{ store.whoWeAre.text }}</p>
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
    data() {
        return {
            store: store,
        }
    }
}
</script>

<style lang="scss" scoped>
section {
    margin-top: 230px;
    margin-bottom: 70px;


    .container {
        max-width: 1000px;
        margin: 0 auto;
        text-align: center;

        .row {
            display: flex;
            flex-direction: column;
            gap: 20px;


            .strong {
                color: rgb(242, 134, 10);
            }

            h2 {
                color: white;
                font-size: 40px;
            }

            p {
                color: rgb(167, 165, 165);
                font-size: 13px;
            }

            .btn{
                align-self: center;
            }
        }


    }
}
</style>