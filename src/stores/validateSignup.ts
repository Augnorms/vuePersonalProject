import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { createUser } from "@/graphql_Queries_mutations/Mutation/Register";
import { useMutation } from "@vue/apollo-composable";

type SignupProp = {

    name:string,
    username:string,
    email:string,
    password:string,
    confirmPassword:string

}

type SignupErrorProp = {
    name:string,
    username:string,
    email:string,
    password:string,
    confirmPassword:string
}

export const signupValidation = defineStore('signupVal', ()=>{

     const signupFormInput = reactive<SignupProp>({
        name:"",
        username:"",
        email:"",
        password:"",
        confirmPassword:""
     })

     const signupFormErrors = reactive<SignupErrorProp>({
        name:"",
        username:"",
        email:"",
        password:"",
        confirmPassword:""
     })

     const validate = (fieldname: keyof SignupProp) => {
      if (signupFormInput[fieldname].trim() === "") {
        signupFormErrors[fieldname] = `This ${fieldname} field is required`;
      } else if (fieldname === 'name' && /[^a-zA-Z\s]/.test(signupFormInput[fieldname])) {
        signupFormErrors[fieldname] = `${fieldname} do not require characters or numbers`;
      } else if (fieldname === 'username' && /[^a-zA-Z \s 0-9]/.test(signupFormInput[fieldname])) {
        signupFormErrors[fieldname] = `${fieldname} do not require numbers`;
      } else if (fieldname === 'email' && !/^\S+@\S+\.\S+$/.test(signupFormInput[fieldname])) {
        signupFormErrors[fieldname] = `${fieldname} field must follow correct format`;
      } else if ((fieldname === 'password' || fieldname === 'confirmPassword') && /[^0-9a-zA-Z\S]/.test(signupFormInput[fieldname])) {
        signupFormErrors[fieldname] = `${fieldname} field does not accept spaces`;
      } else if (fieldname === 'confirmPassword' && signupFormInput[fieldname] !== signupFormInput['password']) {
        signupFormErrors[fieldname] = "Passwords do not match";
      } else {
        signupFormErrors[fieldname] = "";
      }
    }
    


     const hasErrors = ()=>{
        for(const fields in signupFormErrors){
            if(signupFormErrors[fields as keyof SignupErrorProp] !== ""){
                return true
            }
        }
        return false
     }

     const {mutate:registerUser} = useMutation(createUser, ()=>({

        variables:{

           name:signupFormInput.name,
           username:signupFormInput.username,
           email:signupFormInput.email,
           password:signupFormInput.password,
           confirmPasword:signupFormInput.confirmPassword
        }

     }))

     const isLoading = ref<boolean>(false)
     const responseState = ref<boolean | null>(null);

     const handleCreateUser = async()=>{

       if(hasErrors() === true){
          ""
       }else{

          try{
             isLoading.value = true

             const response = await registerUser()
             
             responseState.value = response?.data.createUser.success

          }catch(e:any){

            console.error(e)

          }finally{

            isLoading.value = false 
          }
       }

       signupFormInput.name = ""
       signupFormInput.username = ""
       signupFormInput.email = ""
       signupFormInput.password = ""
       signupFormInput.confirmPassword = ""
        
     }
     

   return {validate, hasErrors, signupFormInput, signupFormErrors, handleCreateUser, isLoading, responseState}
})