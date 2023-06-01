// stores/sideBarSelect.ts
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSideBarContent = defineStore("sideBarContent", () => {
  const selected = ref<null | string>(null);

  const handleSelect = (target: string) => {
    selected.value = target;

  };

  return { handleSelect, selected };
});
