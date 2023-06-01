<template>
    <div :class="['w-full flex max-sm:flex-wrap']">

      <div class="max-sm:w-full w-[50%] max-sm:p-0 max-sm:pt-[0] max-sm:pb-[0] md:pt-[50px] lg:pt-[50px] 
            xl:pt-[40px] 2xl:pt-[100px]">

           
            <div class="w-full pl-4 pr-4" v-if="loginFormData.authenticatStatus === true || 
            loginFormData.authenticatStatus === false">

                <reusableAlert 
                :message="loginFormData.authenticatStatus === true ? 'success' : 'Ooops sorry try again'"
                :class="loginFormData.authenticatStatus === true ? 'bg-[#3A5B22] text-[#fff] p-2 rounded text-[18px]' : 
                                        'bg-[crimson] text-[#fff] p-2 rounded text-[18px]'"
                />

            </div> 


        <div class="max-sm:w-full md:w-full lg:w-full xl:w-[60%] m-[auto] p-[10px]">
          <p class="text-[32px] font-[500] max-sm:mb-[62.53px] md:mb-[62.53px] lg:mb-[10.53px] xl:mb-[10px] 
          2xl:mb-[62.53px]">
            Welcome back <br />
            <span class="text-[18px] ">Enter your credentials to access your account</span>
          </p>
          
          <div class="mb-[24.7px] xl:mb-[14.7px] 2xl:mb-[24.7px]">
                   <div class="w-full flex">
                      <div class="w-[30%]">
                        <label class="text-[14px] font-[500] font-[Poppins]">Username</label>
                      </div> 

                      <div class="w-[70%] text-end">
                        <label class="text-[14px] font-[500] font-[Poppins] text-[red]">
                            {{ loginFormData.loginErroInput.username }}
                        </label>
                      </div>
                  </div>
            <div class="w-full">
              <reusableInput 
                type="text"
                name="username"
                placeholder="Enter Your username"
                class="w-full placeholder:text-[10px] placeholder:font-[500] placeholder:font-[Poppins] 
                placeholder:text-[#D9D9D9] p-[10px] border-[1px] border-[#D9D9D9] text-[#D9D9D9] 
                rounded-[10px]"
                v-model="loginFormData.loginFormInput.username"
              />
            </div>
          </div>
          
          <div class="mb-[24.7px] xl:mb-[14.7px] 2xl:mb-[24.7px]">
                   <div class="w-full flex">
                      <div class="w-[30%]">
                        <label class="text-[14px] font-[500] font-[Poppins]">Password</label>
                      </div> 

                      <div class="w-[70%] text-end">
                        <label class="text-[14px] font-[500] font-[Poppins] text-[red]">
                            {{ loginFormData.loginErroInput.password }}
                        </label>
                      </div>
                  </div>
            <div class="w-full">
              <reusableInput 
                type="password"
                name="password"
                placeholder="Enter Your password"
                class="w-full placeholder:text-[10px] placeholder:font-[500] placeholder:font-[Poppins]
                 placeholder:text-[#D9D9D9] p-[10px] border-[1px] border-[#D9D9D9] text-[#D9D9D9] 
                 rounded-[10px]"
                 v-model="loginFormData.loginFormInput.password"
                 :style="passwordMatch ? {border:'2px solid #3A5B22'} : ''"
              />
            </div>
          </div>
          
          <div class="mb-[24.7px] xl:mb-[14.7px] 2xl:mb-[24.7px]">
                   <div class="w-full flex">
                      <div class="w-[30%]">
                        <label class="text-[14px] font-[500] font-[Poppins]">ConfirmPassword</label>
                      </div> 

                      <div class="w-[70%] text-end">
                        <label class="text-[14px] font-[500] font-[Poppins] text-[red]">
                            {{ loginFormData.loginErroInput.confirmpassword }}
                        </label>
                      </div>
                  </div>
            <div class="w-full">
              <reusableInput 
                type="password"
                name="passwordtwo"
                placeholder="Enter Your password"
                class="w-full placeholder:text-[10px] placeholder:font-[500] placeholder:font-[Poppins] 
                placeholder:text-[#D9D9D9] p-[10px] border-[1px] border-[#D9D9D9] text-[#D9D9D9] 
                rounded-[10px]"
                v-model="loginFormData.loginFormInput.confirmpassword"
                :style="passwordMatch ? {border:'2px solid #3A5B22'} : ''"
              />
            </div>
          </div>
          
          <div class="w-full">
            <button class="w-full p-[10px] bg-[#3A5B22] rounded-[10px] text-[#fff] font-[700] flex"
            @click="loginFormData.handleAuthentication">
              <div v-if="loginFormData.isLoading" class="w-[20%]">
                <i class="pi pi-spin pi-spinner" style="font-size: 1.5rem"></i>
              </div>

              <div :style="loginFormData.isLoading ? {width:'80%'} : {width:'100%'}">
                Login
              </div>
            </button>
          </div>
          
          <div class="w-full mt-3">
            <p>No account? 
              <span class="cursor-pointer text-[#0F3DDE] underline" @click="handleChangePage()">
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
      
      <div class="max-sm:hidden w-[50%]">
        <img src="/images/login_signupLogo.svg" alt="left-image" class="w-full max-sm:h-auto h-screen 
        object-cover" />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, watchEffect } from 'vue';
  import reusableInput from '../../reusables/reusableInput.vue';
  import {loginValidation} from '../../stores/validateLogin' //from pinia store
  import reusableAlert from '../../reusables/reusableAlert.vue';


  
  export default {
    components: {
      reusableInput,
      reusableAlert
    },
    
    props: {
      handleChangePage: {
        type: Function,
        required: true
      },
      changePage: {
        type: Boolean,
        required: true
      }
    },
    
    setup() {
      
      const loginFormData = loginValidation()

      const passwordMatch = ref<boolean>(false)

      watchEffect(()=>{
        //use to validate
         loginFormData.validate('username')
         loginFormData.validate('password')
         loginFormData.validate('confirmpassword')

         //check password match
         if(loginFormData.loginFormInput.password === loginFormData.loginFormInput.confirmpassword
            && loginFormData.loginFormInput.password.length > 0 
            && loginFormData.loginFormInput.confirmpassword.length > 0
         ){

            passwordMatch.value = true
         }else{

            passwordMatch.value = false
         }
      })

      //clear message dialog when authentication fails
      watchEffect(()=>{
         if(loginFormData.authenticatStatus === false){
            setTimeout(()=>{
              loginFormData.authenticatStatus = null
            }, 2000)
         }
      })

       

       
      
      return {loginFormData, passwordMatch}
    }
  }
  </script>
  