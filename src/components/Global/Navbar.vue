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

const toggleChecked = ref<boolean>(false);

function closeMenu() {
  toggleChecked.value = false;
}
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
      <input
        type="checkbox"
        id="toggleMenu"
        v-model="toggleChecked"
        style="display: none"
      />
      <label for="toggleMenu" style="cursor: pointer">
        <v-icon name="co-hamburger-menu" class="ham" scale="1.5" />
        <v-icon name="hi-solid-x" class="x-sign" scale="1.5" />
      </label>
      <div class="wrap">
        <RouterLink
          @click="closeMenu"
          :to="item.router"
          v-for="item in linkList"
          >{{ item.title }}</RouterLink
        >
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
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10000;

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
      label > .x-sign {
        display: none;
      }

      #toggleMenu:checked {
        & ~ .wrap {
          right: 0;
        }

        & ~ label > .ham {
          display: none;
        }

        & ~ label > .x-sign {
          display: block;
        }
      }

      & > .wrap {
        display: flex;
        position: fixed;
        top: 64px;
        right: -110%;
        background-color: #ffffff;
        flex-direction: column;
        padding: 50px 0 50px 60px;
        width: 100vw;
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
