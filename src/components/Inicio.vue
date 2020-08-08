<template>
  <div id="inicio">
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
          <a id="navHome" href="#inicio" v-smooth-scroll>Inicio</a>
        </li>
        <li>
          <a id="navWorks" href="#SeccionTrabajos" v-smooth-scroll>Destacados</a>
        </li>
        <li>
          <router-link id="navWorkList" to="/Trabajos">Trabajos</router-link>
        </li>
        <li>
          <a id="navAboutMe" href="#AcercaDeMi" v-smooth-scroll>Acerca de mí</a>
        </li>
      </ul>
    </nav>
    <div id="main-bg">
      <div id="mask">
        <div id="name">
          <h1>Guille Otegui</h1>
          <p>Diseño web</p>
        </div>
      </div>
      <div id="arrows">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="contStars">
        <div id="stars"></div>
        <div id="stars2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/js/scroll";
import "../assets/js/openMenu";

export default {
  name: "Inicio",
  methods: {
    open() {
      const nav = this.$refs.nav.classList;
      const hamburger1 = this.$refs.hamburger1.classList;
      const hamburger2 = this.$refs.hamburger2.classList;
      const hamburger3 = this.$refs.hamburger3.classList;

      nav.contains('open') ? nav.remove('open') : nav.add('open')
      nav.contains('open') ? hamburger1.add('white-hamburger') : hamburger1.remove('white-hamburger') 
      nav.contains('open') ? hamburger2.add('white-hamburger') : hamburger2.remove('white-hamburger') 
      nav.contains('open') ? hamburger3.add('white-hamburger') : hamburger3.remove('white-hamburger') 
      
      /*homeUl.classList.toggle("open");
      hamburger.classList.toggle("white-hamburger");*/
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
  &:hover {
    background-color: white;
  }
  &:hover a {
    color: #333333 !important;
  }
  &:hover #logo {
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
        color: white !important;
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
.nav-scrolled {
  background-color: white;
  transition: 0.3s all;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.5);
}
.ul-scrolled {
  color: #333333 !important;
  transition: 0.3s all;
}
.img-scrolled {
  filter: brightness(1) invert(0) !important;
}

#main-bg {
  height: 90vh;
  width: 100%;
  background-image: url("../assets/img/bg.jpg");
  background-size: cover;
  background-position: bottom;
  position: relative;
  overflow: hidden;
}
#mask {
  mask: url("../assets/img/mask.svg");
  mask-size: cover;
  -webkit-mask: url("../assets/img/mask.svg");
  -webkit-mask-size: cover;
  mask-position: center;
  -webkit-mask-position: center;
  height: 90vh;
  width: 100%;
}

#name {
  position: fixed;
  top: 40vh;
  width: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  animation: letras 1.3s ease-in-out forwards;
  h1 {
    font-size: 60px;
    font-weight: 400;
  }
  p {
    letter-spacing: 4px;
    color: $amarillo;
  }
}

