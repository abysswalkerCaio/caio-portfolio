<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <NuxtLayout>
      <div
        class="font-roboto flex flex-col gap-4 min-h-screen w-full items-center justify-center bg-zinc-950 px-4"
      >
        <h1 class="text-6xl text-emerald-400">404</h1>
        <p class="text-white opacity-50">
          {{ message }}
        </p>
        <NuxtLink
          :to="'/'"
          class="text-emerald-400 text-center border-2 border-emerald-500 hover:bg-emerald-950 rounded-xl p-3 w-32"
        >
          Go Home
        </NuxtLink>
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      title: "There is something wrong!",
      name: "404",
      message:
        "You didn't break the internet, but I can't find what you're looking for.",
    };
  },
};
</script>
