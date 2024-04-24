<template>
    <div class="col-3">
        <div class="card">
            <img :src="blogCard.src" alt="">
            <div class="body">
                <h6>{{ blogCard.title }}</h6>
                <div class="date">
                    <font-awesome-icon :icon="blogCard.icon" />
                    <span>{{ blogCard.date }}</span>
                </div>
                <p>{{ blogCard.text }}</p>
            </div>

        </div>
    </div>
</template>

<script>
import { store } from '../store';

export default {
    props: ['blogCard'],
    data() {
        return {
            store: store,
        }
    }
}
</script>

<style lang="scss" scoped>
.col-3 {
    width: calc(4 * (100% / 12) - 20px);
    padding: 10px;
    margin-top: 18px;


    .card {
        display: flex;
        flex-direction: column;

        .body{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;



        h6 {
            font-size: 18px;
            margin-top: 15px;
        }

        .date {
            font-size: 13px;
            display: flex;
            gap: 5px;
            color:rgb(242, 134, 10) ;
        }

        p{
            font-size: 12px;
            color: rgb(188, 183, 183);
            text-align: left;
        }

        }



        

    }

}
</style>