<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <div class="grid grid-rows-[1fr_1fr_1fr_1fr] grid-cols-1 break-all">
      <div class="bg-zinc-950 text-white px-10 py-16">
        <section id="about" class="grid gap-y-5">
          <p class="font-roboto-mono text-emerald-400">Hi, my name is</p>
          <h1 class="text-4xl font-roboto-mono font-black">{{ name }}.</h1>
          <h1 class="text-2xl font-roboto-mono font-extrabold opacity-80">
            I create things for the web.
          </h1>
          <p class="font-roboto-mono opacity-50">{{ activity }}</p>
          <p class="opacity-60">{{ about }}</p>
        </section>
      </div>
      <div class="bg-zinc-800 text-white">
        <section id="experience">
          <h1>Experience</h1>
        </section>
      </div>
      <div class="bg-zinc-950 text-white">
        <section id="projects">
          <h1>Projects</h1>
        </section>
      </div>
      <div class="bg-zinc-800 text-white px-10 py-16">
        <section id="contact" class="grid grid-rols-3 grid-cols-2 gap-10">
          <h1
            class="col-span-2 text-center text-5xl font-roboto-mono font-extrabold"
          >
            Contact Me
          </h1>
          <div class="flex flex-col items-center gap-5">
            <h2 class="text-4xl font-roboto-mono font-black opacity-80">
              By Phone
            </h2>
            <font-awesome-icon
              class="text-4xl text-emerald-400"
              :icon="'fa-solid fa-mobile-screen'"
            />
          </div>
          <div class="flex flex-col items-center gap-5">
            <h2 class="text-4xl font-roboto-mono font-extrabold opacity-80">
              By E-mail
            </h2>
            <font-awesome-icon
              class="text-4xl text-emerald-400"
              :icon="'fa-solid fa-envelope'"
            />
          </div>
          <div class="flex flex-col items-center gap-1">
            <p class="opacity-75">Phone (Brazil):</p>
            <p class="opacity-70">{{ phone }}</p>
          </div>
          <div class="flex flex-col items-center gap-1">
            <p class="opacity-75">E-mail:</p>
            <p class="opacity-70">{{ email }}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      title: "Caio Costa",
      name: "Caio Costa",
      activity: "Fullstack Developer Vue.js | Nuxt.js / Laravel",
      about:
        "Intern with great desire and spontaneity for knowledge, passionate about the technology area. I helped to design and execute several changes to the screens in the main system of the secretary where I work, along with the addition of several new features. Currently, I'm focusing on developing my skills with Nuxt.js and Laravel.",
      phone: "+55 (13) 97411-2148",
      email: "hcaio370@gmail.com",
    };
  },
};
</script>
