<template>
  <div class="home-header fromTop ae-1 do">
    <div class="header-left">
      <svg-img class="logo-img" name="logo-text"></svg-img>
      <div class="menu">
        <div v-for="(item, index) in menuList" :key="item.id" class="menu-item" :class="{'active': currentMenuIndex === index}"
          @click="goPagePosition(item)">{{item.title}}</div>
      </div>
    </div>
    <div class="header-right">
      <a class="joinbutton" href="https://archenetwork.typeform.com/AGAAPPLY" target="_blank">Join AGA</a>
      <div class="info">©️ AGA 2022 / <a href="https://arche.network" target="_blank">FOUNDER BY ARCHE</a></div>
      <!-- <div class="scroll">SCROLL TO EXPLORE</div> -->
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import useInitGsap from '@/hooks/useInitGsap'

const initGsap = (gsap, ScrollTrigger) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.home-section-1',
      start: 'bottom top',
      end: '120% top',
      // markers: true,
      scrub: true,
    },
  })
}
useInitGsap(initGsap)

const currentMenuIndex = ref(0)
const menuList = [
  { id: 1, title: 'HOME', target: 'section1' },
  { id: 2, title: 'ABOUT', target: 'section2' },
  { id: 3, title: 'STRENGTH', target: 'section3' },
  { id: 4, title: 'GUILDS', target: 'section4' },
  { id: 5, title: 'FEATURES', target: 'section5' },
  { id: 6, title: 'JOIN', target: 'section6' },
]

const scrollToTarget = (target) => {
  window.scrollTo({
    top: target,
    behavior: 'smooth',
  })
}
const goPagePosition = (item) => {
  const { target } = item
  const top = document.querySelector('#' + target).offsetTop
  scrollToTarget(top)
  currentMenuIndex.value = item.id - 1
}

</script>

<style lang="scss">
.home-header {
  position: relative;
  z-index: 100;

  .header-left {
    position: fixed;
    top: 4vw;
    bottom: 4vw;
    left: 4vw;
    z-index: 100;

    .logo-img {
      width: 140px;
      height: 46px;
    }

    .menu {
      margin-top: 100px;

      .menu-item {
        margin-top: 58px;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 1.6;
        text-align: left;
        letter-spacing: .05em;
        cursor: pointer;
        opacity: .45;

        &.active {
          text-decoration: underline;
          opacity: 1;
        }
      }
    }

    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 100;
      width: 20px;
      height: 20px;
      content: "";
      border-color: #fff;
      border-style: solid;
      border-width: 0 0 1px 1px;
    }
  }

  .header-right {
    position: fixed;
    top: 4vw;
    right: 4vw;
    bottom: 4vw;
    width: 100px;

    .joinbutton {
      position: absolute;
      top: 0;
      right: 0;
      width: fit-content;
      font-family: Mackay Test;
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: 46px;
      color: #fff;
      text-align: right;
      letter-spacing: .05em;
      white-space: nowrap;

      &::before {
        position: absolute;
        right: 1px;
        bottom: 9px;
        width: 92%;
        height: 1px;
        content: "";
        background: #fff;
      }
    }

    .info {
      position: absolute;
      right: 0;
      bottom: 6vw;
      width: fit-content;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 1.6;
      color: #fff;
      letter-spacing: .05em;
      white-space: nowrap;
      opacity: .5;
      transform: rotate(90deg);
      transform-origin: right top;

      a {
        color: #fff;

        &:hover {
          text-decoration: underline;
          opacity: 1;
        }
      }
    }

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      display: none;
      width: 20px;
      height: 20px;
      content: "";
      border-color: #fff;
      border-style: solid;
      border-width: 1px 1px 0 0;
    }

    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 20px;
      height: 20px;
      content: "";
      border-color: #fff;
      border-style: solid;
      border-width: 0 1px 1px 0;
    }
  }
}

@media screen and (min-width: 1100px) and (max-width: 1400px) {
  .home-header {
    .header-left {
      top: 3vw;
      bottom: 3vw;
      left: 3vw;

      .logo-img {
        width: 120px;
        height: 40px;
      }

      .menu {
        margin-top: 80px;

        .menu-item {
          margin-top: 40px;
          font-size: 13px;
          letter-spacing: 0;
        }
      }

      &::before {
        width: 14px;
        height: 14px;
      }
    }

    .header-right {
      top: 3vw;
      right: 3vw;
      bottom: 3vw;

      .joinbutton {
        font-size: 24px;
        line-height: 40px;

        &::before {
          right: 1px;
          bottom: 7px;
          width: 92%;
        }
      }

      &::after {
        width: 14px;
        height: 14px;
      }
    }
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .home-header {
    .header-left {
      top: 2.4vw;
      bottom: 2.4vw;
      left: 2.4vw;

      .logo-img {
        width: 90px;
        height: 30px;
      }

      .menu {
        margin-top: 60px;

        .menu-item {
          margin-top: 30px;
          font-size: 12px;
          letter-spacing: 0;
        }
      }

      &::before {
        width: 10px;
        height: 10px;
      }
    }

    .header-right {
      top: 2.4vw;
      right: 2.4vw;
      bottom: 2.4vw;

      .joinbutton {
        font-size: 20px;
        line-height: 30px;

        &::before {
          right: 1px;
          bottom: 4px;
          width: 92%;
        }
      }

      &::after {
        width: 10px;
        height: 10px;
      }
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .home-header {
    .header-left {
      top: 2vw;
      bottom: 2vw;
      left: 2vw;

      .logo-img {
        width: 80px;
        height: 26px;
      }

      .menu {
        margin-top: 50px;

        .menu-item {
          margin-top: 24px;
          font-size: 12px;
          letter-spacing: 0;
        }
      }

      &::before {
        width: 8px;
        height: 8px;
      }
    }

    .header-right {
      top: 2vw;
      right: 2vw;
      bottom: 2vw;

      .joinbutton {
        font-size: 18px;
        line-height: 26px;

        &::before {
          right: 1px;
          bottom: 4px;
          width: 92%;
        }
      }

      &::after {
        width: 8px;
        height: 8px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .home-header {
    &::before {
      position: fixed;
      z-index: 9;
      width: 100vw;
      height: 30vw;
      content: "";
      background: linear-gradient(180deg, rgb(0 0 0 / 90%) 40%, rgb(0 0 0 / 0%) 100%);
    }

    .header-left {
      top: 6vw;
      bottom: 6vw;
      left: 6vw;

      .logo-img {
        width: 20vw;
        height: 7vw;
      }

      .menu {
        display: none;
      }

      &::before {
        width: 3vw;
        height: 3vw;
      }
    }

    .header-right {
      top: 6vw;
      right: 6vw;
      bottom: 6vw;
      z-index: 10;
      width: auto;

      .joinbutton {
        font-size: 18px;
        line-height: 8vw;
        letter-spacing: 0;

        &::before {
          right: 1px;
          bottom: 6px;
          width: 92%;
        }
      }

      .info {
        top: 130vw;
        right: calc(88vw - 1em);
        display: none;
        font-size: 10px;
        line-height: 1;
        transform: rotate(90deg) scale(.8);
      }

      &::before {
        width: 3vw;
        height: 3vw;
      }

      &::after {
        width: 3vw;
        height: 3vw;
      }
    }
  }
}
</style>
