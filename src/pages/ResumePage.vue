<script lang="ts" setup>
import PageTitle from "../components/Layout/PageTitle.vue";
import SkillBar from "../components/Resume/SkillBar.vue";
import ExData from "../article/exlist.json";
</script>

<template>
  <PageTitle title="resume" subtitle=""></PageTitle>
  <div class="page resume">
    <div class="page-section">
      <h3>education</h3>
      <ul>
        <li>Mingdao High School Senior High Department</li>
      </ul>
    </div>
    <div class="page-section">
      <h3>experience</h3>
      <div class="ex-list">
        <div class="ex-item" v-for="item in ExData">
          <h4>{{ item.title }}</h4>
          <p class="time">{{ item.time }}</p>
          <ul>
            <li v-for="point in item.content">
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="page-section">
      <h3>SKILLS</h3>
      <SkillBar skill="Python" :score="5"></SkillBar>
      <SkillBar skill="Numpy" :score="4"></SkillBar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  display: block;
  width: 100%;
  text-align: center;
  margin: 20px 0;
}

.resume {
  .ex-list {
    .ex-item {
      h4 {
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 3px;
        margin: 5px 0;
      }
      p.time {
        font-size: 0.8rem;
        font-weight: 200;
        letter-spacing: 2px;
      }
    }
  }
}
</style>
