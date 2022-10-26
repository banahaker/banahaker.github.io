<template>
  <div class="out">
    <div>
      <h2>Hi!</h2>
      <h1>
        <span class="one">I'm</span>
        <span class="two">LAZP</span>
      </h1>
      <h3>Full Stack Developer</h3>
    </div>
  </div>
</template>

<style scoped>
* {
  transition: 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
div.out {
  display: flex;
  flex-direction: row;
  background-color: #303030;
  color: #fff;
  padding: 50px;
  height: 60vh;
  justify-content: center;
  align-items: center;
  cursor: default;
}

div.out > div {
  padding: 30px;
}

div.out > div:hover > h2 {
  display: none;
}

div.out > div:hover > h3 {
  display: none;
}

div.out > div:hover > h1 > span.one {
  display: none;
}

div.out > div:hover > h1 > span.two {
  letter-spacing: 15px;
  font-size: 4rem;
  font-weight: 100;
}

h2 {
  font-size: 1rem;
}

h1 {
  font-size: 3rem;
}

span.two {
  color: #04a799;
}
</style>
