<template>
    <div class="max-sm:w-full xl:w-[15%] 2xl:w-[10%] border shadow-xl max-sm:block 
     max-sm:absolute z-10 max-sm:top-[55px]  custom-background
     max-sm:h-screen max-sm:transition-[left] max-sm:duration-[.8s] max-sm:ease-in-out"
         :class="{'max-sm:left-0':burgerMenu, 'max-sm:-left-[110%]':!burgerMenu}"
    >

        <div class="w-full p-[22px] text-center max-sm:bg-white">
            <p class="font-bold text-[20px]">SMART</p>
        </div>

        <div class=" w-full flex p-[20px] cursor-pointer max-sm:hover:border-b-[3px] max-sm:border-b-[#3A5B22]
        rounded"
        :class="{'md:border-r-[4px] md:border-r-[#3A5B22]':selectContent.selected === 'dashboard'}"
         @click="selectContent.handleSelect('dashboard')">

            <span class="">
                <img src="/images/data-analysis.png" class="w-[20px]"/>
            </span>

            <p class="ml-[20px] font-bold">Dashboard</p>

        </div><!--end of first dashboard-->

        <div class=" w-full flex p-[20px] cursor-pointer max-sm:hover:border-b-[3px] max-sm:border-b-[#3A5B22]
         rounded"
        :class="{'md:border-r-[4px] md:border-r-[#3A5B22]':selectContent.selected === 'todoapp'}"
        @click="selectContent.handleSelect('todoapp')">

            <span class="">
                <img src="/images/to-do-list.png" class="w-[20px]"/>
            </span>

            <p class="ml-[20px] font-bold">Todo App</p>

        </div><!--end of first todo app-->

    </div>
</template>

<script lang="ts">
import {useSideBarContent} from '../../stores/sideBarSelect'


    export default {

        props:{
            burgerMenu:{
                type:Boolean,
                required:true
            }
        },

        setup(){

            const selectContent = useSideBarContent()

            return{selectContent}
        }
        
    }
</script>
<style>
  @media (max-width: 600px) {
    .custom-background {
      background-color: rgba(98, 100, 100, 0.1);
    }
  }
</style>
