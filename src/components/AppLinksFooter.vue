<template>
    <div class="col-4">
        <h5>{{ linksFooter.title }}</h5>
        <ul>
            <li v-for="(link, i) in linksFooter.links"><a :href="linksFooter.src">{{ link }}</a></li>
        </ul>

    </div>
</template>

<script>
import { store } from '../store';

    export default {
        props: ['linksFooter'],
        data(){
            return {
                store: store,
            }
        }
    }
</script>

<style lang="scss" scoped>
.col-4{
    width: calc(3 * (100% / 12) - 20px);
    padding: 10px;


    h5{
        color: white;
    }

    ul{
        margin-top: 10px;

        li{
            margin-top: 4px;

            a{
                font-size: 11px;
                color: rgb(183, 180, 180);
            }
        }
    }
}

</style>