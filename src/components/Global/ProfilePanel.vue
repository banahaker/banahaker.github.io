<script lang="ts" setup>
import Avatar from "../../assets/logo_bana.png";
</script>

<template>
  <div class="profile">
    <div class="avatar">
      <img :src="Avatar" alt="Lazp yeh avatar online" loading="lazy" />
      <h1 class="title">Lazp Yeh</h1>
      <div class="email">
        <a href="mailto:lazpytb@gmail.com">lazpytb@gmail.com</a>
      </div>
    </div>
    <div class="bio">
      <h2>Bio</h2>
      <p>
        Hello! I'm Lazp. A Web Developer & Data Scientist from <b>Taiwan</b>.
        I'm co-founder and CEO of
        <a target="_blank" href="https://lipoic.org">Lipoic</a>. Beside Lipoic,
        I also working on other develope job like
        <a target="_blank" href="https://lazco.dev">Lazco</a> for digital
        solutions.
      </p>
    </div>
    <div class="copyright">&copy; Lazp. All rights reserved.</div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/global.scss";

.profile {
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 500px;

  @include phone {
    max-width: 90vw;
    align-items: center;
    text-align: center;
  }

  .avatar {
    display: flex;
    flex-direction: column;
    align-items: center;

    border-bottom: #e2e2e2 1.5px solid;
    padding: 50px 0;
    width: 100%;

    img {
      border-radius: 50%;
      width: 150px;
      height: 140px;
    }

    .title {
      text-transform: uppercase;
      font-weight: 800;
      font-size: 1.5rem;
      letter-spacing: 6px;
      margin: 20px 10px 15px 10px;
      padding: 0 10px;
      text-align: center;
    }

    .email {
      text-transform: uppercase;
      font-size: large;
      text-decoration: none;
      color: #5a5a5a;
      font-weight: 100;
      font-size: 1rem;
      padding: 0 10px 0 12px;
      letter-spacing: 3px;
      text-align: center;
    }
  }

  .bio {
    border-bottom: #e2e2e2 1.5px solid;
    padding: 50px 0;
    max-width: 500px;

    h2 {
      margin: 0 0 30px 0;
      font-size: 1.3rem;
      font-weight: 800;
      letter-spacing: 3px;
    }

    p {
      font-size: 1rem;
      line-height: 2;
    }
  }

  .copyright {
    padding: 20px 0;
    color: #b4b4b4;
    font-size: 1rem;
    font-weight: 200;
  }
}
</style>
