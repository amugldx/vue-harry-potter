<template>
  <div>
    <header class="mt-24 text-center">
      <h1 class="text-3xl font-bold">Harry Potter Wiki</h1>
      <h3 class="">Choose from options below</h3>
    </header>
    <nav>
      <OptionsList />
    </nav>
    <main class="flex flex-row flex-wrap items-center mx-5 text-xs mt-14">
      <div
        class="m-1 text-xs text-center text-black"
        v-for="ch in getCharacters"
        :key="ch.name"
      >
        <CharCard :ch="ch" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import CharCard from "@/components/HomePage/CharCard.vue";
import OptionsList from "@/components/HomePage/OptionsList.vue";
import { useHogwartsStore } from "@/stores/hogwarts";
import { storeToRefs } from "pinia";

const hogwartsStore = useHogwartsStore();
const { getCharacters } = storeToRefs(hogwartsStore);
</script>
