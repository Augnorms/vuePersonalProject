<template>
    <div class="flex-grow p-6">

        <div class="w-full max-sm:block hidden mb-[10px]"><!--for media screen-->

            <i class="fa-solid fa-bars 
                text-[22px] cursor-pointer
                text-[#3A5B22]"
                @click="handleMenu()"
            >
            </i>

        </div><!--for media screen-->

        <DashbordContent v-if="selectContent.selected === 'dashboard'"/>

        <TodoContent v-if="selectContent.selected === 'todoapp'"/>

    </div>
</template>

<script lang="ts">
import DashbordContent from './HelperComponent/DashbordContent.vue';
import TodoContent from './HelperComponent/TodoContent.vue';
import {useSideBarContent} from '../../stores/sideBarSelect'

    export default {
        components:{
            DashbordContent,
             TodoContent
        },
        props:{
            handleMenu:{
                type: Function,
                required: true
            }
        },
        setup(){
   
           const selectContent = useSideBarContent()  

            return{selectContent}
        }
    }
</script>
