<script setup lang="ts">
import Navbar from "./components/Global/Navbar.vue";
import ProfilePanel from "./components/Global/ProfilePanel.vue";
import PageLayout from "./components/Layout/PageLayout.vue";
</script>

<template>
  <Navbar></Navbar>
  <div class="body">
    <ProfilePanel></ProfilePanel>
    <PageLayout>
      <RouterView></RouterView>
    </PageLayout>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap");
@import "./scss/global.scss";

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
  overflow-x: hidden;

  @include pad {
    flex-direction: column-reverse;
    align-items: center;

    padding: 24px;
  }
}
</style>
