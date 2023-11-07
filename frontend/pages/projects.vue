<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <section
      id="projects"
      class="flex flex-col pt-20 pb-20 text-white break-words gap-5 h-full"
    >
      <div class="flex flex-col gap-5 items-center justify-center">
        <div class="flex flex-col items-center h-full w-fit-content">
          <NuxtLink
            class="flex justify-center"
            to="https://anime-world-abysswalkercaio.vercel.app/"
            target="_blank"
          >
            <span
              class="absolute mt-4 text-blue-400 text-sm min-[450px]:text-lg"
              >In development...</span
            >
            <img
              class="object-scale-down w-full max-h-[350px] border-2 rounded-2xl border-emerald-400"
              src="../img/anime-world-full.png"
              alt="Anime World project banner"
            />
          </NuxtLink>
          <p
            class="text-emerald-400 mt-5 text-center text-xl font-roboto-mono font-bold"
          >
            Anime World
          </p>
          <p class="w-full mt-6 opacity-70 text-center">
            List of animes and all their related elements, using Nuxt.js with
            Jikan - Unofficial MyAnimeList API.
          </p>
          <div
            class="flex flex-wrap justify-center gap-2 mt-4 text-emerald-400"
          >
            <p
              class="border-solid border-2 border-emerald-400 w-fit p-2 rounded-2xl"
            >
              HTML
            </p>
            <p
              class="border-solid border-2 border-emerald-400 w-fit p-2 rounded-2xl"
            >
              CSS
            </p>
            <p
              class="border-solid border-2 border-emerald-400 w-fit p-2 rounded-2xl"
            >
              JavaScript
            </p>
            <p
              class="border-solid border-2 border-emerald-400 w-fit p-2 rounded-2xl"
            >
              TypeScript
            </p>
            <p
              class="border-solid border-2 border-emerald-400 w-fit p-2 rounded-2xl"
            >
              Nuxt.js
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      title: "Portfolio by Caio Costa - Projects",
      anime: [
        {
          name: "Anime World",
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "PHP",
            "MySQL",
            "Laravel",
            "Nuxt.js",
          ],
        },
      ],
    };
  },
};
</script>
