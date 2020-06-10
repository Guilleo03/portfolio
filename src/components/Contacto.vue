<template>
  <div id="contacto">
    <section id="formSection">
      <h2>Contacto</h2>
      <form>
        <div>
          <input id="nombre" type="text" name="nombre" required autocomplete="off">
          <label class="label" for="nombre">Nombre</label>
        </div>
        <div>
          <input id="email" type="text" name="email" required />
          <label class="label" for="email">Email</label>
        </div>
        <div>
          <textarea id="message" cols="30" rows="10" name="message" required></textarea>
          <label class="label" for="message">Mensaje</label>
        </div>
        <input type="button" value="Enviar" />
      </form>
    </section>
  </div>
</template>

<script>

export default {
  name: "Contacto",
  }

</script>

<style lang="scss" scoped>
h2{
  padding-top: 55px !important;
}
#contacto {
  background-image: url("../assets/img/contact-bg.png");
  position: relative;
  animation: waves 10s linear infinite;
  width: 100%;
  height: 92vh;
  &::before {
    content: "";
    position: absolute;
    background-image: url("../assets/img/contact-bg.png");
    opacity: 0.7;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 92vh;
    animation: waves-reverse 10s linear infinite;
  }
}
@keyframes waves-reverse {
  0% {
    background-position: 0;
  }
  100% {
    background-position: -1366px;
  }
}
@keyframes waves {
  0% {
    background-position: 0;
  }
  100% {
    background-position: 1366px;
  }
}
.st0 {
  fill: #ffffff;
}
h2 {
  color: white !important;
  background-clip: none;
  -webkit-background-clip: none;
  text-fill-color: white !important;
  -webkit-text-fill-color: white !important;
}
form {
  position: absolute;
  top: 55vh;
  width: 30%;
  background-color: white;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  div {
    position: relative;
    &:nth-child(3) label {
      top: 12px;
      transform: translateY(0);
    }
    label {
      position: absolute;
      z-index: 99;
      top: 50%;
      transform: translateY(-50%);
      font-size: 14px;
      left: 10px;
      letter-spacing: 1px;
      transition: 0.3s all;
    }
    input[type="text"],
    textarea {
      width: 100%;
      border: none;
      border-bottom: 1px solid #333333;
      border-radius: 2px;
      margin: 12px 0;
      height: 31px;
      padding: 6px;
      outline: 0;
      letter-spacing: 1px;
      font-size: 12px;
      color: #333333;
      position: relative;
    }
    textarea {
      height: 100px;
      resize: none;
      font-family: "Prompt", sans-serif;
    }
  }

  input[type="button"] {
    background-image: linear-gradient(45deg, #22c9d1, #7247ff, #22c9d1);
    height: 38px;
    width: 170px;
    cursor: pointer;
    border: none;
    outline: 0;
    border-radius: 20px !important;
    font-size: 13px;
    letter-spacing: 1px;
    margin-top: 30px;
    transition: 0.5s all;
    color: white;
    background-size: 200%;
    text-decoration: none;
    font-family: "Prompt", sans-serif;
    line-height: 38px;
    text-align: center;
    position: relative;
    &:hover {
      background-position: 100%;
    }
  }
  input[type="text"]:focus + label,
  textarea:focus + label,
  input[type="text"]:not(:focus):valid + label,
  textarea:not(:focus):valid + label {
    top: 0;
    left: 6px;
    font-size: 11px;
    background: -webkit-linear-gradient(45deg, #22c9d1, #7247ff);
    background-clip: text;
    -webkit-background-clip: text;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  }
  textarea:focus + label,
  textarea:not(:focus):valid + label {
    top: -8px;
  }
}
@media screen and (max-width: 1024px){
  form{
    width: 50%;
  }
}
@media screen and (max-width: 900px){
  form{
    width: 80%;
    padding: 40px 20px;
  }
}
@media screen and (max-width: 450px){
  form{
    padding: 40px 20px;
  }
}
</style>