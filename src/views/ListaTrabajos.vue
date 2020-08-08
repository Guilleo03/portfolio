<template>
    <div>
        <Menu />
        <CompListaTrabajo />
        <Footer />
    </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import CompListaTrabajo from "@/components/ListaTrabajos.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: "ListaTrabajos",
  components: {
    Menu,
    CompListaTrabajo,
    Footer
  },
};
</script>

<style lang="scss" scoped>

</style>