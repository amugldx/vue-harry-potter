import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

import type { Hogwarts } from "../types/hogwarts";

export const useHogwartsStore = defineStore("hogwarts", () => {
  const charactersList = ref<Hogwarts[]>();

  const fetchCharacters = async (url: string) => {
    const response = await axios.get<Hogwarts[]>(url);
    charactersList.value = response.data;
  };

  const getCharacters = computed(() => {
    return charactersList.value;
  });

  return { getCharacters, fetchCharacters };
});
