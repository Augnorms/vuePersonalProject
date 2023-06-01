<template>
    <div class="w-full md:h-screen lg:h-screen xl:h-screen 2xl:h-screen
    bg-gradient-to-r from-[#3A5B22] to-[#fff] max-sm:p-0 p-[60px]"
    >
        
        <div class="w-full h-[100%] shadow-xl bg-white rounded-md flex">
             <DashboardSidebar :burgerMenu="burgerMenu"/>
             <DashboardMainBodyComponent :handleMenu="handleMenu"/>
        </div>
      
    </div>
</template>

<script lang="ts">
import DashboardSidebar from '../components/DashboardComponent/DashboardSidebar.vue';
import DashboardMainBodyComponent from '../components/DashboardComponent/DashboardMainBodyComponent.vue';
import {ref} from 'vue'


export default {
    components:{
        DashboardSidebar,
        DashboardMainBodyComponent
    },
    setup () {
        
        const burgerMenu = ref<boolean>(false) //handle menu in small screens

        const handleMenu =()=>{
            burgerMenu.value = !burgerMenu.value
            
        }

        return {burgerMenu, handleMenu}
    }
}
</script>
