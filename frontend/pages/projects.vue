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
        <div
          class="anime-world flex flex-shrink-0 flex-col items-center gap-5 border-solid border-2 text-center font-roboto-mono border-emerald-400 rounded-xl w-[280px] h-[250px] min-[500px]:w-[450px] p-6"
        >
          <button><p class="disabled:opacity-10">Coming soon...</p></button>
        </div>
        <div class="flex flex-col h-full w-full sm:w-3/4 md:w-2/4">
          <p
            class="text-emerald-400 text-center text-xl font-roboto-mono font-bold"
          >
            Anime World
          </p>
          <p class="w-full mt-6 opacity-70 text-center">
            List of different animes with their respective characters
            categorized by their factions.
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

<style>
.anime-world {
  background-image: url("../assets/images/anime-world-banner.png");
  background-size: 100% 100%;
  object-fit: scale-down;
}
</style>
