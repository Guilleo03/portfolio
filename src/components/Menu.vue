<template>
  <div>
    <nav id="homeNav">
      <router-link to="/">
        <img id="logo" src="../assets/img/logo.png" alt />
      </router-link>
      <div id="hamburger" v-on:click="open">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <ul id="homeUl">
        <li>
          <router-link id="navHome" to="/#contacto">INICIO</router-link>
        </li>
        <li>
          <router-link id="navWorks" to="/SeccionTrabajos">TRABAJOS</router-link>
        </li>
        <li>
          <a id="navAboutMe" href="/#AcercaDeMi">ACERCA DE MÍ</a>
        </li>
        <li>
          <a id="navContact" href="/#contacto">CONTACTO</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import "../assets/js/openMenu";

export default {
  name: "Inicio",
  methods: {
    open: function(event) {
      const hamburger = document.getElementsByClassName("line");
      const homeUl = document.getElementById("homeUl");
      homeUl.classList.toggle("open");
      hamburger.classList.toggle("white-hamburger");
    }
  }
};
</script>

<style lang="scss" scoped>
$celeste: #22c9d1;
$violeta: #7247ff;
$amarillo: #ffe459;

nav {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 8vh;
  padding: 0 150px;
  line-height: 8vh;
  font-weight: 300;
  transition: 0.3s all;
  background-color: white !important;
  a {
    color: #333333 !important;
  }
  #logo {
    filter: brightness(1) invert(0) !important;
  }
  ul {
    float: right;
    list-style: none;
    color: white;
    letter-spacing: 2px;
    font-size: 13px;
    transition: 0.3s all;
    li {
      display: inline-block;
      margin: 0 10px;
      padding: 0 10px;
      position: relative;
      animation: nav 1s linear forwards;
      opacity: 0;
      border-radius: 1px;
      a {
        color: #333333 !important;
        text-decoration-line: none !important;
      }
      &::before {
        content: "";
        position: absolute;
        height: 2px;
        width: 100%;
        bottom: 0;
        left: 0%;
        transform: scaleX(0);
        background-image: linear-gradient(45deg, $celeste, $violeta);
        transition: 0.3s all;
      }
      &:hover::before {
        transform: scaleX(1);
      }
    }
    :nth-child(1) {
      animation-delay: 0.2s;
    }
    :nth-child(2) {
      animation-delay: 0.4s;
    }
    :nth-child(3) {
      animation-delay: 0.6s;
    }
    :nth-child(4) {
      margin-right: 0;
      animation-delay: 0.8s;
    }
  }
}
@keyframes nav {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
#logo {
  height: 6vh;
  filter: brightness(0) invert(1);
  margin-top: 1vh;
  animation: nav 1s linear forwards;
  opacity: 0;
  animation-delay: 0.3s;
  transition: 0.3s all;
}
#hamburger {
  display: none;
}
@media screen and (max-width: 1024px) {
  #logo {
    height: 4vh;
    margin-top: 2vh;
  }
}
@media screen and (max-width: 900px) {
  nav {
    padding: 0 50px;
    #homeUl {
      height: 100vh;
      width: 100%;
      position: fixed;
      background-image: linear-gradient(
        45deg,
        rgba(34, 201, 2091, 0.9),
        rgba(114, 71, 255, 0.9)
      );
      top: 0;
      left: 0;
      display: block;
      text-align: center;
      font-size: 15px;
      letter-spacing: 4px;
      clip-path: circle(50px at 90% -10%);
      -webkit-clip-path: circle(50px at 90% -10%);
      transition: 0.3s all ease-out;
      li {
        display: block;
        &:nth-child(1) {
          margin-top: 10vh;
        }
        a {
          color: white !important;
        }
        &:hover::before {
          background-image: none;
        }
      }
    }
    .line {
      background-image: linear-gradient(
        45deg,
        rgb(34, 201, 2091),
        rgb(114, 71, 255)
      );
    }
  }

  #logo {
    margin-top: 2vh;
    height: 4vh;
  }
  #hamburger {
    display: block;
    position: absolute;
    right: 50px;
    top: 50%;
    z-index: 999;
    transform: translateY(-50%);
    .line {
      height: 2px;
      border-radius: 3px;
      margin: 5px 0;
      background-color: white;
      &:nth-child(1) {
        width: 20px;
      }
      &:nth-child(2) {
        width: 15px;
      }
      &:nth-child(3) {
        width: 10px;
      }
    }
  }
  .nav-scrolled {
    .line {
      background-image: linear-gradient(
        45deg,
        rgb(34, 201, 2091),
        rgb(114, 71, 255)
      );
    }
  }
  .open {
    clip-path: circle(1000px at 90% -10%) !important;
    -webkit-clip-path: circle(1000px at 90% -10%) !important;
  }
  .white-hamburger {
    background-color: white !important;
  }
}
@media screen and (max-width: 450px) {
  nav {
    padding: 0 20px;
    #hamburger {
      right: 20px;
    }
  }
}
</style>