<template>
  <div id="footer">
    <div id="waves"></div>
    <footer>
      <div id="contFooter">
        <div>
          <span>
            Guillermo Otegui
            <i class="far fa-copyright"></i> {{new Date().getFullYear()}}
          </span>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/guillermo-otegui/" target="_blank">
            <i class="fab fa-linkedin-in"></i>
            <span>/guillermo-otegui</span>
          </a>
          <a href="mailto:guilleotegui03@gmail.com" target="_blank">
            <i class="fas fa-envelope"></i>
            <span>guilleotegui03@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss">
#waves {
  margin-top: 60px;
  background-image: url("../assets/img/waves.png");
  position: relative;
  animation: waves 10s linear infinite;
  width: 100%;
  height: 86px;
  &::before {
    content: "";
    position: absolute;
    background-image: url("../assets/img/waves.png");
    opacity: 0.7;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 86px;
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
footer {
  width: 100%;
  height: 8vh;
  background-image: url("../assets/img/contact-bg.png");
  position: relative;
  animation: waves 10s linear infinite;
  &::before {
    content: "";
    position: absolute;
    background-image: url("../assets/img/contact-bg.png");
    opacity: 0.7;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 8vh;
    animation: waves-reverse 10s linear infinite;
  }
  span {
    color: white;
    text-align: center;
    position: relative;
    font-size: 14px;
    letter-spacing: 1px;
  }
  div:nth-child(2) {
    i {
      margin-right: 5px;
    }
  }
  a {
    text-decoration: none;
    font-size: 14px;
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
#contFooter {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 300px);
  div {
    display: inline-block;
    line-height: 8vh;
    &:nth-child(1) {
      text-align: left;
    }
    &:nth-child(2) {
      float: right;
      a {
        color: white;
        &:nth-child(1) {
          margin: 0 20px;
        }
        &:nth-child(2) {
          i {
            transform: translateY(2px);
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  footer {
    #contFooter {
      a {
        span {
          display: none;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  footer {
    padding: 0 40px;
    #contFooter {
      left: 0;
      transform: translateX(0);
      width: auto;
    }
  }
}
@media screen and (max-width: 480px) {
  footer {
    padding: 0 20px;
  }
}
@media screen and (max-width: 350px) {
  footer {
    span {
      font-size: 12px;
    }
    #contFooter {
      div:nth-child(2){
        a{
          margin: 0 5px !important;
        }
      }
    }
  }
}
</style>