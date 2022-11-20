<template>
  <div class="p-3 rounded bg-appLightBlue w-[210px]">
    <div v-if="ch.image">
      <img
        class="h-[250px] w-[200px] bg-cover"
        :src="ch.image"
        :alt="ch.name"
      />
    </div>
    <div class="h-[250px] w-[180px] bg-cover" v-else>No Image</div>
    <h4 class="mt-4 font-bold">
      Name: <span class="font-normal">{{ ch.name ? ch.name : "Unknown" }}</span>
    </h4>
    <p class="font-bold">
      Actor:
      <span class="font-normal">{{ ch.actor ? ch.actor : "Unknown" }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Hogwarts } from "@/types/hogwarts";

defineProps<{
  ch: Hogwarts;
}>();
</script>
