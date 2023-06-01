<template>
    <div class="w-full flex max-sm:flex-wrap">

        <div class="max-sm:w-full w-[50%] max-sm:p-0 
             max-sm:pt-[0] max-sm:pb-[0]
             md:pt-[50px] lg:pt-[50px] xl:pt-[40px] 2xl:pt-[100px]
             ">

             <div class="w-full pl-4 pr-4" v-if="FormData.responseState !== null">

                <reusableAlert 
                  :message="FormData.responseState !== null? 'success' : 'Failed'"
                  :class="FormData.responseState !== null ? 'bg-[#3A5B22] text-[#fff] p-2 rounded text-[18px]' : 
                                         'bg-[red] text-[#fff] p-2 rounded text-[18px]'"
                />

             </div>  

             
           <div class=" max-sm:w-full md:w-full lg:w-full xl:w-[60%] m-[auto] p-[10px]">
              <p class="text-[32px] font-[500] max-sm:mb-[62.53px]  md:mb-[62.53px] lg:mb-[10.53px]  
                   xl:mb-[10px] 
                   2xl:mb-[62.53px] 
              ">
                Get Started Now
              </p>

              <div class="mb-[24.7px] xl:mb-[14.7px] 2xl:mb-[24.7px]">
                  <div class="w-full flex">
                      <div class="w-[30%]">
                        <label class="text-[14px] font-[500] font-[Poppins]">Name</label>
                      </div> 

                      <div class="w-[70%] text-end">
                        <label class="text-[14px] font-[500] font-[Poppins] text-[red]">
                            {{ FormData.signupFormErrors.name }}
                        </label>
                      </div>
                  </div>
                  <div class="w-full">
                      <reusableInput 
                        type="text"
                        name="name"
                        placeholder="Enter Your name"
                        class="w-full placeholder:text-[10px] 
                        placeholder:font-[500] 
                        placeholder:font-[Poppins] 
                        placeholder:text-[#D9D9D9]
                        p-[10px] border-[1px] border-[#D9D9D9]
                        text-[#D9D9D9] rounded-[10px]
                        "
                        v-model="FormData.signupFormInput.name"
                        :style="FormData.signupFormErrors.name ? {border:'2px solid red'} : '' "
                      />
                  </div>
                  
              </div>

              <div class="mb-[24.7px] xl:mb-[14.7px] 2xl:mb-[24.7px]">
                <div class="w-full flex">
                      <div class="w-[30%]">
                        <label class="text-[14px] font-[500] font-[Poppins]">Username</label>
                      </div> 

                      <div class="w-[70%] text-end">
                        <label class="text-[14px] font-[500] font-[Poppins] text-[red]">
                            {{ FormData.signupFormErrors.username }}
                        </label>
                      </div>
                  </div>
                  <div class="w-full">
                      <reusableInput 
                        type="text"
                        name="username"
                        placeholder="Enter Your username"
                        class="w-full placeholder:text-[10px] 
                        placeholder:font-[500] 
                        placeholder:font-[Poppins] 
                        placeholder:text-[#D9D9D9]
                        p-[10px] border-[1px] border-[#D9D9D9]
                        text-[#D9D9D9] rounded-[10px]
                        "
                        v-model="FormData.signupFormInput.username"
                        :style="FormData.signupFormErrors.username ? {border:'2px solid red'} : ''"
                      />
                  </div>
                 
              </div>

              <div class="mb-[24.7px] xl:mb-[14.7px] 2xl:mb-[24.7px]">
                <div class="w-full flex">
                      <div class="w-[30%]">
                        <label class="text-[14px] font-[500] font-[Poppins]">Email</label>
                      </div> 

                      <div class="w-[70%] text-end">
                        <label class="text-[14px] font-[500] font-[Poppins] text-[red]">
                            {{ FormData.signupFormErrors.email }}
                        </label>
                      </div>
                  </div>
                  <div class="w-full">
                      <reusableInput 
                        type="text"
                        name="email"
                        placeholder="Enter Your email"
                        class="w-full placeholder:text-[10px] 
                        placeholder:font-[500] 
                        placeholder:font-[Poppins] 
                        placeholder:text-[#D9D9D9]
                        p-[10px] border-[1px] border-[#D9D9D9]
                        text-[#D9D9D9] rounded-[10px]
                        "
                        v-model="FormData.signupFormInput.email"
                        :style="FormData.signupFormErrors.email ? {border:'2px solid red'} : ''"
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
                            {{ FormData.signupFormErrors.password }}
                        </label>
                      </div>
                  </div>
                  <div class="w-full">
                      <reusableInput 
                        type="password"
                        name="password"
                        placeholder="Enter Your password"
                        class="w-full placeholder:text-[10px] 
                        placeholder:font-[500] 
                        placeholder:font-[Poppins] 
                        placeholder:text-[#D9D9D9]
                        p-[10px] border-[1px] border-[#D9D9D9]
                        text-[#D9D9D9] rounded-[10px]
                        "
                        v-model="FormData.signupFormInput.password"
                        :style="FormData.signupFormErrors.password ? {border:'2px solid red'} : ''"
                      />
                  </div>
                  
              </div>

              <div class="mb-[24.7px] xl:mb-[14.7px] 2xl:mb-[24.7px]">
                <div class="w-full flex">
                      <div class="w-[30%]">
                        <label class="text-[14px] font-[500] font-[Poppins]">Confirm Password</label>
                      </div> 

                      <div class="w-[70%] text-end">
                        <label class="text-[14px] font-[500] font-[Poppins] text-[red]">
                            {{ FormData.signupFormErrors.confirmPassword }}
                        </label>
                      </div>
                  </div>
                  <div class="w-full">
                      <reusableInput 
                        type="password"
                        name="confirmPassword"
                        placeholder="Enter Your password"
                        class="w-full placeholder:text-[10px] 
                        placeholder:font-[500] 
                        placeholder:font-[Poppins] 
                        placeholder:text-[#D9D9D9]
                        p-[10px] border-[1px] border-[#D9D9D9]
                        text-[#D9D9D9] rounded-[10px]
                        "
                        v-model="FormData.signupFormInput.confirmPassword"
                        :style="FormData.signupFormErrors.confirmPassword ? {border:'2px solid red'} : ''"
                      />
                  </div>
                 
              </div>

              <div class="w-full">
                 
                  <button class="w-full p-[10px] bg-[#3A5B22] 
                          rounded-[10px] text-[#fff] font-[700]
                          space-x-10"
                    @click="FormData.handleCreateUser"      
                 >
                  
                     <i v-if="FormData.isLoading" class="pi pi-spin pi-spinner" style="font-size: 1.5rem"></i>
                    
                     <span class="text-center p-1">Register</span>

                  </button>
                 
              </div>

              <div class="w-full mt-3">

                 <p>Have an account? 
                     <span class="cursor-pointer text-[#0F3DDE] underline" @click="handleChangePage()">
                         Login
                     </span>
                 </p>
                 
              </div>

           </div>
 
        </div>


        <div class="max-sm:hidden w-[50%]">

            <img src="/images/login_signupLogo.svg" alt="left-image"
              class="w-full max-sm:h-auto h-screen object-cover"
            />
            
        </div>

    </div>
</template>

<script lang="ts">
import { watchEffect } from 'vue';
import reusableInput from '../../reusables/reusableInput.vue';
import reusableAlert from '../../reusables/reusableAlert.vue';
import { signupValidation } from '../../stores/validateSignup';

    export default {
        components:{
            reusableInput,
            reusableAlert
        },
        props:{
            handleChangePage:{
                type:Function,
                required:true
            },
            changePage:{
                type:Boolean,
                required:false
            }
        },
        setup(){

           const FormData = signupValidation() // data from pinia 

            watchEffect(()=>{
                FormData.validate('name')
                FormData.validate('username')
                FormData.validate('email')
                FormData.validate('password')
                FormData.validate('confirmPassword') 
            })

            // Watch for changes in FormData.responseState and show/hide the alert accordingly
          

            watchEffect(() => {
              // Hide the alert after 3 seconds (adjust the duration as needed)
              if (FormData.responseState) {
                setTimeout(() => {
                  FormData.responseState = null
                }, 3000);
              }
            });

            return{FormData,}
        }
    }
</script>


