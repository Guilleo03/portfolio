<template>
  <div>
    <div v-for="(trabajo,index) of $store.state.Trabajos" :key="index">
      <div v-if="$route.params.url === trabajo.url">
        <div
          id="work-bg"
          :style="{ backgroundImage: 'url(' + require('../assets/img/' + trabajo.bgImg + '.jpg') + ')'}"
        ></div>
        <h2 id="workName">{{trabajo.nombre}}</h2>
        <section id="workInfo">
          <article>
            <p>
              {{trabajo.descripcion}}
              <br />
              {{trabajo.descripcionLarga}}
            </p>
            <div id="page">
              <a
                v-if="trabajo.urlPagina !== ''"
                :href="trabajo.urlPagina"
                class="visitSite"
                target="_blank"
              >Ir a la página</a>
            </div>
          </article>
          <article>
            <p>Tecnología usada:</p>
            <ul>
              <li
                v-for="(unaHerramienta,index) of trabajo.herramientas"
                :key="index"
              >{{unaHerramienta}}</li>
            </ul>
          </article>
        </section>
        <section id="workImgs">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1366 81"
            style="enable-background:new 0 0 1366 81;"
            xml:space="preserve"
          >
            <path
              class="st0 curve"
              d="M0,22l314.64,49.53c77.77,12.24,156.97,12.38,234.78,0.41l229.1-35.25c63.38-9.75,127.76-11.13,191.5-4.09
	l122.8,13.56c59.14,6.53,118.91,4.35,177.42-6.46L1366,22V0H0V22z"
            />
          </svg>
          <article v-bind:class="(trabajo.imgDetalles1.length > 1)?'variasImg':'unaImg'">
            <img
              v-for="(unaImgDetalle1,index1) of trabajo.imgDetalles1"
              :key="index1"
              :src="require('../assets/img/'+unaImgDetalle1+'.jpg')"
              alt
            />
          </article>
          <article v-bind:class="(trabajo.imgDetalles2.length > 1)?'variasImg':'unaImg'">
            <img
              v-for="(unaImgDetalle2,index2) of trabajo.imgDetalles2"
              :key="index2"
              :src="require('../assets/img/'+unaImgDetalle2+'.jpg')"
              alt
            />
          </article>
          <svg
            version="1.1"
            id="Capa_2"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1366 81"
            style="enable-background:new 0 0 1366 81;"
            xml:space="preserve"
          >
            <path
              class="st0 curve"
              d="M0,22l314.64,49.53c77.77,12.24,156.97,12.38,234.78,0.41l229.1-35.25c63.38-9.75,127.76-11.13,191.5-4.09
	l122.8,13.56c59.14,6.53,118.91,4.35,177.42-6.46L1366,22V0H0V22z"
            />
          </svg>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Trabajo"
};
</script>

<style lang="scss">
#work-bg {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 66vh;
  top: 8vh;
  &::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 66vh;
    background: linear-gradient(0deg, rgba(114,71,255,0.700717787114846) 0%, rgba(34,201,209,0.38139005602240894) 50%, rgba(34,201,209,0) 100%);
    z-index: 10;
    left: 0;
  }
}
#workInfo {
  display: grid;
  grid-template-columns: 50% 40%;
  column-gap: 10%;
  padding: 0 150px;
  justify-items: end;
  article {
    &:nth-child(2) {
      p {
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 18px;
        margin-bottom: 15px;
      }
      ul {
        list-style: none;
        li {
          margin: 2px 0;
        }
      }
    }
  }
}
#page {
  display: grid;
}
#Capa_2 {
  transform: rotate(180deg);
  position: relative;
  top: 10px;
}
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
#workImgs {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr;
  background-color: #f7f7f7;
  .curve {
    fill: white !important;
  }
  article {
    display: grid;
    background-color: #f7f7f7;
    padding: 25px 150px;
    &:nth-child(2) {
      margin-top: 40px;
    }
  }
  img {
    width: 100%;
    height: auto;
    box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
}
.unaImg {
  grid-template-columns: 1fr;
}
.variasImg {
  grid-template-columns: 1fr 1fr 1fr !important;
  column-gap: 50px;
}
@media screen and (max-width: 900px) {
  #workInfo {
    padding: 0 50px;
    grid-template-columns: 1fr;
    justify-items: start;
    row-gap: 50px;
  }
  #workImgs {
    article {
      padding: 25px 50px;
    }
  }
  .variasImg {
    column-gap: 20px;
  }
  #workName{
    padding: 70px 50px;
  }
}
@media screen and (max-width: 480px) {
  #workInfo {
    padding: 0 20px;
  }
  #workImgs {
    article {
      padding: 25px 20px;
    }
  }
  .variasImg {
    column-gap: 20px;
  }
  #workName{
    padding: 50px 20px;
  }
}
</style>