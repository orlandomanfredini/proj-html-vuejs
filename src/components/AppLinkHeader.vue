<template>
    <li>
        <a :href="links.src" @click="isVisible()">{{ links.name }}</a>
        <font-awesome-icon v-if="links.icon" class="icon" :icon="links.icon" @click="isVisible()" />
        <AppModalHeader v-if="links.icon" class="modal"  :linkModal="links.link" :visible="links.visible" />
    </li>
    
</template>

<script>
import { store } from '../store';
import AppModalHeader from './AppModalHeader.vue';

    export default {
        components: {
            AppModalHeader,
        },
        props: ['links', 'index'],
        data(){
            return{
                store: store,
            }
        },
        methods: {
            isVisible(){
                if(this.links.visible === false){
                    return this.links.visible = true;
                }else {
                    return this.links.visible = false
                }
                 
                
            }
        }
    }
</script>

<style lang="scss" scoped>
li{
    a{
        color: white;
        font-size: 13px;
    }

    .modal:last-child {
        transform: translateX(-55px);
    }

    
}

.icon{
    color: white;
    margin-left: 4px;
}

li:hover{
    a{
        color: #F2860A;
    }

    

    
    
}

</style>