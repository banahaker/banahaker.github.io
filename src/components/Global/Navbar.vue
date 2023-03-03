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
    <nav>
      <RouterLink :to="item.router" v-for="item in linkList">{{
        item.title
      }}</RouterLink>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
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
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 20px;

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
  }
}
</style>
