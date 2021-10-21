<template>
  <div id="app">
    <transition name="scale" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<style>
@font-face {
  font-family: "Bocah";
  /* font-display: block; */
  src: local("Bocah"), url("./fonts/Bocah/Bocah.ttf") format("truetype");
}
#app {
  font-family: "Bocah";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
