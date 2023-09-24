<template>
  <div class="inline-block w-4/5 sm:w-5/6 md:w-11/12">
    <h1
      class="bg-emerald-400 rounded-t-md p-1 text-xl font-roboto-mono font-semibold"
    >
      {{ name }}
    </h1>
    <div
      class="border-solid border-4 rounded-b-md border-emerald-400 bg-zinc-200"
    >
      <div class="h-40 overflow-y-scroll no-scrollbar">
        <p class="p-2 opacity-80 font-medium">
          {{ description }}
        </p>
      </div>
      <div v-if="status === 'Coming soon...'" class="bg-yellow-600 p-2">
        <p class="font-roboto-mono text-white">
          {{ status }}
        </p>
      </div>
      <div v-else-if="status === 'In progress...'" class="bg-blue-500 p-2">
        <p class="font-roboto-mono text-white">
          {{ status }}
        </p>
      </div>
      <div v-else-if="status === 'Completed'" class="bg-green-500 p-2">
        <p class="font-roboto-mono text-white">
          {{ status }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ["name", "description", "status"],
};
</script>
