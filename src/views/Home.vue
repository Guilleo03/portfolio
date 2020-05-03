<template>
  <div class="home">
    <Inicio />
    <Menu />
    <router-link :to="{ name: 'Trabajos', params: {url : trabajo.url} }"
     v-for="(trabajo,index) of $store.state.Trabajos" :key="index">
      <button>{{trabajo.nombre}}</button>
    </router-link>
    <h1>{{ $store.state.Trabajos[1].nombre }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Trabajos from "@/views/Trabajos.vue"
import Inicio from "@/components/Inicio.vue"
import Menu from "@/components/Menu.vue";

export default {
  name: 'Home',
  components: {
    Inicio,
    Menu
  },
  views:{
    Trabajos
  },
}
</script>
