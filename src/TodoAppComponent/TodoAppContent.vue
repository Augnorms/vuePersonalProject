<template>
    <div class="w-full h-full overflow-y-auto">

        <div class="w-full flex flex-wrap">

            <div class="w-[50%] text-center ">
                <p class="text-[20px] font-bold">Todo App</p>
            </div>

            <div class="w-[50%]  flex justify-end ">

                <button class="w-[100px] p-[10px] rounded  mr-2 shadow-md bg-[dodgerblue] text-[white] font-bold"
                 @click="Addmodal.handleModalState">
                    Add Todo
                </button>

            
            </div>

        </div><!--head component-->

        <hr class="mt-[20px] mb-[20px]"/>

        <div class="p-[10px] border h">

            <table class="border w-full">
                            <thead class="border-b-[1px] bg-slate-100 ">
                                <th class="text-start xl:w-[30%] p-4">Name</th>
                                <th class="text-start ">Start Time</th>
                                <th class="text-start ">End Time</th>
                                <th class="text-start ">Date</th>
                                <th class="text-start ">Actions</th>
                            </thead>
                            <tbody>
                                 <tr v-if="dataContainer.length < 1">
                                    <td colspan="5" class="text-center">
                                        <div class="flex justify-center items-center h-full">
                                          <img src="/images/empty.png" class="w-[40px]" />
                                        </div>
                                    </td>
                                  </tr>

                                  <tr v-for="todo in dataContainer" :key="todo['id']">
                                        <td class="text-start xl:w-[30%] border-b-[1px] p-4">
                                            {{ todo["name"] }}
                                        </td>
                                        <td class="text-start border-b-[1px]">{{ todo["starttime"] }}</td>
                                        <td class="text-start border-b-[1px]">{{ todo["endtime"] }}</td>
                                        <td class="text-start border-b-[1px]">{{ todo["date"] }}</td>
                                        <td class="text-start border-b-[1px]">
                                            <div class="w-full flex">

                                                
                                                <img src="/images/edit.png"  
                                                class="w-[20px] h-[20px] max-sm:mr-[4px] 
                                                mr-[10px] cursor-pointer" alt="edit"
                                               @click="fetchTodoById.handleTodoFetch(todo.id)"/>
                                                

                                            
                                                <img src="/images/delete.png"  
                                                class="w-[20px] h-[20px] max-sm:ml-[4px] ml-[10px] 
                                                cursor-pointer" alt="delete"
                                                 @click="deletePopup.handleDeletePopup(todo.id)"/>
                                            
                                                
                                            </div>
                                        </td>
                                </tr>

                            </tbody>
                    </table>

        </div><!--table content-->

        

    </div>
</template>

<script lang="ts">
import { useModalControl } from '../stores/modalControl';
import { ref, watchEffect } from 'vue';
import {fetchedTodo} from '../graphql_Queries_mutations/Queries/SelectTodo'
import { useQuery } from '@vue/apollo-composable'
import { useTodoDelete } from '../stores/DeleteTodo';
import {useTodoDataInsertAnUpdate} from '../stores/todoDataInsertAndUpdate'

interface Todo {
  id: string;
  name: string;
  starttime: string;
  endtime: string;
  date: string;
}

export default {
    components:{
      
    },
    setup () {
        
        const Addmodal = useModalControl()
        const dataContainer = ref<Todo[]>([])
        const deletePopup = useTodoDelete()
   
        watchEffect(() => {

        const { result, loading } = useQuery(fetchedTodo);

        if (!loading.value && result.value) {
            
            dataContainer.value = result.value.get_all_todos;
        }
        });

        const fetchTodoById = useTodoDataInsertAnUpdate() //fetching for update

        return { Addmodal, dataContainer, deletePopup,  fetchTodoById};
},

}
</script>

<style lang="scss" scoped>

</style>