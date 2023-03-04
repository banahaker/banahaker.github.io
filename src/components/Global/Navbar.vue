<script lang="ts" setup>
import { ref } from "vue";

interface ILink {
  title: string;
  router: string;
}

const linkList: Array<ILink> = [
  {
    title: "Home",
    router: "/",
  },
  {
    title: "About",
    router: "/about",
  },
  {
    title: "Resume",
    router: "/resume",
  },
  {
    title: "Contact",
    router: "/contact",
  },
];
</script>

<template>
  <div class="Navbar">
    <div class="title">Lazp Yeh</div>
    <nav class="rwd-max">
      <RouterLink :to="item.router" v-for="item in linkList">{{
        item.title
      }}</RouterLink>
    </nav>
    <nav class="rwd-min">
      <input type="checkbox" id="toggleMenu" style="display: none" />
      <label for="toggleMenu" style="cursor: pointer">
        <svg viewBox="0 0 100 80" width="20" height="20">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </label>
      <div class="wrap">
        <RouterLink :to="item.router" v-for="item in linkList">{{
          item.title
        }}</RouterLink>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
@import "../../scss/global.scss";

.Navbar {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    text-transform: uppercase;
    font-weight: 800;
    font-size: medium;
    letter-spacing: 3px;
    margin: 20px 10px;
    padding: 0 10px;

    border-right: 1px solid #b9b9b9;
  }

  nav {
    a {
      text-transform: uppercase;
      font-size: large;
      text-decoration: none;
      color: #5a5a5a;
      font-weight: 200;
      font-size: 14px;
      padding: 0 10px 0 12px;
      letter-spacing: 3px;
      border: none;

      &:hover {
        color: #04a799;
      }
    }

    &.rwd-max {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 20px;

      @include pad {
        display: none;
      }
    }

    &.rwd-min {
      display: none;
      padding: 0 10px;

      #toggleMenu:checked {
        & ~ .wrap {
          right: 0;
        }
      }

      & > .wrap {
        display: flex;
        position: fixed;
        top: 64px;
        right: -100%;
        background-color: #ffffff;
        flex-direction: column;
        padding: 50px;
        height: 100vh;
        gap: 50px;
      }

      @include pad {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
