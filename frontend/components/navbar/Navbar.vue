<template>
  <nav
    class="bg-zinc-900 lg:bg-black text-white flex items-center justify-between px-3 sticky top-0 lg:items-start lg:justify-center lg:px-0 z-10"
  >
    <div
      class="flex items-center flex-wrap gap-4 w-full h-full opacity-70 lg:hidden"
    >
      <a class="cursor-pointer h-full" href="#about">
        <div
          class="h-full w-14 flex items-center justify-center border-b-4 rounded-b-sm border-transparent transition ease-in-out hover:border-emerald-400"
        >
          About
        </div>
      </a>
      <a class="cursor-pointer h-full" href="#experience">
        <div
          class="h-full w-14 flex items-center justify-center border-b-4 rounded-b-sm border-transparent transition ease-in-out hover:border-emerald-400"
        >
          Career
        </div>
      </a>
      <a class="cursor-pointer h-full" href="#projects">
        <div
          class="h-full w-14 flex items-center justify-center border-b-4 rounded-b-sm border-transparent transition ease-in-out hover:border-emerald-400"
        >
          Projects
        </div>
      </a>
    </div>
    <a class="cursor-pointer h-full lg:hidden" href="#contact">
      <div
        class="h-full w-14 flex items-center justify-center border-b-4 rounded-b-sm border-transparent opacity-70 transition ease-in-out hover:border-emerald-400 lg:hidden"
      >
        Contact
      </div>
    </a>
    <div
      class="max-[1023px]:hidden sticky top-0 flex flex-col items-center justify-center w-full"
    >
      <div class="py-10 w-full flex items-center justify-center bg-zinc-900">
        <h1 class="text-2xl font-roboto-mono font-black">Caio Costa</h1>
      </div>
      <ul class="flex flex-col items-center justify-start mt-14 w-full">
        <li
          class="w-full flex justify-center border-solid border-y-2 border-zinc-800 py-5"
        >
          <a class="transition ease-in-out hover:text-emerald-400" href="#about"
            >About</a
          >
        </li>
        <li class="w-full flex justify-center py-5">
          <a
            class="transition ease-in-out hover:text-emerald-400"
            href="#experience"
            >Career</a
          >
        </li>
        <li
          class="w-full flex justify-center border-solid border-t-2 border-zinc-800 py-5"
        >
          <a
            class="transition ease-in-out hover:text-emerald-400"
            href="#projects"
            >Projects</a
          >
        </li>
        <li
          class="w-full flex justify-center border-solid border-y-2 border-zinc-800 py-5"
        >
          <a
            class="transition ease-in-out hover:text-emerald-400"
            href="#contact"
            >Contacts</a
          >
        </li>
      </ul>
      <div class="flex mt-4 justify-between w-full px-10">
        <a
          class="cursor-default"
          href="https://github.com/abysswalkerCaio"
          target="_blank"
        >
          <font-awesome-icon
            class="cursor-pointer fa-fw text-2xl transition ease-in-out hover:text-emerald-400"
            :icon="'fa-brands fa-github'"
          />
        </a>
        <a
          class="cursor-default"
          href="https://www.linkedin.com/in/caio-costa-383a3b227/"
          target="_blank"
        >
          <font-awesome-icon
            class="cursor-pointer fa-fw text-2xl transition ease-in-out hover:text-emerald-400"
            :icon="'fa-brands fa-linkedin'"
          />
        </a>
      </div>
    </div>
  </nav>
</template>
