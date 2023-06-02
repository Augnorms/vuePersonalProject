import { defineStore } from "pinia";
import { ref } from "vue";


export const useModalControl = defineStore('modal', ()=>{

    const modalState = ref<boolean|null>(false)

    const handleModalState = ()=>{
        modalState.value = !modalState.value
    }

    return {handleModalState, modalState}

})