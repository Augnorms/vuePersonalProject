<template>
  <div class="w-full h-screen font-[Poppins]">
      <SignupComponent  v-if="!changePage" :handleChangePage="handleChangePage" :changePage="changePage"/>
      <LoginComponent v-if="changePage" :handleChangePage="handleChangePage" :changePage="changePage"/>
  </div>
</template>

<script lang="ts">
import SignupComponent from '../components/HomeComponent/SignupComponent.vue'
import LoginComponent from '../components/HomeComponent/LoginComponent.vue';
import { ref } from 'vue';

  export default {
    components:{
      SignupComponent,
      LoginComponent
    },
    setup(){

      const changePage = ref<boolean>(false)

      const handleChangePage = ()=>{
         changePage.value = !changePage.value
      }

      return{changePage, handleChangePage}
    }
  }
</script>

