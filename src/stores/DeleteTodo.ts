import { defineStore } from "pinia";
import { ref } from "vue";
import { useMutation } from "@vue/apollo-composable";
import {deleteTodo} from '../graphql_Queries_mutations/Mutation/DelTodoMutation'
import {notify} from "notiwind"


export const useTodoDelete = defineStore('deletetodo',()=>{

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