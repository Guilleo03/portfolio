<template>
  <div class="home">
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

export default {
  name: 'Home',
  views:{
    Trabajos
  },
}
</script>