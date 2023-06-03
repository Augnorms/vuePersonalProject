<template>
    <div class="w-full h-screen absolute z-10  max-sm:p-[10px] transition-[top] duration-[.8s] ease-in-out"
         :class="{'top-0':Addmodal.modalState, 'top-[-110vh]':!Addmodal.modalState}"
         :style="{'background-color': 'rgba(0, 0, 0, 0.5)'}"
    >

      <div class="md:w-[40%] p-2 bg-white m-[auto] mt-10 rounded">

            <div class="w-full p-[10px] flex justify-end relative"
             @click="Addmodal.handleModalState"><!--close button-->

               <div class="w-[30px] h-[30px] rounded-full shadow-lg 
                  border flex justify-center items-center absolute 
                  top-[-20px] right-[-20px] bg-white cursor-pointer">

                    <img src="/images/clear.png" class="w-[15px]" 
                    alt="closebtn"/>

               </div>

            </div>

            <div class="w-full p-[10px] border-b-2">

              <p class="font-bold text-center text-[25px]" v-if="todoDataUpdate.changeToUpdateState">Update Todo</p>
               <p class="font-bold text-center text-[25px]" v-else-if="!todoDataUpdate.changeToUpdateState">Add Todo</p>  
                 
            </div>

            <div><!--form-->

                <div class="w-full"><!--optional for data update-->
                    <div class="w-[100%] p-[8px]">
                        <reusableInput 
                         type="hidden"
                         name="id"
                         class="w-full border p-[8px] rounded outline-none"
                         placeholder="enter your id"
                         v-model="todoDatainsert.TodoDataInsert.id"
                         />
                       
                    </div>
                </div>

                <div class="w-full flex">
                    <div class="w-[30%] p-[8px]">

                        <label class="text-[20px] font-bold">Todo</label>

                    </div>
                    <div class="w-[70%] p-[8px]">
                        <reusableInput 
                         type="text"
                         name="name"
                         class="w-full border p-[8px] rounded outline-none"
                         placeholder="enter what you intend doing"
                         v-model="todoDatainsert.TodoDataInsert.name"
                         />
                       
                    </div>
                </div>

                <div class="w-full flex">
                    <div class="w-[30%] p-[8px]">

                        <label class="text-[20px] font-bold">Date</label>

                    </div>
                    <div class="w-[70%] p-[8px]">
                        <reusableInput 
                         type="date"
                         name="date"
                         class="w-full border p-[8px] rounded outline-none"
                         placeholder="enter what you intend doing"
                         v-model="todoDatainsert.TodoDataInsert.date"
                         />
                      
                    </div>
                </div>

                <div class="w-full flex">
                    <div class="w-[50%] p-[8px]">

                        <label class="text-[20px] font-bold">StartTime</label>

                    </div>
                    <div class="w-[50%] p-[8px]">
                        
                        <label class="text-[20px] font-bold">EndTime</label>

                    </div>
                </div>

                <div class="w-full flex">
                    <div class="w-[50%] p-[8px]">

                        <reusableInput 
                         type="time"
                         name="starttime"
                         class="w-full border p-[8px] rounded outline-none"
                         placeholder="enter what you intend doing"
                         v-model="todoDatainsert.TodoDataInsert.starttime"
                         />
                       
                    </div>
                    <div class="w-[50%] p-[8px]">
                        
                        <reusableInput 
                         type="time"
                         class="w-full border p-[8px] rounded outline-none"
                         placeholder="enter what you intend doing"
                         v-model="todoDatainsert.TodoDataInsert.endtime"
                         />
                        
                    </div>
                </div>

                <div class="w-[100%] p-[8px]" v-if="!todoDataUpdate.changeToUpdateState">
                       
                    <!--insert button-->
                   <button class="p-[8px] w-full bg-[dodgerblue] rounded text-[white] font-bold"
                   @click="todoDatainsert.handleTodoInsert">

                    <i v-if="todoDatainsert.isLoading" class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
                    <p v-else-if="!todoDatainsert.isLoading">AddTodo</p>  

                    </button>      

                </div>

                <!--update button-->
                <div class="w-[100%] p-[8px]" v-else-if="todoDataUpdate.changeToUpdateState">
                        
                        <button class="p-[8px] w-full bg-[dodgerblue] rounded text-[white] font-bold"
                        @click="todoDataUpdate.handleUpdateTodo">

                         <i v-if="todoDataUpdate.fetchIsLoading" class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
                         <p v-else-if="!todoDataUpdate.fetchIsLoading">UpdateTodo</p> 

                         </button>      
     
                 </div>

            </div><!--form end-->

      </div>

    </div>
</template>

<script lang="ts">
import { useModalControl } from '../stores/modalControl';//from pinia
import {useTodoDataInsertAnUpdate} from '../stores/todoDataInsertAndUpdate'
import reusableInput from '../reusables/reusableInput.vue';


export default {
   components:{
    reusableInput
   },
    setup () {
     
        const Addmodal = useModalControl()
        const todoDatainsert = useTodoDataInsertAnUpdate()//inserting data
        const todoDataUpdate = useTodoDataInsertAnUpdate() //updating data
        
      

        return {Addmodal, todoDatainsert, todoDataUpdate}
    }
}
</script>

<style >

</style>