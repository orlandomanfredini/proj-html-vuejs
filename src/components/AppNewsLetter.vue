<template>
    <div>
        <h5>{{ titleSection }}</h5>
        <input class="email" type="email" placeholder="Inserisci email">
        <textarea class="text" name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
    </div>

</template>

<script>
import { store } from '../store';

export default {
    data() {
        return {
            store: store,
            titleSection: 'NEWSLETTER',
        }
    }
}
</script>

<style lang="scss" scoped>
div{
    padding: 10px;


    h5{
        margin-bottom: 8px;
    }
    
}
.email{
    width: 230px;
    border: 1px solid rgb(97, 96, 96);
    background-color: transparent;
    color: grey;
    padding: 8px;
}

.text{
    margin-top: 8px;
    height: 110px;
    width: 230px;
    border: 1px solid rgb(97, 96, 96);
    background-color: transparent;
    color: grey;
    padding: 8px;
    
}
</style>