<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <section
      id="career"
      class="flex flex-col text-white break-words pt-20 pb-5 gap-10 h-full"
    >
      <h1
        class="text-center text-5xl sm:text-6xl lg:text-7xl 2xl:text-[80px] font-black col-span-3"
      >
        Career
      </h1>
      <div class="border-solid border-l-4 border-emerald-800 ml-6">
        <div class="flex gap-2">
          <font-awesome-icon
            :icon="'briefcase'"
            class="bg-emerald-800 text-xl p-3"
          />
          <div class="flex flex-col justify-center pl-4">
            <p class="text-lg font-semibold">Fullstack Developer</p>
            <p class="text-lg font-medium">2022 - At the moment</p>
            <div class="flex w-full my-5">
              <div class="border-solid border-2 border-emerald-800 w-10"></div>
            </div>
            <p class="text-lg font-semibold">Intern</p>
            <ul
              class="flex flex-col marker:text-emerald-400 list-disc gap-3 ml-5 w-9/12 lg:w-8/12 xl:w-7/12"
            >
              <li>
                Updates to the Dados abertos system admin value entry portal
                screens.
              </li>
              <li>
                REST APIs consumption and addition of various functionalities
                for the Dados abertos system admin value entry portal.
              </li>
              <li>
                Creation of the main layout and login for the Carta de serviços
                system with React library.
              </li>
              <li>
                Creation of the Model and Controller using the Laravel framework
                for the Parliamentary Amendments, Councilor and Payment
                Processes tables, along with the views creation for each one and
                implementation in the frontend using Vue.js and axios for
                handling requests.
              </li>
            </ul>
            <div
              class="flex flex-wrap gap-2 mt-4 text-xs text-emerald-400 w-4/6 sm:w-3/6 md:2/6"
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
                PHP
              </p>
              <p
                class="border-solid border-2 border-emerald-400 w-fit p-2 rounded-2xl"
              >
                MySQL
              </p>
              <p
                class="border-solid border-2 border-emerald-400 w-fit p-2 rounded-2xl"
              >
                Laravel
              </p>
              <p
                class="border-solid border-2 border-emerald-400 w-fit p-2 rounded-2xl"
              >
                Vue.js
              </p>
            </div>
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
    };
  },
};
</script>
