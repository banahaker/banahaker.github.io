<script setup lang="ts">
import Navbar from "./components/Global/Navbar.vue";
</script>

<template>
  <Navbar></Navbar>
  <RouterView></RouterView>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap");
* {
  font-family: "Noto Sans TC", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