@keyframes letras {
  0% {
    opacity: 0;
    filter: blur(25px);
    letter-spacing: 30px;
  }
  100% {
    opacity: 1;
    filter: blur(0px);
    letter-spacing: 1px;
  }
}
#arrows {
  position: absolute;
  top: 80vh;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  span {
    display: block;
    width: 10px;
    height: 10px;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    margin: -10px;
    animation: arrows 2s infinite;
  }
  :nth-child(2) {
    animation-delay: -0.2s;
  }
  :nth-child(3) {
    animation-delay: -0.4s;
  }
}
@keyframes arrows {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
    -webkit-transform: rotate(45deg) translate(-20px, -20px);
    -moz-transform: rotate(45deg) translate(-20px, -20px);
    -ms-transform: rotate(45deg) translate(-20px, -20px);
    -o-transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
    -webkit-transform: rotate(45deg) translate(20px, 20px);
    -moz-transform: rotate(45deg) translate(20px, 20px);
    -ms-transform: rotate(45deg) translate(20px, 20px);
    -o-transform: rotate(45deg) translate(20px, 20px);
  }
}
#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  animation: animStar 50s linear infinite;
  top: 100vh;
}
#stars:after {
  content: " ";
  position: absolute;
  width: 1px;
  height: 1px;
  background: transparent;
  top: 100vh;
  box-shadow: 1519px 1303px #fff, 1255px 288px #fff, 378px 1937px #fff,
    1251px 1726px #fff, 1900px 1311px #fff, 1117px 147px #fff, 390px 847px #fff,
    1058px 1003px #fff, 1982px 224px #fff, 1234px 23px #fff, 1290px 1509px #fff,
    638px 336px #fff, 1241px 175px #fff, 900px 162px #fff, 143px 1785px #fff,
    1570px 643px #fff, 1133px 592px #fff, 1533px 1990px #fff, 1084px 1796px #fff,
    444px 1599px #fff, 1038px 152px #fff, 629px 154px #fff, 278px 607px #fff,
    932px 1581px #fff, 675px 384px #fff, 968px 1832px #fff, 1689px 569px #fff,
    715px 1714px #fff, 1335px 1255px #fff, 104px 766px #fff, 763px 1641px #fff,
    1748px 1430px #fff, 1218px 109px #fff, 951px 162px #fff, 1826px 1510px #fff,
    1498px 523px #fff, 656px 1660px #fff, 1805px 822px #fff, 21px 983px #fff,
    318px 1186px #fff, 231px 151px #fff, 696px 1540px #fff, 1841px 123px #fff,
    1663px 919px #fff, 1631px 1037px #fff, 935px 1605px #fff, 1274px 1190px #fff,
    1191px 1604px #fff, 1965px 1805px #fff, 1553px 892px #fff,
    1114px 1190px #fff, 1762px 1006px #fff, 740px 540px #fff, 475px 493px #fff,
    803px 1045px #fff, 1630px 613px #fff, 1121px 1601px #fff, 1445px 1617px #fff,
    463px 1773px #fff, 166px 1419px #fff, 649px 146px #fff, 903px 1732px #fff,
    333px 293px #fff, 98px 939px #fff, 71px 963px #fff, 1596px 1060px #fff,
    585px 1842px #fff, 1130px 1189px #fff, 396px 1931px #fff, 1467px 443px #fff,
    1631px 103px #fff, 175px 1372px #fff, 417px 1756px #fff, 896px 343px #fff,
    1372px 465px #fff, 1004px 1577px #fff, 320px 523px #fff, 1870px 1480px #fff,
    1442px 408px #fff, 1076px 1765px #fff, 1565px 1437px #fff, 876px 1757px #fff,
    988px 1505px #fff, 1527px 1406px #fff, 603px 958px #fff, 804px 314px #fff,
    344px 1027px #fff, 1608px 1740px #fff, 761px 1048px #fff, 1150px 1761px #fff,
    1340px 384px #fff, 659px 693px #fff, 733px 1325px #fff, 1890px 1594px #fff,
    988px 1830px #fff, 1340px 243px #fff, 728px 926px #fff, 1700px 86px #fff,
    1406px 1064px #fff, 87px 1360px #fff, 1780px 778px #fff, 1568px 1603px #fff,
    1971px 1416px #fff, 154px 365px #fff, 1269px 1579px #fff, 1654px 73px #fff,
    1817px 819px #fff, 1603px 131px #fff, 798px 604px #fff, 199px 136px #fff,
    1417px 1621px #fff, 655px 2px #fff, 1438px 1226px #fff, 405px 222px #fff,
    145px 1620px #fff, 1686px 993px #fff, 217px 1395px #fff, 1303px 1726px #fff,
    1680px 337px #fff, 1122px 1944px #fff, 1697px 415px #fff, 279px 434px #fff,
    671px 259px #fff, 121px 1056px #fff, 1495px 1937px #fff, 272px 827px #fff,
    122px 1104px #fff, 10px 932px #fff, 500px 982px #fff, 1036px 1250px #fff,
    486px 954px #fff, 861px 969px #fff, 536px 1259px #fff, 1303px 1010px #fff,
    1768px 1146px #fff, 1772px 1477px #fff, 1906px 114px #fff, 748px 1274px #fff,
    922px 816px #fff, 989px 1591px #fff, 170px 1339px #fff, 1904px 393px #fff,
    987px 869px #fff, 910px 1856px #fff, 1033px 1921px #fff, 973px 166px #fff,
    1796px 1381px #fff, 1009px 928px #fff, 415px 1673px #fff, 284px 649px #fff,
    1484px 726px #fff, 534px 382px #fff, 1562px 1170px #fff, 193px 743px #fff,
    407px 1043px #fff, 201px 977px #fff, 9px 328px #fff, 1639px 373px #fff,
    1376px 835px #fff, 150px 1072px #fff, 1652px 748px #fff, 1591px 621px #fff,
    294px 1187px #fff, 928px 714px #fff, 864px 1928px #fff, 1959px 850px #fff,
    1009px 1102px #fff, 146px 284px #fff, 650px 1665px #fff, 1331px 1171px #fff,
    1872px 1392px #fff, 1901px 656px #fff, 399px 344px #fff, 1326px 282px #fff,
    197px 308px #fff, 591px 768px #fff, 104px 1395px #fff, 476px 1682px #fff,
    96px 1542px #fff, 1666px 428px #fff, 262px 679px #fff, 719px 1227px #fff,
    1625px 1507px #fff, 302px 215px #fff, 1769px 1887px #fff, 141px 1234px #fff,
    391px 357px #fff, 469px 1525px #fff, 1865px 1572px #fff, 828px 463px #fff,
    1252px 102px #fff, 468px 1307px #fff, 1514px 209px #fff, 657px 1776px #fff,
    1830px 1792px #fff, 840px 779px #fff, 1184px 1268px #fff, 666px 1841px #fff,
    1836px 1655px #fff, 450px 1101px #fff, 1960px 1889px #fff, 475px 813px #fff,
    1074px 579px #fff, 752px 1429px #fff, 1427px 1377px #fff, 1082px 1685px #fff,
    386px 1674px #fff, 1186px 559px #fff, 794px 1475px #fff, 1382px 1659px #fff,
    91px 653px #fff, 380px 1228px #fff, 113px 631px #fff, 309px 843px #fff,
    184px 514px #fff, 1526px 88px #fff, 234px 1099px #fff, 240px 1788px #fff,
    1915px 1573px #fff, 1455px 228px #fff, 1527px 649px #fff, 1864px 1880px #fff,
    133px 1796px #fff, 236px 253px #fff, 296px 1760px #fff, 439px 33px #fff,
    1390px 653px #fff, 927px 1912px #fff, 780px 1063px #fff, 79px 671px #fff,
    595px 1271px #fff, 532px 1166px #fff, 1566px 732px #fff, 724px 1428px #fff,
    1488px 364px #fff, 1390px 1230px #fff, 1280px 1361px #fff, 1927px 596px #fff,
    98px 1450px #fff, 1739px 1908px #fff, 524px 681px #fff, 29px 213px #fff,
    1159px 1989px #fff, 578px 1519px #fff, 669px 1378px #fff, 393px 192px #fff,
    1203px 825px #fff, 641px 576px #fff, 937px 1799px #fff, 570px 368px #fff,
    1538px 327px #fff, 411px 539px #fff, 647px 1527px #fff, 1879px 1997px #fff,
    1794px 95px #fff, 15px 376px #fff, 565px 1392px #fff, 1216px 1812px #fff,
    784px 312px #fff, 92px 1927px #fff, 1071px 1839px #fff, 1576px 1364px #fff,
    1774px 1718px #fff, 1366px 428px #fff, 312px 1815px #fff, 206px 1816px #fff,
    1055px 888px #fff, 578px 264px #fff, 366px 1227px #fff, 970px 251px #fff,
    1571px 778px #fff, 245px 1110px #fff, 1679px 1247px #fff, 1331px 351px #fff,
    697px 1719px #fff, 1081px 1303px #fff, 402px 564px #fff, 1823px 1062px #fff,
    106px 1525px #fff, 612px 1118px #fff, 597px 783px #fff, 429px 977px #fff,
    1745px 1745px #fff, 972px 335px #fff, 622px 1507px #fff, 612px 1537px #fff,
    1484px 1289px #fff, 2px 1838px #fff, 1431px 1118px #fff, 1616px 1877px #fff,
    265px 1261px #fff, 456px 310px #fff, 1365px 310px #fff, 101px 1395px #fff,
    157px 1865px #fff, 1621px 526px #fff, 1487px 871px #fff, 1662px 1856px #fff,
    1256px 840px #fff, 1121px 1502px #fff, 1220px 1570px #fff, 490px 409px #fff,
    1903px 1542px #fff, 283px 1935px #fff, 1686px 1721px #fff, 78px 772px #fff,
    1506px 1179px #fff, 1254px 1823px #fff, 541px 901px #fff, 1908px 361px #fff,
    18px 570px #fff, 1870px 242px #fff, 391px 320px #fff, 1283px 1451px #fff,
    1899px 1467px #fff, 511px 909px #fff, 1961px 851px #fff, 229px 1735px #fff,
    627px 971px #fff, 1373px 714px #fff, 383px 1793px #fff, 1299px 1644px #fff,
    271px 790px #fff, 386px 133px #fff, 864px 385px #fff, 1721px 137px #fff,
    474px 1162px #fff, 1295px 171px #fff, 170px 1068px #fff, 414px 37px #fff,
    24px 854px #fff, 101px 1935px #fff, 1355px 1098px #fff, 52px 579px #fff,
    1121px 1483px #fff, 510px 1032px #fff, 839px 806px #fff, 1087px 1702px #fff,
    556px 374px #fff, 1984px 1956px #fff, 128px 75px #fff, 200px 1019px #fff,
    1172px 1106px #fff, 1393px 931px #fff, 420px 1780px #fff, 783px 179px #fff,
    1337px 674px #fff, 627px 1818px #fff, 885px 280px #fff, 367px 1535px #fff,
    206px 1434px #fff, 1768px 1428px #fff, 465px 1334px #fff, 1362px 791px #fff,
    1170px 1750px #fff, 386px 1362px #fff, 74px 1489px #fff, 1417px 3px #fff,
    1957px 1296px #fff, 1840px 42px #fff, 1406px 975px #fff, 857px 884px #fff,
    301px 1565px #fff, 1721px 1517px #fff, 1360px 624px #fff, 464px 1774px #fff,
    185px 771px #fff, 189px 1460px #fff, 383px 1099px #fff, 1874px 1914px #fff,
    515px 1472px #fff, 874px 1972px #fff, 385px 1026px #fff, 745px 1820px #fff,
    917px 224px #fff, 614px 1906px #fff, 81px 768px #fff, 1133px 1132px #fff,
    870px 1324px #fff, 1013px 166px #fff, 675px 1836px #fff, 784px 1966px #fff,
    1406px 250px #fff, 188px 990px #fff, 673px 149px #fff, 1381px 1894px #fff,
    344px 1490px #fff, 1492px 414px #fff, 365px 1946px #fff, 1787px 987px #fff,
    1161px 1176px #fff, 1281px 692px #fff, 395px 383px #fff, 709px 1299px #fff,
    1244px 1687px #fff, 1179px 1254px #fff, 383px 1405px #fff, 246px 1360px #fff,
    955px 1364px #fff, 1249px 847px #fff, 1209px 1405px #fff, 796px 1216px #fff,
    1265px 1594px #fff, 282px 883px #fff, 791px 835px #fff, 551px 393px #fff,
    878px 1195px #fff, 1642px 1009px #fff, 687px 1404px #fff, 1811px 1734px #fff,
    1686px 359px #fff, 500px 1405px #fff, 718px 238px #fff, 233px 1799px #fff,
    1854px 651px #fff, 603px 705px #fff, 1902px 1296px #fff, 1160px 1246px #fff,
    713px 64px #fff, 958px 700px #fff, 330px 1839px #fff, 1214px 1379px #fff,
    505px 1670px #fff, 881px 1598px #fff, 287px 140px #fff, 154px 1407px #fff,
    1067px 1050px #fff, 1462px 505px #fff, 1694px 284px #fff, 1076px 1387px #fff,
    1695px 705px #fff, 424px 129px #fff, 1531px 706px #fff, 681px 1830px #fff,
    1508px 769px #fff, 1075px 111px #fff, 300px 1442px #fff, 1740px 980px #fff,
    59px 866px #fff, 715px 1869px #fff, 929px 497px #fff, 1392px 92px #fff,
    1171px 708px #fff, 1289px 1473px #fff, 1146px 741px #fff, 974px 570px #fff,
    1046px 24px #fff, 873px 615px #fff, 302px 1443px #fff, 545px 1577px #fff,
    676px 1493px #fff, 424px 1891px #fff, 1646px 377px #fff, 736px 1793px #fff,
    823px 1225px #fff, 1578px 1027px #fff, 1556px 155px #fff, 299px 1173px #fff,
    1680px 825px #fff, 1381px 983px #fff, 1024px 1259px #fff, 390px 820px #fff,
    1779px 760px #fff, 457px 864px #fff, 813px 1674px #fff, 688px 197px #fff,
    1056px 1656px #fff, 1541px 301px #fff, 96px 1420px #fff, 1139px 683px #fff,
    1530px 1991px #fff, 1157px 646px #fff, 1002px 1110px #fff, 303px 1306px #fff,
    353px 1308px #fff, 1367px 344px #fff, 30px 235px #fff, 398px 70px #fff,
    666px 869px #fff, 55px 864px #fff, 4px 659px #fff, 1046px 1665px #fff,
    1053px 1793px #fff, 421px 1425px #fff, 1012px 1084px #fff, 117px 1328px #fff,
    587px 1386px #fff, 306px 630px #fff, 1972px 1620px #fff, 1159px 542px #fff,
    1498px 1816px #fff, 1428px 1px #fff, 576px 1422px #fff, 1878px 261px #fff,
    1312px 1258px #fff, 1640px 1934px #fff, 949px 1735px #fff, 703px 1909px #fff,
    1287px 1183px #fff, 1729px 1318px #fff, 1991px 793px #fff, 103px 12px #fff,
    917px 726px #fff, 1535px 604px #fff, 1302px 803px #fff, 1464px 314px #fff,
    175px 1540px #fff, 1674px 901px #fff, 633px 363px #fff, 335px 1944px #fff,
    1803px 913px #fff, 1379px 862px #fff, 296px 915px #fff, 1999px 7px #fff,
    37px 628px #fff, 1208px 87px #fff, 378px 1573px #fff, 1996px 889px #fff,
    992px 1262px #fff, 1238px 1894px #fff, 575px 1757px #fff, 1084px 159px #fff,
    1479px 1771px #fff, 1426px 274px #fff, 8px 972px #fff, 46px 12px #fff,
    287px 1042px #fff, 1041px 1471px #fff, 958px 1337px #fff, 101px 253px #fff,
    167px 68px #fff, 627px 1518px #fff, 809px 915px #fff, 1126px 953px #fff,
    1886px 1815px #fff, 1855px 1975px #fff, 1518px 968px #fff, 387px 1368px #fff,
    677px 338px #fff, 1027px 568px #fff, 1418px 441px #fff, 1208px 1880px #fff,
    851px 1568px #fff, 424px 1211px #fff, 1213px 65px #fff, 324px 711px #fff,
    1262px 655px #fff, 1861px 1762px #fff, 804px 540px #fff, 1935px 1433px #fff,
    1316px 1666px #fff, 926px 188px #fff, 1502px 479px #fff, 1337px 871px #fff,
    684px 688px #fff, 349px 1686px #fff, 1759px 1837px #fff, 83px 1897px #fff,
    838px 626px #fff, 1880px 460px #fff, 1258px 882px #fff, 1719px 560px #fff,
    1939px 308px #fff, 267px 1525px #fff, 306px 1905px #fff, 1259px 1678px #fff,
    1577px 1898px #fff, 1246px 1154px #fff, 858px 472px #fff, 277px 481px #fff,
    1248px 227px #fff, 1743px 1515px #fff, 750px 356px #fff, 651px 1929px #fff,
    108px 1205px #fff, 1195px 1280px #fff, 1757px 491px #fff, 774px 65px #fff,
    1966px 1001px #fff, 1798px 150px #fff, 1524px 704px #fff, 1706px 1241px #fff,
    162px 373px #fff, 146px 471px #fff, 1605px 766px #fff, 1392px 216px #fff,
    1874px 1571px #fff, 402px 827px #fff, 1787px 1939px #fff, 345px 1992px #fff,
    168px 1050px #fff, 992px 1338px #fff, 380px 1151px #fff, 860px 1171px #fff,
    71px 1465px #fff, 851px 408px #fff, 1403px 877px #fff, 640px 920px #fff,
    790px 1363px #fff, 1563px 1192px #fff, 453px 544px #fff, 1841px 807px #fff,
    143px 270px #fff, 407px 1600px #fff, 1116px 458px #fff, 88px 674px #fff,
    1553px 1475px #fff, 422px 142px #fff, 924px 1357px #fff, 1295px 379px #fff,
    1366px 351px #fff, 1476px 1820px #fff, 24px 483px #fff, 1104px 576px #fff,
    1868px 411px #fff, 42px 1138px #fff, 606px 452px #fff, 287px 566px #fff,
    217px 888px #fff, 1888px 1224px #fff, 1421px 805px #fff, 576px 1522px #fff,
    1450px 646px #fff, 198px 905px #fff, 1176px 786px #fff, 904px 100px #fff,
    299px 1188px #fff, 214px 515px #fff, 674px 557px #fff, 1639px 944px #fff,
    1032px 1960px #fff, 729px 194px #fff, 1207px 148px #fff, 1069px 1571px #fff,
    1840px 50px #fff, 1269px 111px #fff, 452px 617px #fff, 91px 1888px #fff,
    1805px 1335px #fff, 1251px 639px #fff, 963px 729px #fff, 441px 1228px #fff,
    947px 150px #fff, 712px 1048px #fff, 45px 311px #fff, 185px 1154px #fff,
    1760px 684px #fff, 1149px 1152px #fff, 113px 1116px #fff, 774px 1571px #fff,
    1849px 1974px #fff, 217px 1382px #fff, 1128px 936px #fff, 1691px 1549px #fff,
    725px 286px #fff, 1609px 1208px #fff, 355px 296px #fff, 921px 943px #fff,
    809px 1986px #fff, 1504px 40px #fff, 929px 512px #fff, 430px 1293px #fff,
    186px 1348px #fff, 1130px 39px #fff, 382px 1081px #fff, 1582px 1949px #fff,
    199px 1125px #fff, 1548px 1568px #fff, 892px 1246px #fff, 401px 804px #fff,
    1404px 466px #fff, 1439px 697px #fff, 45px 775px #fff, 1738px 1924px #fff,
    906px 830px #fff, 1892px 493px #fff, 420px 778px #fff, 1671px 169px #fff,
    1954px 763px #fff, 1273px 1904px #fff, 1957px 269px #fff, 861px 1320px #fff,
    544px 1902px #fff, 179px 1282px #fff, 1615px 1651px #fff, 1160px 1144px #fff,
    234px 740px #fff, 1358px 1265px #fff, 187px 2000px #fff, 277px 1890px #fff,
    1217px 911px #fff, 1034px 1419px #fff, 604px 1107px #fff, 1860px 1367px #fff,
    1314px 737px #fff, 920px 366px #fff, 1233px 1787px #fff, 1880px 1303px #fff,
    1016px 1310px #fff, 41px 273px #fff;
}

