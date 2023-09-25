<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <NuxtLayout>
      <div
        class="flex flex-col gap-4 min-h-screen w-full items-center justify-center font-roboto bg-zinc-950 px-4"
      >
        <h1
          class="text-5xl sm:text-6xl lg:text-7xl 2xl:text-[80px] font-black text-emerald-400"
        >
          Ops!
        </h1>
        <p class="text-white opacity-50">
          You didn't break the internet, but I can't find what you're looking
          for.
        </p>
        <NuxtLink
          :to="'/'"
          class="text-emerald-400 text-center border-2 border-emerald-400 transition ease-out hover:bg-emerald-950 rounded-xl p-3 w-32"
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
    };
  },
};
</script>
