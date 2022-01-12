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
        line-height: 20px;
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
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .home-header {
  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {

}

@media screen and (max-width: 768px) {

}
</style>
