<template>
  <div class="min-h-screen grid grid-rows-[55px_55px_1fr_100px] grid-cols-1 font-roboto">
    <Header></Header>
    <Navbar></Navbar>
    <div
      class="container sm:min-w-full md:min-w-full lg:min-w-full xl:min-w-full 2xl:min-w-full"
    >
      <NuxtPage></NuxtPage>
      <slot></slot>
    </div>
    <Footer></Footer>
  </div>
</template>
