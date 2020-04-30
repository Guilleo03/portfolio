<template>
  <div class="home">
    <router-link :to="{ name: 'Trabajos', params: {url : trabajo.url} }"
     v-for="(trabajo,index) of Trabajos" :key="index">
      <button>{{trabajo.nombre}}</button>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Trabajos from "@/views/Trabajos.vue"

export default {
  name: 'Home',
  views:{
    Trabajos
  },
  data(){
    return{
      Trabajos: [
        {
          url: "trabajo1",
          nombre: "Trabajo 1",
          descripcion: "Esta es la descripcion del trabajo 1",
        },
        {
          url: "trabajo2",
          nombre: "Trabajo 2",
          descripcion: "Esta es la descripcion del trabajo 2",
        }

      ]
    }
  }
}
</script>