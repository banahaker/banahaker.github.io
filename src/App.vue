<script setup lang="ts">
import Navbar from "./components/Global/Navbar.vue";
import ProfilePanel from "./components/Global/ProfilePanel.vue";
</script>

<template>
  <Navbar></Navbar>
  <div class="body">
    <ProfilePanel></ProfilePanel>
    <RouterView></RouterView>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap");
* {
  font-family: "Noto Sans TC", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.body {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 48px;
}
</style>
