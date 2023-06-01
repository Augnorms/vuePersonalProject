<template>
  <div>
    <input
      :type="inputType"
      :name="describe"
      v-bind="$attrs"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  props: {
    inputType: {
      type: String,
      default: ""
    },
    describe: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    modelValue: {
      type: [String, Number],
      default: ""
    }
  },
  setup(_, { emit }) {
    const handleInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      emit('update:modelValue', target.value);
    };

    return {
      handleInput
    };
  }
});
</script>

