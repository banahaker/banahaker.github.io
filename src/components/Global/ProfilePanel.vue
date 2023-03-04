<script lang="ts" setup>
import Avatar from "../../assets/logo_bana.png";
</script>

<template>
  <div class="profile">
    <div class="avatar">
      <img :src="Avatar" alt="Lazp yeh avatar online" loading="lazy" />
      <h1 class="title">Lazp Yeh(Banahaker)</h1>
      <div class="email">
        <a href="mailto:lazpytb@gmail.com">lazpytb@gmail.com</a>
      </div>
    </div>
    <div class="bio">
      <h2>Bio</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in aperiam
        quibusdam possimus neque fugiat numquam iusto odit sit. Ipsum nobis
        velit repellat illo nihil voluptatum in! Impedit, aliquam asperiores.
      </p>
    </div>
    <div class="copyright">&copy; Lazp. All rights reserved.</div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 500px;

  .avatar {
    display: flex;
    flex-direction: column;
    align-items: center;

    border-bottom: #e2e2e2 1.5px solid;
    padding: 50px 0;

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
    }
  }

  .bio {
    border-bottom: #e2e2e2 1.5px solid;
    padding: 50px 0;

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
