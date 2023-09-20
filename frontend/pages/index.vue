<template>
  <div class="grid grid-rows-[1fr_1fr_1fr_1fr] grid-cols-1 break-all">
    <div class="bg-zinc-950 text-white px-10 py-16">
      <div id="about" class="grid gap-y-5">
        <p class="text-emerald-400 font-mono">Hi, my name is</p>
        <h1 class="text-5xl">{{ name }}.</h1>
        <h1 class="text-3xl opacity-80">I create things for the web.</h1>
        <p class="opacity-50">{{ activity }}</p>
        <p class="opacity-60">
          {{ about }}
        </p>
      </div>
    </div>
    <div class="bg-zinc-800 text-white">
      <section id="experience">
        <h1>Experience</h1>
      </section>
    </div>
    <div class="bg-zinc-950 text-white">
      <section id="skills">
        <h1>Skills</h1>
      </section>
    </div>
    <div class="bg-zinc-800 text-white">
      <section id="contact">
        <h1>Contact</h1>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: "Caio Costa",
      activity: "Fullstack Developer Vue.js / Laravel",
      about:
        "Intern with great desire and spontaneity for knowledge, passionate about the technology area. I helped to design and execute several changes to the screens in the main system of the secretary where I work, along with the addition of several new features. Currently, I'm focusing on developing my skills with Nuxt.js and Laravel.",
    };
  },
};
</script>
