<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/global.scss";

.layout {
  background-color: #fff;
  width: 100%;
  margin-left: 50px;

  @include pad {
    margin-left: 0;
  }
}
</style>
