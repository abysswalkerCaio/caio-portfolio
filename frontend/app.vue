<template>
  <div class="min-h-screen grid grid-rows-[60px_1fr_100px] grid-cols-1">
    <Header></Header>
    <div class="container max-w-full">
      <slot></slot>
    </div>
    <Footer></Footer>
  </div>
</template>
