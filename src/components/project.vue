<script lang="ts" setup>
import lipoicImg from "../assets/logo_lipoic.svg";
import pbcImg from "../assets/logo_beproblemchild.jpg";
import banaImg from "../assets/logo_bana.png";
</script>

<template>
  <div class="projects">
    <h1>Projects</h1>
    <div class="progs">
      <div class="Program">
        <img :src="lipoicImg" alt="Lipoic" />
        <div class="content">
          <h2>
            <a target="_blank" href="https://github.com/Lipoic"
              >Lipoic Organization</a
            >
          </h2>
          <h3>Founder</h3>
        </div>
      </div>
      <div class="Program">
        <img :src="pbcImg" alt="Beaproblemchild" />
        <div class="content">
          <h2>
            <a target="_blank" href="https://github.com/beaproblemchild/"
              >Be a Problem child</a
            >
          </h2>
          <h3>CTO</h3>
        </div>
      </div>
    </div>
    <!-- <div class="projs">
      <div class="Project">
        <img :src="banaImg" alt="Logo_bana">
        <div class="content">
          <h2>
            <a target="_blank" href="https://github.com/banahaker/devicon">Devicon Redesign</a>
          </h2>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/global.scss";
.projects {
  background-color: #303030;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: white;
    margin-bottom: 30px;
  }
  .progs {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    .Program {
      margin-top: 20px;
      background-color: #111111;
      min-width: 250px;
      display: flex;
      margin-left: 20px;
      align-items: center;
      justify-content: flex-start;
      border-radius: 5px;
      padding: 15px;
      img {
        width: 60px;
        border-radius: 50%;
      }
      .content {
        padding: 4px 15px;
        h2 {
          color: white;
          font-size: 1.6rem;
          font-weight: 200;
          a {
            font-weight: 200;
            text-decoration: none;
          }
        }
        h3 {
          color: #b8b8b8;

          font-size: 1.1rem;
          font-weight: 200;
        }
        @include phone {
          h2 {
            font-size: 1.3rem;
          }
          h3 {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  .projs {
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    .Project {
      margin-top: 20px;
      background-color: #111111;
      min-width: 250px;
      display: flex;
      margin-left: 20px;
      align-items: center;
      justify-content: flex-start;
      border-radius: 5px;
      padding: 15px;
      img {
        width: 60px;
        border-radius: 50%;
      }
      .content {
        padding: 4px 15px;
        h2 {
          color: white;
          font-size: 1.6rem;
          font-weight: 200;
          a {
            font-weight: 200;
            text-decoration: none;
          }
        }
        h3 {
          color: #b8b8b8;

          font-size: 1.1rem;
          font-weight: 200;
        }
        @include phone {
          h2 {
            font-size: 1.3rem;
          }
          h3 {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
}
</style>
