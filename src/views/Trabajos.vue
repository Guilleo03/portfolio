<template>
  <div class="trabajos">
    <Menu />
    <Trabajo />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Trabajo from "@/components/Trabajo.vue";

export default {
  name: "Trabajos",
  components: {
    Trabajo,
    Menu
  },
};
</script>
