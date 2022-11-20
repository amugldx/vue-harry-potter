<template>
  <ul class="flex flex-row flex-wrap mx-5 space-x-1 text-xs mt-14">
    <li
      class="nav-item"
      @click="fetchCharacters('https://hp-api.herokuapp.com/api/characters')"
    >
      All Characters
    </li>
    <li
      class="nav-item"
      @click="
        fetchCharacters('https://hp-api.herokuapp.com/api/characters/students')
      "
    >
      Students
    </li>
    <li
      class="nav-item"
      @click="
        fetchCharacters('https://hp-api.herokuapp.com/api/characters/staff')
      "
    >
      Staff
    </li>
    <li
      class="nav-item"
      @click="
        fetchCharacters(
          'https://hp-api.herokuapp.com/api/characters/house/gryffindor'
        )
      "
    >
      Gryffindor
    </li>
    <li
      class="nav-item"
      @click="
        fetchCharacters(
          'https://hp-api.herokuapp.com/api/characters/house/slytherin'
        )
      "
    >
      Slytherin
    </li>
    <li
      class="nav-item"
      @click="
        fetchCharacters(
          'https://hp-api.herokuapp.com/api/characters/house/hufflepuff'
        )
      "
    >
      Hufflepuff
    </li>
    <li
      class="nav-item"
      @click="
        fetchCharacters(
          'https://hp-api.herokuapp.com/api/characters/house/ravenclaw'
        )
      "
    >
      Ravenclaw
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useHogwartsStore } from "@/stores/hogwarts";

const { fetchCharacters } = useHogwartsStore();
</script>

<style>
.nav-item {
  @apply bg-appPink text-black rounded-full text-center px-6 py-1 cursor-pointer mb-2;
}
</style>
