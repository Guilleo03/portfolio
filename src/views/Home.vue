<template>
  <main class="home">
    <Inicio />
    <SeccionTrabajos />
    <AcercaDeMi />
    <!-- <h2>{{ $store.state.Trabajos[1].nombre }}</h2> -->
  </main>
</template>

<script>
// @ is an alias to /src
import Trabajos from "@/views/Trabajos.vue"
import Inicio from "@/components/Inicio.vue"
import SeccionTrabajos from "@/components/SeccionTrabajos.vue";
import AcercaDeMi from "@/components/AcercaDeMi.vue"

export default {
  name: 'Home',
  components: {
    Inicio,
    SeccionTrabajos,
    AcercaDeMi
  },
  views:{
    Trabajos
  },
}
</script>
