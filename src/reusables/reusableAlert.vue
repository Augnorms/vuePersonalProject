<template>
    <div class="w-[100%] text-center" v-bind="$attrs">
         {{ message }}
    </div>
</template>

<script lang="ts">
    export default {

        props:{
           message:{
              type:String,
              default:""
           }
        },
        setup(){

            return{}
        }
        
    }
</script>

<style scoped>

</style>