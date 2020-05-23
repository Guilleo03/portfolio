<template>
  <div>
    <div v-for="(trabajo,index) of $store.state.Trabajos" :key="index">
      <div v-if="$route.params.url === trabajo.url">
        <div id="work-bg"></div>
        <h2>Nombre del trabajo</h2>
        <div id="workInfo">
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestias, dolores nihil vero, illo mollitia hic harum quam dolorum commodi consequuntur iure quod voluptates! Eaque aspernatur cupiditate deleniti voluptatem aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil atque nisi consequuntur quasi exercitationem odit, illo nulla et beatae repellendus debitis veritatis, eos, blanditiis quas impedit? Natus eum vitae iure!</p>
          </div>
          <div>
            <p>Tecnología usada:</p>
            <ul>
              <li>Herramienta</li>
              <li>Herramienta</li>
              <li>Herramienta</li>
              <li>Herramienta</li>
            </ul>
          </div>
        </div>
        <div id="workImg">
          
        </div>

        <!-- <p>la url es: {{trabajo.url}}</p>
            <p>el id es: {{trabajo.id}}</p>
            <p>la descripcion es: {{trabajo.descripcion}}</p>
        <p>el nombre es: {{trabajo.nombre}}</p>-->
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