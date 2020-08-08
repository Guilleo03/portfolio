<template>
    <div>
        <Menu />
            Lista trabajos
            <!-- aca va la lista de trabajos -->
        <Footer />
    </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue"

export default {
  name: "Trabajos",
  components: {
    Menu,
    Footer
  },
};
</script>

<style lang="scss" scoped>

</style>