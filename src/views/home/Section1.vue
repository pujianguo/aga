<template>
  <section class="home-section-1" @mousemove="mousemoveHandler" id="section1">
    <div class="container">
      <div class="line"></div>
      <div class="text-content">
        <div class="title">
        <h1 class="fromRight ae-3 do">Arche Guilds</h1>
        <h1 class="fromRight ae-5 do">Alliance</h1>
      </div>
      <a class="join fromRight ae-7 do" href="https://archenetwork.typeform.com/AGAAPPLY" target="_blank">Join AGA</a>
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
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 90px 20px 200px;

    .line {
      position: relative;
      width: 80%;
      height: 1px;
      margin: 0 auto;

      &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 1px;
        content: "";
        background: linear-gradient(-90deg, rgb(255 255 255 / 80%) 0%, rgb(255 255 255 / 0%) 100%);
      }

      &::after {
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 1px;
        content: "";
        background: linear-gradient(90deg, rgb(255 255 255 / 80%) 0%, rgb(255 255 255 / 0%) 100%);
      }

      // border-image-source:
    }

    .text-content {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;

      .title {
        font-family: Mackay Test;
        font-size: 80px;
        font-style: normal;
        font-weight: 600;
        line-height: 1.2;
        text-align: right;
        letter-spacing: .05em;
      }

      .join {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: fit-content;
        height: fit-content;
        padding: 15px 40px;
        margin-top: 30px;
        font-family: Mackay Test;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 26px;
        color: #fff;
        text-align: right;
        letter-spacing: .05em;
        white-space: nowrap;
        border: 1px solid #fff;
        border-radius: 9px;
        transition: all .25s;

        &:hover {
          color: #000;
          background: #fff;
        }
      }
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
