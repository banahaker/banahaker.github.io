<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/global.scss";

.layout {
  background-color: #fff;
  width: 100%;
  margin-left: 50px;
  border-radius: 2px;
  border: 1px solid #d6d6d6;

  @include pad {
    margin-left: 0;
  }
}
</style>
