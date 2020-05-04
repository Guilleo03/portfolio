
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Prompt", sans-serif;
  color: #333333;
}
h2 {
  background: -webkit-linear-gradient(45deg, #22c9d1, #7247ff);
  padding: 70px 0;
  font-size: 50px;
  letter-spacing: 1px;
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  margin: 0 auto;
  font-weight: 300;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  letter-spacing: 4px;
}
</style>
