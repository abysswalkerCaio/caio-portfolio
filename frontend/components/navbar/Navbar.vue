<template>
  <nav
    class="bg-zinc-900 lg:bg-zinc-900 text-white flex items-center justify-between px-3 sticky top-0 z-10 lg:items-start lg:justify-center lg:px-0"
  >
    <div class="flex items-center flex-wrap gap-4 w-full h-full lg:hidden">
      <NuxtLink
        class="h-full w-14 flex items-center justify-center border-b-4 rounded-b-sm border-transparent transition ease-in-out hover:border-emerald-400 cursor-pointer opacity-70"
        :to="'/'"
        >About</NuxtLink
      >
      <NuxtLink
        class="h-full w-14 flex items-center justify-center border-b-4 rounded-b-sm border-transparent transition ease-in-out hover:border-emerald-400 cursor-pointer opacity-70"
        :to="'/career'"
        >Career</NuxtLink
      >
      <NuxtLink
        class="h-full w-14 flex items-center justify-center border-b-4 rounded-b-sm border-transparent transition ease-in-out hover:border-emerald-400 cursor-pointer opacity-70"
        :to="'/projects'"
        >Projects</NuxtLink
      >
    </div>
    <NuxtLink
      class="h-full w-14 flex items-center justify-center border-b-4 rounded-b-sm border-transparent transition ease-in-out hover:border-emerald-400 cursor-pointer opacity-70 lg:hidden"
      :to="'/contact'"
      >Contact</NuxtLink
    >
    <div
      class="max-[1023px]:hidden sticky top-0 flex flex-col items-center justify-center w-full"
    >
      <div
        class="py-10 w-full flex flex-col items-center justify-center gap-5 bg-zinc-950"
      >
        <h1 class="text-2xl font-black">Caio Costa</h1>
        <p class="opacity-70 font-semibold">Fullstack Developer</p>
      </div>
      <ul class="flex flex-col items-center justify-start w-full">
        <li
          class="w-full flex justify-center border-solid border-y-2 border-zinc-800 py-5"
        >
          <NuxtLink
            class="transition ease-in-out hover:text-emerald-400"
            :to="'/'"
            >About</NuxtLink
          >
        </li>
        <li class="w-full flex justify-center py-5">
          <NuxtLink
            class="transition ease-in-out hover:text-emerald-400"
            :to="'/career'"
            >Career</NuxtLink
          >
        </li>
        <li
          class="w-full flex justify-center border-solid border-t-2 border-zinc-800 py-5"
        >
          <NuxtLink
            class="transition ease-in-out hover:text-emerald-400"
            :to="'/projects'"
            >Projects</NuxtLink
          >
        </li>
        <li
          class="w-full flex justify-center border-solid border-y-2 border-zinc-800 py-5"
        >
          <NuxtLink
            class="transition ease-in-out hover:text-emerald-400"
            :to="'/contact'"
            >Contact</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
