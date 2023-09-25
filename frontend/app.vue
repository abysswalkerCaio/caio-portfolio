<template>
  <div
    class="min-h-screen bg-gradient-to-r from-zinc-800 from-50% to-zinc-900 to-100% font-roboto grid grid-rows-[55px_55px_1fr] lg:grid-rows-[1fr] lg:grid-cols-[175px_1fr]"
  >
    <Header class="lg:hidden"></Header>
    <Navbar></Navbar>
    <NuxtPage
      class="bg-gradient-to-r from-zinc-800 from-50% to-zinc-900 to-100% pl-10 pr-4"
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
}
</style>
