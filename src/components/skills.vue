<template>
    <div>
        <h1>SKILLS</h1>
        <div class="skills">
            <button v-for="item in skills" :key="item"> {{ item }} </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const skills = reactive<Array<string>>([
    "Javascript",
    "Typescript",
    "C/C++",
    "Go",
    "Python",
    "Node.js",
    "Dene",
    "Gin",
    "Express",
    "Oak",
    "Tree.js",
    "OpenGL",
    "Vue.js",
    "React.js",
    "Web3.js",
    "Solidity"
])
</script>

<style scoped>
div {
    background-color: #1b1b1b;
    padding: 40px;
}
h1 {
    color: #fff;
}
.skills {
    padding: 15px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.skills>button {
    border: none;
    font-weight: 300;
    border-radius: 2px;
    padding: 2px 10px;
    font-size: 1.2rem;
    color: #fff;
    background-color: #04a799;
    margin-right: 15px;
    margin-bottom: 20px;
}
</style>