<script setup>
import Swiper, { Pagination } from 'swiper'
import { ref, onMounted } from 'vue'
import 'swiper/css'
import 'swiper/css/pagination'

import useInitGsap from '@/hooks/useInitGsap'

const initGsap = (gsap, ScrollTrigger) => {
}
useInitGsap(initGsap)
let swiper = null
onMounted(() => {
  swiper = new Swiper('.home-section-4 .swiper-container', {
    modules: [Pagination],
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
  })
})
const nextHandle = () => {
  swiper.slideNext()
}
</script>
<template>
  <section class="home-section-4">
    <div class="container">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <div class="swiper-slide">Slide 4</div>
          <div class="swiper-slide">Slide 5</div>
          <div class="swiper-slide">Slide 6</div>
          <div class="swiper-slide">Slide 7</div>
          <div class="swiper-slide">Slide 8</div>
          <div class="swiper-slide">Slide 9</div>
          <div class="swiper-slide">Slide 10</div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <svg-icon class="btn-next swiper-button-next1" name="right" @click="nextHandle"></svg-icon>
  </section>
</template>

<style lang="scss">
.home-section-4 {
  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 100px 20px;

    .swiper-container {
      --swiper-theme-color: #f60;
      --swiper-pagination-color: #0f3;/* 两种都可以 */

      position: relative;
      width: 100%;
      height: 500px;
    }

    .swiper-slide {

      /* Center slide text vertically */
      display: box;
      display: flexbox;
      display: flex;
      display: flex;
      align-items: center;
      align-items: center;
      justify-content: center;
      justify-content: center;
      font-size: 18px;
      text-align: center;
      background: #fff;
      transition: 300ms;
      transform: scale(.8);
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
    }

    .swiper-slide-active,
    .swiper-slide-duplicate-active {
      transform: scale(1);
    }
  }

  .btn-next {
    width: 64px;
    height: 64px;
  }
}

@media screen and (min-width: 1100px) and (max-width: 1400px) {
  .home-section-4 .container {
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .home-section-4 .container {
  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .home-section-4 .container {
  }
}

@media screen and (max-width: 768px) {
  .home-section-4 {
    .container {
    }
  }
}
</style>
