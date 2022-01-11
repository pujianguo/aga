<template>
  <section class="home-section-1" @mousemove="mousemoveHandler" id="section1">
    <div class="container">
      <div class="line"></div>
      <div class="title">
        <h1 class="fromLeft ae-3 do">Arche Guilds</h1>
        <h1 class="fromLeft ae-5 do">Alliance</h1>
      </div>
    </div>
  </section>
</template>

<script setup>
import useInitGsap from '@/hooks/useInitGsap'

const initGsap = (gsap, ScrollTrigger) => {
  gsap.utils.toArray('.home-section-1').forEach(line => {
    ScrollTrigger.create({
      trigger: line,
      toggleClass: 'animateOnEvent',
      start: 'top 80%',
      end: 'top -200%',
      // markers: true,
    })
  })
}
useInitGsap(initGsap)

const mousemoveHandler = (e) => {
  // console.log('window.innerWidth', window.innerWidth)
  // console.log('e.pageX', e.pageX)
  // const m = -(window.innerWidth / 2 - e.pageX) / 80
  // const n = -(window.innerHeight / 2 - e.pageY) / 80
  // style.value = `
  //   transform: rotate(${m}deg) ;
  //   transform-origin:50% 70%;
  //   -webkit-transform: rotate(${m}deg) ;
  //   -moz-transform: rotate(${m}deg) ')
  // `
  // style.value = `
  //   transform: rotateY(${m}deg) rotateX(${n}deg);
  //   -webkit-transform: rotateY(${m}deg) rotateX(${n}deg);
  //   -moz-transform: rotateY(${m}deg) rotateX(${n}deg)')
  // `
}
</script>

<style lang="scss">
.home-section-1 {
  z-index: 3;
  background: url("/images/home/section1_bg.png") no-repeat center / cover;

  .container {
    z-index: 2;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 90px 20px 200px;

    .line {
      position: relative;
      width: 100%;
      height: 2px;

      &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 1.5px;
        content: "";
        background: linear-gradient(-90deg, #fff 0%, rgb(255 255 255 / 0%) 100%);
      }

      &::after {
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 1.5px;
        content: "";
        background: linear-gradient(90deg, #fff 0%, rgb(255 255 255 / 0%) 100%);
      }

      // border-image-source:
    }

    .title {
      font-family: Mackay Test;
      font-size: 107px;
      font-style: normal;
      font-weight: 600;
      line-height: 118px;
      text-align: right;
      letter-spacing: .05em;
    }
  }
}

@media screen and (min-width: 1100px) and (max-width: 1400px) {
  .home-section-1 .container {
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .home-section-1 .container {
  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .home-section-1 .background-wrap {
  }

  .home-section-1 .container {
  }
}

@media screen and (max-width: 768px) {
  .home-section-1 {
    .container {
      padding: 6vw;
    }
  }
}
</style>
