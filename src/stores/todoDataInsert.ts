import { defineStore } from "pinia";
import {createTodo} from '../graphql_Queries_mutations/Mutation/AddTodo'
import { useMutation } from "@vue/apollo-composable";
import { reactive, ref } from "vue";
import {notify} from "notiwind"
import { useModalControl } from "./modalControl";


type TodoDataInsertProp = {
    name:string,
    starttime:string,
    endtime:string,
    date:string
}

export const useTodoDataInsert = defineStore('', ()=>{

    const modalControl = useModalControl()

    const TodoDataInsert = reactive<TodoDataInsertProp>({
        name:"",
        starttime:"",
        endtime:"",
        date:""
    })


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


    return{handleTodoInsert, TodoDataInsert, isLoading}
})