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

  &::before {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 15vw;
    height: 100vh;
    content: "";
    background: linear-gradient(90deg, rgb(0 0 0 / 100%) 0%, rgb(0 0 0 / 0%) 100%);
  }

  &::after {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    width: 15vw;
    height: 100vh;
    content: "";
    background: linear-gradient(-90deg, rgb(0 0 0 / 100%) 0%, rgb(0 0 0 / 0%) 100%);
  }

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
}

@media screen and (min-width: 1100px) and (max-width: 1400px) {
  .home-page {
    section {
      width: 100%;

      .container {
        max-width: 940px;

        .section-title {
          font-size: 50px;
          line-height: 56px;
        }
      }
    }
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .home-page {
    section {
      width: 100%;

      .container {
        max-width: 780px;

        .section-title {
          font-size: 40px;
          line-height: 46px;
        }
      }
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .home-page {
    section {
      width: 100%;

      .container {
        max-width: 660px;

        .section-title {
          font-size: 30px;
          line-height: 36px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .home-page {
    &::before {
      width: 8vw;
      height: 100vh;
      background: linear-gradient(90deg, rgb(0 0 0 / 50%) 0%, rgb(0 0 0 / 0%) 100%);
    }

    &::after {
      width: 8vw;
      height: 100vh;
      background: linear-gradient(-90deg, rgb(0 0 0 / 50%) 0%, rgb(0 0 0 / 0%) 100%);
    }

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
  }
}
</style>
