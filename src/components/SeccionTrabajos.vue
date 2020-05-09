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
        <div class="infoContainer">
          <h3>Nombre del trabajo 1</h3>
          <p>ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque velit et! Blanditiis esse minus perspiciatis illo tempora nemo illum impedit eius officia qui saepe, quis ducimus ipsa iure quasi.</p>
          <router-link :to="{ name: 'Trabajos', params: {url : $store.state.Trabajos[0].url} }">
            <button>Ver más</button>
          </router-link>
        </div>
        <div class="imgContainer">
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
  button {
    color: white;
    background-image: linear-gradient(45deg, #22c9d1, #7247ff, #22c9d1);
    height: 40px;
    width: 200px;
    background-size: 200%;
    cursor: pointer;
    border: none;
    outline: 0;
    border-radius: 20px;
    font-size: 14px;
    letter-spacing: 1px;
    margin-top: 20px;
    transition: 0.5s all;
    background-position: 0;
    &:hover {
      background-position: 100%;
    }
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
</style>