<template>
  <div
    class="min-h-screen font-roboto grid grid-rows-[55px_55px_1fr_100px] lg:grid-rows-[1fr_100px] lg:grid-cols-[175px_1fr]"
  >
    <Header class="lg:hidden"></Header>
    <Navbar></Navbar>
    <div
      class="container sm:min-w-full md:min-w-full lg:min-w-full lg:row-start-1 lg:col-start-2 xl:min-w-full 2xl:min-w-full"
    >
      <NuxtPage></NuxtPage>
    </div>
    <Footer class="lg:row-start-2 lg:col-span-2"></Footer>
  </div>
</template>
