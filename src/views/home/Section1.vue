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
  background: url("https://media.arche.network/arche2.0/images/aga/aga-slide1-img.png") no-repeat center / cover;

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
  .home-section-1 {
    .container {
      padding: 60px 20px 15vh;

      .text-content {
        .title {
          font-size: 64px;
        }

        .join {
          padding: 14px 32px;
          margin-top: 24px;
          font-size: 22px;
          line-height: 1;
          border-radius: 9px;
        }
      }
    }
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .home-section-1 {
    .container {
      padding: 60px 20px 15vh;

      .text-content {
        .title {
          font-size: 50px;
        }

        .join {
          padding: 12px 28px;
          margin-top: 20px;
          font-size: 20px;
          line-height: 1;
          border-radius: 7px;
        }
      }
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .home-section-1 {
    .container {
      padding: 30px 20px 15vh;

      .text-content {
        .title {
          font-size: 46px;
        }

        .join {
          padding: 12px 28px;
          margin-top: 20px;
          font-size: 18px;
          line-height: 1;
          border-radius: 7px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .home-section-1 {
    background: url("https://media.arche.network/arche2.0/images/aga/aga-slide1-img-mb.png") no-repeat center / cover;

    .container {
      min-height: auto !important;
      padding: 6vw;
      padding-top: 10vw;

      .line {
        width: 50%;
      }

      .text-content {
        padding-top: 80vw;
        padding-bottom: 20vw;

        .title {
          font-size: 36px;
          letter-spacing: .05em;
        }

        .join {
          padding: 8px 30px;
          margin-top: 20px;
          font-size: 18px;
          line-height: 1.4;
          border-radius: 6px;
        }
      }
    }
  }
}
</style>
