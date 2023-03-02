<template>
  <div class="head">
    <div class="contain">
      <h1><span>Hello!</span> I'm <span>Lazp</span></h1>
      <h2>A</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  transition: 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.head {
  background-color: #111111;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .contain {
    padding: 10px;
    color: #ffff;
    max-width: 800px;
    margin: auto;
    & > h1 > span {
      color: #04a799;
    }
  }
}
</style>
