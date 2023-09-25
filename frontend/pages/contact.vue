<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <section
      id="contact"
      class="grid grid-rows-5 sm:grid-rows-3 sm:grid-cols-2 2xl:grid-rows-2 2xl:grid-cols-4 items-center justify-center text-white gap-5 h-full break-all pb-16"
    >
      <h1
        class="text-white text-center text-5xl sm:text-6xl lg:text-7xl 2xl:text-[80px] font-black py-20 sm:col-span-2 2xl:col-span-4"
      >
        Contacts
      </h1>
      <div
        class="flex flex-col items-center justify-center w-full h-full gap-6 text-5xl sm:text-6xl lg:text-7xl 2xl:text-[80px] font-black"
      >
        <font-awesome-icon :icon="'mobile-screen'" class="text-emerald-400" />
        <p class="text-xl sm:text-2xl lg:text-3xl opacity-70">
          +55 13 97411 2148
        </p>
      </div>
      <div
        class="flex flex-col items-center justify-center w-full h-full gap-6 text-5xl sm:text-6xl lg:text-7xl 2xl:text-[80px] font-black"
      >
        <font-awesome-icon :icon="'envelope'" class="text-emerald-400" />
        <p class="text-xl sm:text-2xl lg:text-3xl opacity-70">
          hcaio370@gmail.com
        </p>
      </div>
      <div
        class="flex flex-col items-center justify-center w-full h-full gap-6 text-5xl sm:text-6xl lg:text-7xl 2xl:text-[80px] font-black"
      >
        <font-awesome-icon
          :icon="'fa-brands fa-github'"
          class="text-emerald-400"
        />
        <a
          class="text-xl sm:text-2xl lg:text-3xl opacity-70"
          href="https://github.com/abysswalkerCaio"
          target="_blank"
          >GitHub</a
        >
      </div>
      <div
        class="flex flex-col items-center justify-center w-full h-full gap-6 text-5xl sm:text-6xl lg:text-7xl 2xl:text-[80px] font-black"
      >
        <font-awesome-icon
          :icon="'fa-brands fa-linkedin'"
          class="text-emerald-400"
        />
        <a
          class="text-xl sm:text-2xl lg:text-3xl opacity-70"
          href="https://www.linkedin.com/in/caio-costa-383a3b227/"
          target="_blank"
          >LinkedIn</a
        >
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      title: "Portfolio by Caio Costa - Contact",
    };
  },
};
</script>
