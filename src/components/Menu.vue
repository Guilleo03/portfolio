<template>
  <div>
    <!-- nav -->
    <nav id="homeNav">
      <router-link to="/">
        <img id="logo" src="../assets/img/logo.png" alt />
      </router-link>
      <div id="hamburger" @click="open">
        <div class="line" ref="hamburger1"></div>
        <div class="line" ref="hamburger2"></div>
        <div class="line" ref="hamburger3"></div>
      </div>
      <ul id="homeUl" ref="nav">
        <li>
          <router-link id="navHome" to="/" @click="open">Inicio</router-link>
        </li>
        <li>
          <router-link id="navWorks" to="/SeccionTrabajos" @click="open">Destacados</router-link>
        </li>
        <li>
          <router-link id="navWorkList" to="/trabajos" @click="open">Trabajos</router-link>
        </li>
        <li>
          <router-link id="navAboutMe" to="/AcercaDeMi" @click="open">Acerca de mí</router-link>
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
    open() {
      const nav = this.$refs.nav.classList;
      const hamburger1 = this.$refs.hamburger1.classList;
      const hamburger2 = this.$refs.hamburger2.classList;
      const hamburger3 = this.$refs.hamburger3.classList;

      nav.contains("open") ? nav.remove("open") : nav.add("open");
      nav.contains("open")
        ? hamburger1.add("white-hamburger")
        : hamburger1.remove("white-hamburger");
      nav.contains("open")
        ? hamburger2.add("white-hamburger")
        : hamburger2.remove("white-hamburger");
      nav.contains("open")
        ? hamburger3.add("white-hamburger")
        : hamburger3.remove("white-hamburger");
    },
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
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.5);
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
      padding-right: 0;
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
  height: 5vh;
  filter: brightness(0) invert(1);
  margin-top: 1.5vh;
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
    clip-path: circle(1200px at 90% -10%) !important;
    -webkit-clip-path: circle(1200px at 90% -10%) !important;
  }
  .white-hamburger {
    background-image: none !important;
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