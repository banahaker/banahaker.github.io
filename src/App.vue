<script setup lang="ts">
import headVue from "./components/head.vue";
import skillsVue from './components/Skills.vue';
import aboutMeVue from "./components/aboutMe.vue";
import projectVue from "./components/project.vue";
import contactMeVue from "./components/contactMe.vue";
</script>

<template>
  <headVue></headVue>
  <aboutMeVue></aboutMeVue>
  <projectVue></projectVue>
  <skillsVue></skillsVue>
  <contactMeVue></contactMeVue>
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
