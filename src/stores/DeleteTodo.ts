import { defineStore } from "pinia";
import { ref, watchEffect} from "vue";
import { useMutation, useQuery } from "@vue/apollo-composable";
import {deleteTodo} from '../graphql_Queries_mutations/Mutation/DelTodoMutation'
import { fetchedTodo } from "@/graphql_Queries_mutations/Queries/SelectTodo";
import {notify} from "notiwind"

type TodoDataInsertProp = {
  id:string, //optional for data update
  name:string,
  starttime:string,
  endtime:string,
  date:string
}

export const useTodoDelete = defineStore('deletetodo',()=>{

  //fetching data after deletion
  const dataContainerForTodos = ref<TodoDataInsertProp[]>([])

  const { result, refetch: fetchAllTodos } = useQuery(fetchedTodo);
 
  watchEffect(() => {
      if (result.value) {
        dataContainerForTodos.value = result.value.get_all_todos;
      }
 });


 //performing delete operations
   const deletePopup = ref<boolean>(false)
   const deleteId = ref<string>("")
   const isLoading = ref<boolean>(false)

   const handleDeletePopup = (id?:string)=>{

     deletePopup.value = !deletePopup.value
     deleteId.value = id || ''
     console.log(deleteId.value)
   }


const { mutate: deletion } = useMutation(deleteTodo, () => ({
    variables: {
      id: deleteId.value // Access the value of deleteId ref
    },

  }));

   const handleDelete = async()=>{
          
       try{
        isLoading.value = true

        const result = await deletion()

         if(result?.data.deleteTodo) {
            notify({
                group: "foo",
                title: "Success",
                text: "deleted Successfully!"
              }, 7000)

              handleDeletePopup()

             fetchAllTodos() //refresh page after successful deletion

         }else{
            notify({
                group: "error",
                title: "Failed",
                text: "Failed to delete todo!"
              }, 4000)
         }

       }catch(e){
         console.error(e)
       }finally{

        isLoading.value = false
       }
     
   }

   return{deletePopup, handleDeletePopup, isLoading, handleDelete}

}) 