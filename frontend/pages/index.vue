<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <div class="grid grid-cols-1 break-all">
      <div class="bg-zinc-950 text-white px-10 py-16">
        <section id="about" class="grid gap-y-5" v-for="aboutContent in about">
          <p class="font-roboto-mono text-emerald-400">Hi, my name is</p>
          <h1 class="text-4xl font-roboto-mono font-black">
            {{ aboutContent.name }}.
          </h1>
          <h1 class="text-2xl font-roboto-mono font-extrabold opacity-80">
            I create things for the web.
          </h1>
          <p class="font-roboto-mono opacity-50">{{ aboutContent.activity }}</p>
          <p class="opacity-60">{{ aboutContent.description }}</p>
        </section>
      </div>
      <div class="bg-zinc-800 text-white px-10 py-16">
        <section id="experience" class="grid gap-12">
          <h1 class="text-center text-5xl font-roboto-mono font-black">
            Career
          </h1>
          <div
            class="grid gap-5 border-solid border-b-4 border-b-emerald-400 last:border-none"
            v-for="careerContent in career"
          >
            <p class="text-xl font-bold opacity-80">
              {{ careerContent.status }}
            </p>
            <p class="text-xl font-bold opacity-80">
              {{ careerContent.position }}
            </p>
            <p class="text-lg font-medium opacity-75">
              {{ careerContent.company }}
            </p>
            <ul
              class="list-disc ml-6 last:mb-4 marker:text-emerald-400"
              v-for="contributionContent in careerContent.contribution"
            >
              <li class="text-neutral-400">
                {{ contributionContent.activity }}
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div class="bg-zinc-950 text-white">
        <section id="projects">
          <h1>Projects</h1>
        </section>
      </div>
      <div class="bg-zinc-800 text-white px-10 py-16">
        <section
          id="contact"
          class="grid grid-rols-3 grid-cols-2 gap-14"
          v-for="contactContent in contact"
        >
          <h1
            class="col-span-2 text-center text-5xl font-roboto-mono font-black"
          >
            Contacts
          </h1>
          <div class="flex flex-col items-center gap-5">
            <h2 class="text-3xl font-roboto-mono font-extrabold opacity-80">
              Phone
            </h2>
            <font-awesome-icon
              class="text-3xl text-emerald-400"
              :icon="'fa-solid fa-mobile-screen'"
            />
          </div>
          <div class="flex flex-col items-center gap-5">
            <h2 class="text-3xl font-roboto-mono font-extrabold opacity-80">
              Email
            </h2>
            <font-awesome-icon
              class="text-3xl text-emerald-400"
              :icon="'fa-solid fa-envelope'"
            />
          </div>
          <div class="flex flex-col items-center">
            <p class="opacity-70">{{ contactContent.phone }}</p>
          </div>
          <div class="flex flex-col items-center">
            <p class="opacity-70">{{ contactContent.email }}</p>
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
      title: "Portfolio by Caio Costa",
      about: [
        {
          name: "Caio Costa",
          activity: "Fullstack Developer Vue.js | Nuxt.js / Laravel",
          description:
            "Intern with great desire and spontaneity for knowledge, passionate about the technology area.\
            I helped to design and execute several changes to the screens in the main system of the secretary where I work,\
            along with the addition of several new features.\
            Currently, I'm focusing on developing my skills with Nuxt.js and Laravel.",
        },
      ],
      career: [
        {
          status: "Current job",
          company: "Prefeitura Municipal de Santos",
          position: "Systems Analyst Intern",
          contribution: [
            {
              activity:
                "Updates to the Dados abertos system admin value entry portal screens.",
            },
            {
              activity:
                "REST APIs consumption and addition of various functionalities for the\
                Dados abertos system admin value entry portal.",
            },
            {
              activity:
                "Creation of the main layout and login for the Carta de serviços system with React library.",
            },
            {
              activity:
                "Creation of the Model and Controller using the Laravel framework for the Parliamentary Amendments,\
              Councilor and Payment Processes tables,\
              along with the views creation for each one and implementation in the frontend using Vue.js and axios for handling requests.",
            },
          ],
        },
      ],
      contact: [
        {
          phone: "+55 13 97411 2148",
          email: "hcaio370@gmail.com",
        },
      ],
    };
  },
};
</script>
