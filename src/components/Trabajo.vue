<template>
  <div>

    <div v-for="(trabajo,index) of $store.state.Trabajos" :key="index">

        <div v-if="$route.params.url === trabajo.url">
            <p>la url es: {{trabajo.url}}</p>
            <p>el id es: {{trabajo.id}}</p>
            <p>la descripcion es: {{trabajo.descripcion}}</p>
            <p>el nombre es: {{trabajo.nombre}}</p>
        </div>

    </div>

  </div>
</template>

<script>

export default {
  name: "Trabajo",
};

</script>