<template>
  <div id="workList">
    <h2>Trabajos</h2>
    <ul>
      <li v-for="(trabajo,index) of $store.state.Trabajos" :key="index">
        <div v-scrollAnimation class="imgContainer">
          <img :src="require('../assets/img/'+trabajo.imgInicio+'.png')" alt />
        </div>
        <p>{{trabajo.nombre}}</p>

        <!-- si tiene boton con url -->
        <div class="buttonsWork twoButtons" v-if="trabajo.urlPagina !== ''">
          <router-link
            v-on:click="scrollToTop"
            :to="{ name: 'Trabajos', params: {url : trabajo.url} }"
          >
            <button>Ver más</button>
          </router-link>
          <a :href="trabajo.urlPagina" class="visitSite" target="_blank">Ir a la página</a>
        </div>
        <!-- -------------- -->
        <!-- si no tiene boton con url -->
        <div class="buttonsWork aButton" v-else>
          <router-link
            v-on:click="scrollToTop"
            :to="{ name: 'Trabajos', params: {url : trabajo.url} }"
          >
            <button>Ver más</button>
          </router-link>
        </div>
        <!-- -------------- -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "compListaTrabajo",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss">
#workList {
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 150px;
    row-gap: 100px;
    column-gap: 30px;
    justify-items: center;
    list-style: none;
    text-align: center;
    li:nth-child(2n+1) {
      transform: translateY(50px);
    }
    p {
      margin-top: 20px;
      font-size: 18px;
    }
    .imgContainer {
      width: 250px;
      height: 250px;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        animation: trabajo 5s linear infinite;
        max-width: 100%;
        max-height: 100%;
      }
    }
    .twoButtons {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    button {
      background-image: linear-gradient(45deg, #22c9d1, #7247ff, #22c9d1);
      transform: scale(1.04, 1.14);
    }
    button,
    .visitSite {
      height: 30px;
      width: 100px;
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
      line-height: 30px;
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
}
</style>