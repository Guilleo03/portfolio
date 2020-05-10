<template>
  <div id="contacto">
    <section id="formSection">
      <h2>Pagina de contacto</h2>
    </section>
  </div>
</template>

<script>
//import "../assets/js/contacto";

export default {
  name: "Contacto"
};
</script>

<style lang="scss" scoped>
#contacto {
  background-image: url("../assets/img/contact-bg.png");
  position: relative;
  animation: waves 10s linear infinite;
  width: 100%;
  &::before {
    content: "";
    position: absolute;
    background-image: url("../assets/img/contact-bg.png");
    opacity: 0.7;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    animation: waves-reverse 10s linear infinite;
  }
}
@keyframes waves-reverse {
  0% {
    background-position: 0;
  }
  100% {
    background-position: -1366px;
  }
}
@keyframes waves {
  0% {
    background-position: 0;
  }
  100% {
    background-position: 1366px;
  }
}
.st0 {
  fill: #ffffff;
}
h2 {
  color: white !important;
  background-clip: none;
  -webkit-background-clip: none;
  text-fill-color: white !important;
  -webkit-text-fill-color: white !important;
}
</style>