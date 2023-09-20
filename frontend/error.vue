<template>
  <NuxtLayout>
    <div
      class="font-roboto flex flex-col gap-4 min-h-screen w-full items-center justify-center bg-zinc-950"
    >
      <h1 class="text-6xl font-bold text-emerald-400">404</h1>
      <p class="text-white opacity-50">
        {{ message }}
      </p>
      <NuxtLink @click.native="back()"
        ><button
          class="text-emerald-400 border-2 border-emerald-400 hover:bg-emerald-950 rounded-xl p-3 w-32"
        >
          Return
        </button></NuxtLink
      >
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: "404",
      message:
        "You didn't break the internet, but I can't find what you're looking for.",
    };
  },
  methods: {
    back() {
      const router = useRouter();
      router.go(-1);
    },
  },
};
</script>
