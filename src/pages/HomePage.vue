<script lang="ts" setup>
import PageTitle from "../components/Layout/PageTitle.vue";
import LazcoLogo from "../assets/lazco_logo.png";
</script>

<template>
  <PageTitle title="Overview" subtitle="Site for Introducing Lazp"></PageTitle>
  <div class="page overview">
    <div class="info page-section">
      <h3>Info</h3>
      <p>
        This is a personal website for Lazp Yeh written in Vite+Vue3. And the
        source code is public on
        <a
          target="_blank"
          href="https://github.com/banahaker/banahaker.github.io"
          >Github</a
        >, welcome to PR for advice.Feel free to learn more about me in
        <a href="/about">about</a>, and <a href="/resume">resume</a>, or
        <a href="/contact">contact</a> me.
      </p>
    </div>
    <div class="links page-section">
      <h3>Sponsors or Related Organization</h3>
      <div class="list">
        <a href="https://lipoic.com" target="_blank"
          ><img
            src="https://raw.githubusercontent.com/Lipoic/Lipoic-Assets/main/logo/banner.png"
            alt="Lipoic"
            aria-details="Lipoic"
        /></a>
        <a href="https://lazco.dev" target="_blank">
          <img :src="LazcoLogo" alt="Lazco" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/global.scss";

.links {
  & > .list {
    margin-top: 40px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 25px;

    @include pad {
      flex-direction: column;
      align-items: center;
    }

    a {
      border: none;
    }

    img {
      width: auto;
      height: 65px;
    }
  }
}
</style>
