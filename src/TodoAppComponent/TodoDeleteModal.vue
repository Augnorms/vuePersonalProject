<template>
    <div class="w-full h-screen absolute z-10  max-sm:p-[10px] transition-[right] duration-[.6s] ease-in-out"
         :class="{'right-0':deleteModal.deletePopup, 'right-[-110%]':!deleteModal.deletePopup}"
         :style="{'background-color': 'rgba(0, 0, 0, 0.5)'}"
    >

      <div class="md:w-[40%] p-2 bg-white m-[auto] mt-[100px] rounded">



            <div class="w-full p-[10px] border-b-2">
               <p class="font-bold text-[18px]">Delete this Todo?</p> 
               
               <p class="font-bold text-[18px] mt-10">This is permanent and can't be undone</p> 
            </div>

            <div class="w-full mt-5 flex p-5">

                <div class="w-[50%] flex justify-center">

                    <button class="w-[50%] p-[10px] bg-[crimson] rounded text-[white] font-semibold"
                    @click="deleteModal.handleDelete">
                        Delete
                    </button>

                </div>

                <div class="w-[50%] flex justify-center">

                    <button class="w-[50%]  p-[10px] bg-[dodgerblue] rounded text-[white] font-semibold"
                    @click="deleteModal.handleDeletePopup">
                        Cancel
                    </button>
                    
                </div>

            </div>


      </div>

    </div>
</template>

<script lang="ts">
import {useTodoDelete} from '../stores/DeleteTodo'


export default {
    setup () {
        
        const deleteModal = useTodoDelete()

        return {deleteModal}
    }
}
</script>

<style lang="scss" scoped>

</style>