<template>
  <div class="home-page">
    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Section1 from './Section1.vue'
import Section2 from './Section2.vue'
import Section3 from './Section3.vue'
import Section4 from './Section4.vue'
import Section5 from './Section5.vue'
import Section6 from './Section6.vue'
import Section7 from './Section7.vue'

</script>

<style lang="scss">
.home-page {
  color: #fff;
  background: #000;

  section {
    width: 100%;

    .container {
      box-sizing: border-box;
      width: 100%;
      max-width: 1200px;
      height: 100%;
      min-height: 100vh;
      margin: 0 auto;

      .section-title {
        font-family: Mackay Test;
        font-size: 60px;
        font-style: normal;
        font-weight: 600;
        line-height: 66px;
        letter-spacing: .05em;
      }
    }
  }

  // section {
  //   position: relative;
  //   width: 100%;
  //   min-height: 100vh;

  //   .container {
  //     position: absolute !important;
  //     top: 0;
  //     right: 0;
  //     bottom: 0;
  //     left: 0;
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;
  //     padding: 120px;
  //   }
  // }
}

@media screen and (min-width: 1100px) and (max-width: 1400px) {
  .home-page {
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .home-page{

  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .home-page{
  }
}

@media screen and (max-width: 768px) {
  .home-page {
    min-width: 320px;
    margin: 0 auto;
    color: #fff;
    background: #000;
  }
}
</style>
