<script lang="ts" setup>
const props = defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<template>
  <div class="pageTitle">
    <h1>{{ props.title }}</h1>
    <h2>{{ props.subtitle }}</h2>
  </div>
</template>

<style lang="scss" scoped>
.pageTitle {
  padding: 40px;

  border-bottom: 1px solid #d6d6d6;

  h1 {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 1.6rem;
    letter-spacing: 6px;
    margin: 20px 0 10px 0;
  }

  h2 {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 0.8rem;
    letter-spacing: 4px;
    margin: 20px 0 20px 0;
  }
}
</style>