#stars2 {
  top: 100vh;
  width: 2px;
  height: 2px;
  background: transparent;
  animation: animStar 100s linear infinite;
}
#stars2:after {
  content: " ";
  position: absolute;
  width: 2px;
  height: 2px;
  background: transparent;
  top: 100vh;
  box-shadow: 265px 295px #fff, 306px 543px #fff, 472px 1097px #fff,
    1663px 1284px #fff, 1580px 1200px #fff, 1263px 1147px #fff,
    400px 1592px #fff, 493px 639px #fff, 1005px 96px #fff, 663px 728px #fff,
    1929px 1030px #fff, 316px 552px #fff, 1801px 871px #fff, 1679px 1273px #fff,
    1438px 309px #fff, 1030px 625px #fff, 94px 1934px #fff, 330px 1625px #fff,
    1276px 178px #fff, 632px 1086px #fff, 119px 1288px #fff, 362px 951px #fff,
    17px 616px #fff, 766px 1411px #fff, 147px 668px #fff, 1837px 1251px #fff,
    1185px 408px #fff, 1451px 642px #fff, 1372px 637px #fff, 80px 909px #fff,
    1428px 1788px #fff, 742px 257px #fff, 1191px 145px #fff, 1417px 1388px #fff,
    1261px 491px #fff, 1992px 1483px #fff, 1469px 1638px #fff, 1269px 317px #fff,
    1754px 862px #fff, 765px 1270px #fff, 1700px 1500px #fff, 965px 837px #fff,
    1499px 1803px #fff, 280px 453px #fff, 1991px 1074px #fff, 1449px 1948px #fff,
    897px 1994px #fff, 646px 1137px #fff, 295px 176px #fff, 1780px 549px #fff,
    1060px 312px #fff, 311px 1073px #fff, 456px 367px #fff, 834px 1688px #fff,
    1366px 167px #fff, 1401px 1404px #fff, 1664px 1915px #fff, 872px 1965px #fff,
    971px 1410px #fff, 995px 1887px #fff, 1839px 496px #fff, 1006px 1254px #fff,
    983px 1736px #fff, 601px 147px #fff, 196px 1052px #fff, 770px 1541px #fff,
    1072px 1671px #fff, 941px 1595px #fff, 1175px 298px #fff, 1142px 769px #fff,
    712px 1352px #fff, 111px 1582px #fff, 900px 926px #fff, 1324px 1075px #fff,
    1808px 532px #fff, 791px 424px #fff, 879px 1187px #fff, 26px 1181px #fff,
    930px 1093px #fff, 67px 1423px #fff, 884px 1266px #fff, 764px 162px #fff,
    37px 1803px #fff, 1198px 913px #fff, 1635px 280px #fff, 1840px 334px #fff,
    1365px 418px #fff, 581px 1795px #fff, 1217px 746px #fff, 1530px 1386px #fff,
    591px 1076px #fff, 925px 1370px #fff, 1904px 661px #fff, 1399px 756px #fff,
    520px 840px #fff, 755px 996px #fff, 1658px 588px #fff, 1418px 514px #fff,
    474px 1076px #fff, 1773px 1491px #fff, 1580px 175px #fff, 1505px 1982px #fff,
    1289px 505px #fff, 1724px 997px #fff, 55px 183px #fff, 1300px 701px #fff,
    817px 1595px #fff, 659px 565px #fff, 1672px 106px #fff, 868px 251px #fff,
    1135px 185px #fff, 775px 906px #fff, 1980px 277px #fff, 414px 494px #fff,
    305px 1173px #fff, 356px 37px #fff, 170px 945px #fff, 221px 443px #fff,
    1329px 1332px #fff, 163px 595px #fff, 1573px 556px #fff, 1074px 669px #fff,
    1293px 1502px #fff, 1901px 1581px #fff, 540px 17px #fff, 170px 1949px #fff,
    932px 1122px #fff, 726px 1412px #fff, 1882px 460px #fff, 1216px 30px #fff,
    1585px 314px #fff, 373px 227px #fff, 1636px 378px #fff, 47px 336px #fff,
    491px 1255px #fff, 797px 1714px #fff, 131px 587px #fff, 1050px 1199px #fff,
    1316px 1372px #fff, 1118px 1591px #fff, 1087px 1734px #fff, 1174px 67px #fff,
    1417px 1266px #fff, 1056px 1611px #fff, 1709px 469px #fff, 779px 782px #fff,
    1695px 1935px #fff, 463px 1030px #fff, 1451px 824px #fff, 306px 656px #fff,
    1564px 386px #fff, 666px 184px #fff, 1148px 1798px #fff, 1152px 84px #fff,
    1209px 1188px #fff, 911px 830px #fff, 1899px 1099px #fff, 367px 322px #fff,
    245px 823px #fff, 1957px 56px #fff, 1609px 269px #fff, 625px 257px #fff,
    1086px 927px #fff, 88px 183px #fff, 1198px 842px #fff, 1034px 40px #fff,
    1816px 878px #fff, 1596px 112px #fff, 1542px 1669px #fff, 173px 1274px #fff,
    1565px 697px #fff, 1190px 1506px #fff, 1901px 760px #fff, 1019px 1109px #fff,
    1710px 1589px #fff, 377px 1314px #fff, 1013px 1884px #fff, 1394px 769px #fff,
    4px 191px #fff, 786px 1359px #fff, 1307px 1946px #fff, 1445px 602px #fff,
    1137px 1997px #fff, 843px 1747px #fff, 1095px 871px #fff, 114px 602px #fff,
    1319px 1278px #fff, 1990px 1868px #fff, 1176px 164px #fff,
    1472px 1909px #fff, 816px 882px #fff, 1511px 1255px #fff, 22px 1541px #fff,
    454px 817px #fff, 187px 1268px #fff, 506px 1543px #fff, 399px 1604px #fff,
    1897px 5px #fff, 1267px 1558px #fff, 1845px 1388px #fff;
}

@keyframes animStar {
  from {
    transform: translateY(-1000px);
  }
  to {
    transform: translateY(-2000px);
  }
}
.open {
  clip-path: circle(100px at 90% -10%) !important;
  -webkit-clip-path: circle(100px at 90% -10%) !important;
}
.white-hamburger {
  background-image: none !important;
  background-color: white !important;
}
@media screen and (max-width: 1024px) {
  #logo {
    height: 4vh;
    margin-top: 2vh;
  }
  .buttonsWork {
    column-gap: 15px;
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
    &:hover .line {
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
    background-color: white !important;
  }
  #name h1 {
    font-size: 45px;
  }
  @keyframes letras {
    0% {
      opacity: 0;
      filter: blur(25px);
      letter-spacing: 15px;
    }
    100% {
      opacity: 1;
      filter: blur(0px);
      letter-spacing: 1px;
    }
  }
}
@media screen and (max-width: 480px) {
  nav {
    padding: 0 20px;
    #hamburger {
      right: 20px;
    }
  }
  @keyframes letras {
    0% {
      opacity: 0;
      filter: blur(25px);
      letter-spacing: 10px;
    }
    100% {
      opacity: 1;
      filter: blur(0px);
      letter-spacing: 1px;
    }
  }
}
</style>