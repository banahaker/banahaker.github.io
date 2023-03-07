<script lang="ts" setup>
const { link } = defineProps<{ link: string }>();
</script>

<template>
  <a :href="link" target="_blank"><slot></slot></a>
</template>
