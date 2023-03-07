<script lang="ts" setup>
import PageTitle from "../components/Layout/PageTitle.vue";
import SkillBar from "../components/Resume/SkillBar.vue";
import ExData from "../article/exlist.json";
import { Category } from "../interface/CategortType";

interface ISkillData {
  name: string;
  score: number;
  category: Category;
}

const skillData: Array<ISkillData> = [
  {
    name: "Python",
    score: 5,
    category: Category.DATA_SCIENCE,
  },
  {
    name: "Pandas",
    score: 4,
    category: Category.DATA_SCIENCE,
  },
  {
    name: "Javascript",
    score: 5,
    category: Category.WEB_TOOLS,
  },
  {
    name: "MySQL/SQLite3/SQL",
    score: 3,
    category: Category.DATA_SCIENCE,
  },
  {
    name: "Google Cloud Service",
    score: 3,
    category: Category.OTHER,
  },
  {
    name: "Vite",
    score: 4,
    category: Category.WEB_TOOLS,
  },
  {
    name: "Vue",
    score: 5,
    category: Category.WEB_TOOLS,
  },
  {
    name: "React",
    score: 4,
    category: Category.WEB_TOOLS,
  },
  {
    name: "Numpy",
    score: 4,
    category: Category.DATA_SCIENCE,
  },
  {
    name: "Tensorflow + Keras",
    score: 3,
    category: Category.DATA_SCIENCE,
  },
  {
    name: "C/C++",
    score: 5,
    category: Category.DATA_SCIENCE,
  },
  {
    name: "Express.js",
    score: 4,
    category: Category.WEB_TOOLS,
  },
  {
    name: "Typescript",
    score: 5,
    category: Category.WEB_TOOLS,
  },
  {
    name: "Go (Golang)",
    score: 3,
    category: Category.OTHER,
  },
  {
    name: "MongoDB",
    score: 3,
    category: Category.DATA_SCIENCE,
  },
  {
    name: "SDL",
    score: 2,
    category: Category.OTHER,
  },
].sort((a, b) => b.score - a.score);
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
      <SkillBar
        v-for="item in skillData"
        :skill="item.name"
        :score="item.score"
        :category="item.category"
      ></SkillBar>
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
