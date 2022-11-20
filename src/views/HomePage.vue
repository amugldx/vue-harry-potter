<template>
  <div>
    <header class="mt-24 text-center">
      <h1 class="text-3xl font-bold">Harry Potter Wiki</h1>
      <h3 class="">Choose from options below</h3>
    </header>
    <nav>
      <OptionsList />
    </nav>
  </div>
</template>

<script setup lang="ts">
import OptionsList from "@/components/HomePage/OptionsList.vue";
</script>
