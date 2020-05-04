<template>
  <div id="AcercaDeMi">
    <section>
      <h2>Acerca de mí</h2>
      <article>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi ut culpa praesentium eum molestiae soluta nisi. Deleniti repellendus, corporis explicabo velit pariatur tenetur voluptate cum accusamus nostrum ea nam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione inventore doloremque totam cupiditate officiis provident laborum fugiat, et saepe eius aspernatur, voluptates necessitatibus corporis quos vitae, recusandae placeat incidunt.</p>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "AcercaDeMi"
};
</script>

<style lang="scss" scoped>
article {
  margin: 0 120px;
  padding: 40px;
  background-color: red;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background-image: linear-gradient(45deg, #22c9d1, #7247ff);
    width: 100%;
    height: 100%;
    z-index: -1;
    top: -30px;
    left: -30px;
  }
}
</style>