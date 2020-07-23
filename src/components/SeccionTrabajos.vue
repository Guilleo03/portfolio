<template>
  <div id="SeccionTrabajos">
    <h2>Trabajos</h2>
    <section id="myWorks">
      <article v-for="(trabajo,index) of $store.state.Trabajos" :key="index">
        <!-- <router-link
          :to="{ name: 'Trabajos', params: {url : trabajo.url} }"
          v-for="(trabajo,index) of $store.state.Trabajos"
          :key="index">
          <button>{{trabajo.nombre}}</button>
        </router-link>-->
        <div v-scrollAnimation-left class="infoContainer">
          <h3>{{trabajo.nombre}}</h3>
          <p>{{trabajo.descripcion}}</p>
          <div class="buttonsWork">
            <router-link
              v-on:click="scrollToTop"
              :to="{ name: 'Trabajos', params: {url : trabajo.url} }"
            >
              <button>Ver más</button>
            </router-link>
            <a
              v-if="trabajo.urlPagina !== ''"
              :href="trabajo.urlPagina"
              class="visitSite"
              target="_blank"
            >Ir a la página</a>
          </div>
        </div>
        <div v-scrollAnimation class="imgContainer">
          <img :src="require('../assets/img/'+trabajo.imgInicio+'.png')" alt />
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
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
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
  min-height: 90vh;
}
.infoContainer {
  padding: 0 0 0 150px;
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
  box-shadow: 10px 5px 30px 0px rgba(0, 0, 0, 0.3);
  position: relative;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    animation: trabajo 5s linear infinite;
    max-width: 100%;
    height: auto;
  }
}
@keyframes trabajo {
  0% {
    transform: translate(-50%, -53%);
  }
  50% {
    transform: translate(-50%, -47%);
  }
  100% {
    transform: translate(-50%, -53%);
  }
}

.before-enter {
  opacity: 0;
  transform: translateX(35px);
  transition: 0.5s all ease-in;
}
.enter {
  transform: translateX(0);
  opacity: 1;
}
.before-enter-left {
  opacity: 0;
  transform: translateX(-35px);
  transition: 0.5s all ease-in;
}
.enter-left {
  transform: translateX(0);
  opacity: 1;
}
@media screen and (max-width: 1024px) {
  #SeccionTrabajos {
    padding: 0 50px;
    .imgContainer {
      width: 270px;
      height: 270px;
    }
  }
  .infoContainer {
    padding: 0;
    button,
    .visitSite {
      width: 100%;
      &::before {
        transform: scale(1.02, 1.14);
      }
    }
    .buttonsWork {
      column-gap: 50px;
    }
  }
  #SeccionTrabajos {
    padding: 0 20px;
  }
  #myWorks article {
    grid-template-columns: 1fr;
    row-gap: 120px;
    margin: 50px 0;
  }
  .infoContainer {
    padding: 0 150px;
  }
  .imgContainer {
    width: 300px;
    height: 300px;
    transform: rotate(0) !important;
  }
  @keyframes trabajo {
    0% {
      transform: translate(-50%, -53%);
    }
    50% {
      transform: translate(-50%, -47%);
    }
    100% {
      transform: translate(-50%, -53%);
    }
  }
}
@media screen and (max-width: 768px) {
  .infoContainer {
    padding: 0 40px;
  }
}
@media screen and (max-width: 480px) {
  .infoContainer {
    padding: 0;
    h3{
      font-size: 25px;
    }
  }
}
</style>