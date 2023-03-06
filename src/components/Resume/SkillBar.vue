<script lang="ts" setup>
const props = defineProps<{
  skill: string;
  score: number;
}>();
</script>

<template>
  <div class="skillbar">
    <div class="skillbar-title">
      <span>{{ props.skill }}</span>
    </div>
    <div class="skillbar-bar" :style="`width: ${(score / 5) * 100}%`"></div>
    <div className="skill-bar-percent">{{ props.score }} / 5</div>
  </div>
</template>

<style lang="scss" scoped>
.skillbar {
  position: relative;
  display: block;
  margin-bottom: 15px;
  width: 100%;
  background: #eee;
  height: 35px;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  -webkit-transition: 0.4s linear;
  -moz-transition: 0.4s linear;
  -ms-transition: 0.4s linear;
  -o-transition: 0.4s linear;
  transition: 0.4s linear;
  -webkit-transition-property: width, background-color;
  -moz-transition-property: width, background-color;
  -ms-transition-property: width, background-color;
  -o-transition-property: width, background-color;
  transition-property: width, background-color;
}

.skillbar-title {
  position: absolute;
  top: 0;
  left: 0;
  font-weight: bold;
  font-size: 13px;
  color: #fff;
  background: #04a799;
  -webkit-border-top-left-radius: 3px;
  -webkit-border-bottom-left-radius: 4px;
  -moz-border-radius-topleft: 3px;
  -moz-border-radius-bottomleft: 3px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.skillbar-title span {
  display: block;
  background: rgba(0, 0, 0, 0.1);
  color: #fff;
  color: rgb(255, 255, 255);
  padding: 0 20px;
  height: 35px;
  line-height: 35px;
  -webkit-border-top-left-radius: 3px;
  -webkit-border-bottom-left-radius: 3px;
  -moz-border-radius-topleft: 3px;
  -moz-border-radius-bottomleft: 3px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.skillbar-bar {
  height: 35px;
  background: #04a799;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}

.skill-bar-percent {
  position: absolute;
  right: 10px;
  top: 0;
  font-size: 11px;
  height: 35px;
  line-height: 35px;
  color: #444;
  color: rgba(0, 0, 0, 0.4);
}
</style>
