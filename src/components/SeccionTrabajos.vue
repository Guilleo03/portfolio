<template>
  <div id="SeccionTrabajos">
    <h2>Trabajos</h2>
    <section id="myWorks">
      <article>
        <!-- <router-link
          :to="{ name: 'Trabajos', params: {url : trabajo.url} }"
          v-for="(trabajo,index) of $store.state.Trabajos"
          :key="index">
          <button>{{trabajo.nombre}}</button>
        </router-link>-->
        <div v-scrollAnimation-left class="infoContainer">
          <h3>Nombre del trabajo 1</h3>
          <p>ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque velit et! Blanditiis esse minus perspiciatis illo tempora nemo illum impedit eius officia qui saepe, quis ducimus ipsa iure quasi.</p>
          <div class="buttonsWork">
            <router-link :to="{ name: 'Trabajos', params: {url : $store.state.Trabajos[0].url} }">
              <button>Ver más</button>
            </router-link>
            <a href class="visitSite">Ir a la página</a>
          </div>
        </div>
        <div v-scrollAnimation class="imgContainer">
          <img src="../assets/img/clima.png" alt />
        </div>
      </article>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Trabajos from "@/views/Trabajos.vue";

export default {
  name: "SeccionTrabajos",
  views: {
    Trabajos
  }
};
</script>

<style lang="scss">
#myWorks {
  display: grid;
  grid-template-columns: 1fr;
}
#myWorks article {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  text-align: center;
  justify-items: center;
}
.infoContainer {
  padding: 0 80px;
  text-align: left;
  h3 {
    font-weight: 300;
    font-size: 30px;
    padding-bottom: 5px;
    margin-bottom: 30px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      width: 100%;
      background-image: linear-gradient(to right, #22c9d1, #7247ff);
    }
  }
  .buttonsWork {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  button {
    background-image: linear-gradient(45deg, #22c9d1, #7247ff, #22c9d1);
    transform: scale(1.04, 1.14);
  }
  button,
  .visitSite {
    height: 38px;
    width: 170px;
    cursor: pointer;
    border: none;
    outline: 0;
    border-radius: 20px !important;
    font-size: 12px;
    letter-spacing: 1px;
    margin-top: 30px;
    transition: 0.5s all;
    color: white;
    background-size: 200%;
    text-decoration: none;
    font-family: "Prompt", sans-serif;
    line-height: 38px;
    text-align: center;
    position: relative;
    &:hover {
      background-position: 100%;
    }
  }
}
.visitSite {
  color: #333333 !important;
  background-color: white !important;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(45deg, #22c9d1, #7247ff, #22c9d1);
    background-size: 200%;
    transition: 0.5s all;
    top: 0;
    left: 0;
    border-radius: 60px;
    z-index: -1;
    transform: scale(1.04, 1.14);
  }
  &:hover::before {
    background-position: 100%;
  }
}
.imgContainer {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-image: linear-gradient(45deg, #22c9d1, #7247ff);
  transform: rotate(30deg);
  box-shadow: 10px 5px 30px 0px rgba(0, 0, 0, 0.3);
  position: relative;
  img {
    position: relative;
    animation: trabajo 3s linear infinite;
  }
}
@keyframes trabajo {
  0% {
    transform: rotate(-15deg) translate(15px, -35px);
  }
  50% {
    transform: rotate(-15deg) translate(15px, -25px);
  }
  100% {
    transform: rotate(-15deg) translate(15px, -35px);
  }
}

.before-enter{
  opacity: 0;
  transform: translateX(35px) rotate(30deg);
  transition: .5s all ease-in
}
.enter{
  transform: translateX(0) rotate(30deg);
  opacity: 1;
}
.before-enter-left{
  opacity: 0;
  transform: translateX(-35px);
  transition: .5s all ease-in
}
.enter-left{
  transform: translateX(0);
  opacity: 1;
}
</style>