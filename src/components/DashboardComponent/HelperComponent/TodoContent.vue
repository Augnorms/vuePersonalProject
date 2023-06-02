<template>
    <div class="w-full h-[100%] shadow-2xl rounded-lg">

        <TodoAppContent /> <!--your todo components here-->
        
    </div>
</template>

<script lang="ts">
import TodoAppContent from '../../../TodoAppComponent/TodoAppContent.vue';

export default {
    components:{
        TodoAppContent
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>