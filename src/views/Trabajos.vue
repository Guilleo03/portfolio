<template>
  <div class="trabajos">
    <Menu />
    <Trabajo />
    <Footer />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Trabajo from "@/components/Trabajo.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: "Trabajos",
  components: {
    Trabajo,
    Menu,
    Footer
  },
};
</script>
