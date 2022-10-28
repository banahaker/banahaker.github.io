<script lang="ts" setup>
import "animate.css";
</script>

<template>
  <div class="aboutMe">
    <p class="animate__jello">
      A 16-yo Senior High School Student from Taiwan, who has learned programming language since 10 years old. My first program is written in C, the "hello, world" lets me say hello to the programming world! Then I keep learning about all of the programming field, and I entered the Web Developing when I was 12-yo. I have learned a lot of things from the programming community in Taiwan, and I just founded a educational organization in the April this year(2022) - 
      <a target="_blank" href="https://lipoic.org/">Lipoic</a>.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.aboutMe {
  background-color: #111111;
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  p {
    background-color: #303030;
    padding: 25px;
    border-radius: 5px;
    color: white;
    text-align: center;
    font-weight: 200;
    letter-spacing: 1px;
    max-width: 1000px;
  }
}
</style>
