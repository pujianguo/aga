<template>
  <div class="home-header fromTop ae-1 do">
    <div class="header-left">
      <div class="logo-box">
        <svg-img class="logo-img" name="logo"></svg-img>
        <span class="logo-text">AGA</span>
      </div>
      <div class="menu">
        <div v-for="item in menuList" :key="item.id" class="menu-item" :class="{'active': routeName === item.routeName}">{{item.title}}</div>
      </div>
    </div>
    <div class="header-right">
      <div class="info">2022/SUPPORT</div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
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
    .from('.home-header .background', { y: innerHeight * -1 }, 0)
}
useInitGsap(initGsap)

const menuList = [
  { id: 1, title: 'HOME', routeName: 'Home', href: '' },
  { id: 2, title: 'STORE', routeName: '', href: '' },
  { id: 3, title: 'NEWS', routeName: '', href: '' },
  { id: 4, title: 'SERVICE', routeName: '', href: '' },
  { id: 5, title: 'ABOUT', routeName: '', href: '' },
]

const route = useRoute()
const routeName = computed(() => {
  return route.name
})

const mouseenterHandler = (e) => {
}
const mouseleaveHandler = () => {
}

const openMenu = ref(false)
const openMenuHandle = () => {
  openMenu.value = !openMenu.value
}

onMounted(() => {
  mouseleaveHandler()
})
</script>

<style lang="scss">
.home-header {
  position: relative;
  z-index: 100;

  .header-left {
    position: fixed;
    top: 10vh;
    bottom: 10vh;
    left: 60px;
    z-index: 100;

    .logo-box {
      display: flex;
      align-items: center;

      .logo-img {
        width: 44px;
        height: 44px;
      }

      .logo-text {
        margin-left: 5px;
        font-family: Cindie Mono;
        font-size: 29px;
        font-style: normal;
        font-weight: 400;
        line-height: 46px;
        text-align: center;
        letter-spacing: 0;
      }
    }

    .menu {
      margin-top: 100px;

      .menu-item {
        margin-top: 58px;
        font-family: Futura;
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
    top: 10vh;
    right: 60px;
    bottom: 10vh;
    width: 100px;

    .info {
      position: absolute;
      top: 320px;
      right: 0;
      font-family: Futura;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: .05em;
      opacity: .45;
      transform: rotate(90deg);
      transform-origin: right top;
    }

    &::before {
      position: absolute;
      top: 0;
      right: 0;
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
