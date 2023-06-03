import { defineStore } from "pinia";
import {createTodo} from '../graphql_Queries_mutations/Mutation/AddTodo'
import { useMutation, useApolloClient, useQuery } from "@vue/apollo-composable";
import { reactive, ref, watchEffect } from "vue";
import {notify} from "notiwind"
import { useModalControl } from "./modalControl";
import { selectTodoById } from "@/graphql_Queries_mutations/Queries/SelectTodoById";
import {updateTodo} from '../graphql_Queries_mutations/Mutation/UpdateTodo'
import { fetchedTodo } from "@/graphql_Queries_mutations/Queries/SelectTodo";



type TodoDataInsertProp = {
    id:string, //optional for data update
    name:string,
    starttime:string,
    endtime:string,
    date:string
}

export const useTodoDataInsertAnUpdate = defineStore('', ()=>{

    const modalControl = useModalControl()

    const TodoDataInsert = reactive<TodoDataInsertProp>({
        id:'',//optional for data update
        name:"",
        starttime:"",
        endtime:"",
        date:""
    })

    //fetchdata here

    const dataContainerForTodos = ref<TodoDataInsertProp[]>([])

    const { result, refetch: fetchAllTodos } = useQuery(fetchedTodo);
   
    watchEffect(() => {
        if (result.value) {
          dataContainerForTodos.value = result.value.get_all_todos;
        }
   });


   const {mutate:insertTodo} = useMutation(createTodo, ()=>({
      variables:{
        name:TodoDataInsert.name,
        starttime:TodoDataInsert.starttime,
        endtime:TodoDataInsert.endtime,
        date:TodoDataInsert.date
      }
   }))

   const isLoading = ref<boolean>(false)

   const handleTodoInsert = async()=>{
        try{
            isLoading.value = true

            const response = await insertTodo()

            if(response?.data.createTodo.success === true){
                notify({
                    group: "foo",
                    title: "Success",
                    text: "TodoCreated Successfully!"
                  }, 10000)

                  fetchAllTodos() // refresh the page

                  modalControl.handleModalState();

            }else if(response?.data.createTodo.success === false){
                notify({
                    group: "error",
                    title: "Failed",
                    text: "Failed to create Todo!"
                  }, 4000)
            }
        }catch(e:any){
            console.error(e)
        }finally{
            isLoading.value = false
        }
   }




   //handling fetch and update


//fetch data by id
   const {client} = useApolloClient()

   const todoDetails = ref<TodoDataInsertProp>()

   const changeToUpdateState = ref<boolean>(false)
   
   const fetchIsLoading = ref<boolean>(false)


   const handleTodoFetch = async(todoId: string)=>{
        changeToUpdateState.value = true
      
          try{
            fetchIsLoading.value = true

             const {data} = await client.query({
                query: selectTodoById,
                variables:{
                    id:todoId
                }
             })

             if(data){

                todoDetails.value = data.getTodoById

                if(todoDetails.value){

                    TodoDataInsert.id = todoDetails.value.id
                    TodoDataInsert.name = todoDetails.value.name
                    TodoDataInsert.starttime = todoDetails.value.starttime
                    TodoDataInsert.endtime = todoDetails.value.endtime
                    TodoDataInsert.date = todoDetails.value.date
                }

             }

            modalControl.handleModalState()
             
          }catch(e){

            console.error(e)

          }finally{

            fetchIsLoading.value = false

          }

   }


   //update function

   const {mutate:update} = useMutation(updateTodo, ()=>({

       variables:{
          id:TodoDataInsert.id,
          name:TodoDataInsert.name,
          starttime:TodoDataInsert.starttime,
          endtime:TodoDataInsert.endtime,
          date:TodoDataInsert.date
       }

   }))

   const handleUpdateTodo = async()=>{
      try{
        fetchIsLoading.value = true

        const response = await update()

        if(response?.data.updateTodo.success === true){
            notify({
                group: "foo",
                title: "Success",
                text: "TodoUpdated Successfully!"
              }, 6000)

              fetchAllTodos() // refresh the page

              modalControl.handleModalState();

        }else{
            notify({
                group: "error",
                title: "Failed",
                text: "Failed to update todo"
              }, 4000)
        }

      }catch(e){console.error(e)}finally{fetchIsLoading.value = false}
   }



    return{handleTodoInsert, handleTodoFetch, handleUpdateTodo, 
      TodoDataInsert, changeToUpdateState, isLoading, fetchIsLoading, 
      dataContainerForTodos}
})