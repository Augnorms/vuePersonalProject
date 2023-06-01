import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import {authenticateUser} from '../graphql_Queries_mutations/Mutation/Authenticate'
import { useMutation } from "@vue/apollo-composable";
import {useRouter} from 'vue-router'

type LoginInputProp = {
    username:string,
    password:string,
    confirmpassword:string
}

type LoginErrorProp = {
    username:string,
    password:string,
    confirmpassword:string
}

export const loginValidation = defineStore('loginValidate', ()=>{

    const loginFormInput = reactive<LoginInputProp>({
        username:"",
        password:"",
        confirmpassword:""
    })

    const loginErroInput = reactive<LoginErrorProp>({
        username:"",
        password:"",
        confirmpassword:""
    })

    const validate = (fieldname:keyof LoginInputProp)=>{
         if(loginFormInput[fieldname].trim() === ''){
            loginErroInput[fieldname] = `${fieldname} is required`
         }else if(fieldname === 'username' && /[^a-zA-Z0-9\s]/.test(loginFormInput[fieldname])){
            loginErroInput[fieldname] = `${fieldname} do not require spaces`
         }else if ((fieldname === 'password' || fieldname === 'confirmpassword') && /[^0-9a-zA-Z\S]/.test(loginFormInput[fieldname])) {
            loginErroInput[fieldname] = `${fieldname} field does not accept spaces`;
        } else if (fieldname === 'password' && loginFormInput[fieldname].length < 8) {
            loginErroInput[fieldname] = `${fieldname} must be at least 8 characters long`;
        }else{
            loginErroInput[fieldname] = ""
        }
    }

    const hasErrors = ()=>{
        for(const field in loginErroInput){
            if(loginErroInput[field as keyof LoginErrorProp] !== ''){
               return true
            }
        }
        return false
    }

    const isLoading = ref<boolean>(false) //loading state

    const {mutate:authenticate} = useMutation(authenticateUser, ()=>({
        variables:{
            username:loginFormInput.username,
            password:loginFormInput.password
        }
    }))

    const authenticatStatus = ref<boolean | null>(null) //authentication state

    const router = useRouter();

    const handleAuthentication = async()=>{
        if(hasErrors() === true){
            ""
        }else{
            try{

                isLoading.value = true

                const response = await authenticate()

                if(response?.data.authenticateUser.Messages === 'Invalid username or password'){
                    
                    authenticatStatus.value = response?.data.authenticateUser.success
                    
                }else if(response?.data.authenticateUser.Messages === 'Authentication successful'){
                  
                    authenticatStatus.value = response?.data.authenticateUser.success

                    if (authenticatStatus.value === true) {
                        setTimeout(()=>{
                            router.push('/dashboard'); // Redirect to the dashboard after successful authentication
                        }, 5000)
                      }
                  
                }
    
            }catch(e:any){

                console.error(e)

            }finally{

                isLoading.value = false
            }
        }
    }


    return {validate, hasErrors, handleAuthentication, loginFormInput, loginErroInput, isLoading, authenticatStatus}
})