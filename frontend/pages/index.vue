<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <section
      id="about"
      class="flex flex-col text-white break-words gap-5 pt-20"
    >
      <p class="text-emerald-400 font-roboto-mono font-medium lg:text-lg">
        Hi, my name is
      </p>
      <h1 class="text-5xl sm:text-6xl lg:text-7xl 2xl:text-[80px] font-black">
        Caio Costa.
      </h1>
      <p
        class="text-5xl sm:text-6xl lg:text-7xl 2xl:text-[80px] opacity-70 font-black"
      >
        I create things for the internet.
      </p>
      <p class="font-roboto-mono opacity-40 w-9/12 lg:w-3/5 lg:text-lg">
        Fullstack Vue.js | Nuxt.js / Laravel Developer
      </p>
      <p class="opacity-60 w-9/12 lg:w-3/5 lg:text-lg">
        Intern with great desire and spontaneity for knowledge, passionate about
        the technology area. I helped to design and execute several changes to
        the screens in the main system of the secretary where I work, along with
        the addition of several new features. Currently, I'm focusing on
        developing my skills with Nuxt.js and Laravel.
      </p>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      title: "Portfolio by Caio Costa",
    };
  },
};
</script>
