<template>
  <div>
    <div v-for="(trabajo,index) of $store.state.Trabajos" :key="index">
      <div v-if="$route.params.url === trabajo.url">
        <div id="work-bg"></div>
        <h2>{{trabajo.nombre}}</h2>
        <div id="workInfo">
          <div>
            <p>{{trabajo.descripcion}}<br>{{trabajo.descripcionLarga}}</p>
          </div>
          <div>
            <p>Tecnología usada:</p>
            <ul v-for="(unaHerramienta,index) of trabajo.herramientas" :key="index">
              <li>{{unaHerramienta}}</li>
            </ul>
          </div>
        </div>
        <div id="workImg">
        </div>
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
  background-image: url("../assets/img/bicicletas-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
#workInfo {
  display: grid;
  grid-template-columns: 50% 40%;
  column-gap: 10%;
  padding: 0 150px;
  justify-items: end;
  div {
    &:nth-child(2) {
      p{
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 18px;
        margin-bottom: 15px;
      }
      ul {
        list-style: none;
        li{
          margin: 2px 0;
        }
      }
    }
  }
}
</style>