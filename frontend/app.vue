<template>
  <div
    class="min-h-screen bg-gradient-to-r from-zinc-800 from-50% to-zinc-900 to-100% font-roboto grid grid-rows-[55px_55px_1fr] md:grid-rows-[1fr] md:grid-cols-[175px_1fr]"
  >
    <Header class="md:hidden"></Header>
    <Navbar></Navbar>
    <NuxtPage
      class="bg-gradient-to-r from-zinc-800 from-50% to-zinc-900 to-100% pl-4 pr-4 md:pl-10 md:pr-4"
    ></NuxtPage>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
