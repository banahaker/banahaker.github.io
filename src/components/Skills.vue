<script lang="ts" setup>
import { ref } from 'vue';

const skills = ref([ 
    "Typescript", 
    "Vue.js",
    "Go(Golang)",
    "MySQL",
    "MongoDB", 
    "Google Cloud",
    "Figma",
    "C",
    "Node.js",
    "Python"
])
</script>

<template>
    <div class="skills">
        <h1>Skills</h1>
        <div class="all">
            <div class="skill" v-for="item in skills">
                {{ item }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.skills {
    background-color: #111111;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        color: white;
        margin-bottom: 30px;
    }
    .all {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        .skill {
            margin-left: 20px;
            margin-top: 30px;
            color: white;
            background-color: #303030;
            border-radius: 3px;
            padding: 8px 12px;
        }
    }
}
</style>