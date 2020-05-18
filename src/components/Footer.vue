<template>
  <div id="footer">
    <footer>
      <div id="contFooter">
        <div>
          <span>Guillermo Otegui ©2020</span>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/guillermo-otegui/" target="_blank">
            <i class="fi fi-linkedin"></i>
          </a>
          <a href="mailto:guilleotegui03@gmail.com" target="_blank">
            <i class="fi fi-email"></i>
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
  width: 30%;
  div {
      display: inline-block;
      line-height: 8vh;
    &:nth-child(1) {
      text-align: left;
    }
    &:nth-child(2){
        float: right;
        a{
            color: white;
            &:nth-child(1){
                margin: 0 20px;
            }
            &:nth-child(2){
                i{
                    transform: translateY(2px);
                }
            }
        }
    }
  }
}
@media screen and (max-width: 1024px){
  #contFooter{
    width: 50%;
  }
}
@media screen and (max-width: 900px){
  #contFooter{
    width: 45%;
  }
}
@media screen and (max-width: 450px){
  #contFooter{
    width: 80%;
  }
}
</style>