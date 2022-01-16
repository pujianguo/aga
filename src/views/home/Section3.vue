<script setup>
import { computed, onMounted, ref } from 'vue'
import useInitGsap from '@/hooks/useInitGsap'
import Swiper from 'swiper'
import 'swiper/css'

const initGsap = (gsap, ScrollTrigger) => {
  gsap.utils.toArray('.home-section-3').forEach(line => {
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

// swiper
let swiper = null
onMounted(() => {
  swiper = new Swiper('.home-section-3 .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    slideToClickedSlide: true,
    loop: true,
  })
  swiper.on('activeIndexChange', function (e) {
    const { realIndex } = e
    console.log('realIndex', realIndex)
    currentIndex.value = realIndex
  })
})
const list = [
  { id: 1, title: 'Latest and Top Games Offering', desc: 'Arche have the latest game connection and information and share the information such as the game strategy to the guilds that allows them to join the game in early stage.', imgUrl: 'https://media.arche.network/arche2.0/images/aga/aga-why-1.png' },
  { id: 2, title: 'Launchpad Whitelist', desc: 'Can get whitelisted from Game Asset Offerings for Guilds that support Games in the early stage or invested in.', imgUrl: 'https://media.arche.network/arche2.0/images/aga/aga-why-2.png' },
  { id: 3, title: 'Listed in Arche Network', desc: 'The Guilds logo will be shown below the games that they participate in, that allows more people to enter the guilds when they wanna join the game.', imgUrl: 'https://media.arche.network/arche2.0/images/aga/aga-why-3.png' },
  { id: 4, title: 'More Incentive', desc: 'When a projects want to do promotion, they could submit their event detail to Arche and we will deliver the event information to the Guilds in AGA. And the Guilds community could get the exclusive incentive.', imgUrl: 'https://media.arche.network/arche2.0/images/aga/aga-why-4.png' },
]
const currentIndex = ref(0)
const currentItem = computed(() => {
  return list[currentIndex.value]
})
const handleItemChange = (index) => {
  swiper.slideTo(index + 3)
}
const handlePrev = () => {
  swiper.slidePrev()
}
const handleNext = () => {
  swiper.slideNext()
}
</script>

<template>
  <section class="home-section-3" id="section3">
    <div class="container">
      <h1 class="title fromLeft ae-1 do">Why Join The AGA</h1>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in list" :key="item.id"
            :style="{'--url': `url(${item.imgUrl})`}"
            >
              <img class="bg-img" :src="item.imgUrl" alt="">
              <div class="content">{{item.desc}}</div>
          </div>
        </div>
      </div>

      <div class="line"></div>
      <div class="footer">
        <svg-icon class="icon" name="left" @click="handlePrev"></svg-icon>
        <div class="btn">{{currentItem.title}}</div>
        <svg-icon class="icon" name="right" @click="handleNext"></svg-icon>
      </div>
      <div class="menu">
        <div class="line-box fromLeft ae-2 do">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
        <div class="content-box">
          <div class="item fromLeft do" v-for="(item, index) in list" :key="item.id" :class="[{'active': currentIndex === index}, 'ae-' + index]"
            @click="handleItemChange(index)">
            <div class="item-icon">
              <svg-img class="icon-ball" name="ball" v-for="i in item.id" :key="index + i"></svg-img>
            </div>
            <div class="item-text">
              {{item.title}}
            </div>
          </div>
          <!-- <svg-icon class="last-icon" name="plus"></svg-icon> -->
        </div>
      </div>
      <div class="list-mb">
        <div class="list-item" v-for="item in list" :key="item.id">
          <div class="item-icon">
              <svg-img class="icon-ball" name="ball" v-for="i in item.id" :key="index + i"></svg-img>
          </div>
          <div class="titleimg" :style="{'background': `url(${item.imgUrl})`}">{{item.title}}</div>
          <div class="content">{{item.desc}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.home-section-3 {
  .container {
    z-index: 2;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 940px !important;
    min-height: 940px !important;
    padding: 90px 20px 100px;

    .title {
      align-self: flex-end;
      margin-bottom: 80px;
      font-family: Mackay Test;
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: 66px;
      color: #fff;
      text-align: right;
      letter-spacing: .05em;
    }

    .menu {
      width: 100%;

      .line-box {
        box-sizing: border-box;
        display: flex;
        width: 100%;
        height: 12px;
        margin-bottom: 20px;
        border: 1px solid #fff;
        border-bottom: 0;

        .item {
          flex: 1;
          height: 12px;
          border-right: 1px solid #fff;

          &:last-child {
            border: 0;
          }
        }
      }

      .content-box {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        padding-left: 20%;

        .item {
          position: relative;
          width: calc(100% / 5);
          cursor: pointer;
          opacity: .3;
          transition: all .3s;

          .item-icon {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            width: 40px;
            height: 40px;
            margin-left: -4px;

            .icon-ball {
              width: 20px;
              height: 20px;
            }
          }

          .item-text {
            max-width: 160px;
            margin-top: 10px;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 1.4;
            color: #fff;
            text-transform: uppercase;
            mix-blend-mode: normal;
          }

          &.active {
            opacity: 1;
          }

          &:nth-child(3) {
            .item-icon {
              position: relative;

              .icon-ball {
                position: absolute;

                &:nth-child(1) {
                  bottom: 0;
                  left: 0;
                }

                &:nth-child(2) {
                  right: 0;
                  bottom: 0;
                }

                &:nth-child(3) {
                  bottom: 17px;
                  left: 10px;
                }
              }
            }
          }
        }

        .last-icon {
          position: absolute;
          top: 0;
          right: 0;
          width: 64px;
          height: 64px;
          cursor: pointer;
        }
      }
    }

    .swiper-container {
      position: relative;
      width: 100vw;
      height: 300px;
      margin-top: 0;

      .swiper-wrapper {
        .swiper-slide {

          /* Center slide text vertically */
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          text-align: center;
          transition: 300ms;
          transform: scale(.8);
        }

        .swiper-slide {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;

          // width: 798px !important;
          // height: 425px !important;
          border-radius: 425px;
          opacity: .5;

          .bg-img {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            border: 1px solid #fff;
            border-radius: 425px;
          }

          .content {
            position: relative;
            z-index: 1;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 630px;
            height: 200px;
            padding: 5% 10%;
            margin: 0 50px;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 1.6;
            color: rgb(255 255 255 / 70%);
            text-align: center;
            background: rgb(0 0 0 / 50%);
            border-radius: 100px;
            mix-blend-mode: normal;
            opacity: 0;
            transition: all .3s;
            transform: scale(.8);
            backdrop-filter: blur(10px);
          }
        }

        .swiper-slide-active,
        .swiper-slide-duplicate-active {
          opacity: 1;
          transform: scale(1);

          .content {
            opacity: 1;
            transform: scale(1);
          }
        }
      }
    }

    .list-mb {
      display: none;
    }

    .line {
      position: relative;
      top: -40px;
      z-index: 99;
      width: 1px;
      height: 80px;
      margin: 0 auto;
      background: #fff;
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: -20px;
      margin-bottom: 60px;

      .icon {
        width: 64px;
        height: 64px;
        cursor: pointer;
      }

      .btn {
        position: relative;
        height: 60px;
        padding: 0 20px;
        font-size: 25px;
        font-style: normal;
        font-weight: bold;
        line-height: 60px;
        color: #fff;
        text-align: center;
        text-transform: uppercase;

        &::before {
          position: absolute;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          content: "";
          border-color: #fff;
          border-style: solid;
          border-width: 1px 0 0 1px;
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
  }
}

@media screen and (min-width: 1100px) and (max-width: 1400px) {
  .home-section-3 {
    .container {
      height: 860px !important;
      min-height: 860px !important;
      padding: 90px 20px 100px;

      .title {
        margin-bottom: 60px;
        font-size: 50px;
        line-height: 1;
      }

      .menu {
        .content-box {
          .item {
            .item-text {
              max-width: 140px;
              font-size: 14px;
            }
          }
        }
      }

      .swiper-container {
        position: relative;
        width: 130vw;
        height: 260px;

        .swiper-wrapper {
          .swiper-slide {
            font-size: 16px;
          }
        }
      }

      .list-mb {
        display: none;
      }

      .line {
        top: -36px;
        height: 60px;
      }

      .footer {
        width: 100%;
        margin-top: -20px;
        margin-bottom: 60px;

        .icon {
          width: 50px;
          height: 50px;
          cursor: pointer;
        }

        .btn {
          height: 50px;
          font-size: 22px;
          line-height: 50px;

          &::before {
            width: 14px;
            height: 14px;
          }

          &::after {
            width: 14px;
            height: 14px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .home-section-3 {
    .container {
      height: 760px !important;
      min-height: 760px !important;
      padding: 80px 20px;

      .title {
        margin-bottom: 40px;
        font-size: 40px;
        line-height: 1;
      }

      .menu {
        .content-box {
          .item {
            .item-text {
              max-width: 120px;
              height: 2em;
              font-size: 12px;
            }
          }
        }
      }

      .swiper-container {
        position: relative;
        width: 150vw;
        height: 260px;

        .swiper-wrapper {
          .swiper-slide {
            font-size: 14px;
          }
        }
      }

      .list-mb {
        display: none;
      }

      .line {
        top: -36px;
        height: 60px;
      }

      .footer {
        width: 100%;
        margin-top: -20px;
        margin-bottom: 40px;

        .icon {
          width: 44px;
          height: 44px;
          cursor: pointer;
        }

        .btn {
          height: 40px;
          font-size: 20px;
          line-height: 40px;

          &::before {
            width: 10px;
            height: 10px;
          }

          &::after {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .home-section-3 {
    .container {
      height: 660px !important;
      min-height: 660px !important;
      padding: 60px 20px;

      .title {
        margin-bottom: 32px;
        font-size: 32px;
        line-height: 1;
      }

      .menu {
        .content-box {
          .item {
            .item-text {
              max-width: 110px;
              height: 2em;
              font-size: 12px;
            }
          }
        }
      }

      .swiper-container {
        position: relative;
        width: 180vw;
        height: 220px;

        .swiper-wrapper {
          .swiper-slide {
            font-size: 12px;

            .content {
              height: 160px;
              font-size: 12px;
            }
          }
        }
      }

      .list-mb {
        display: none;
      }

      .line {
        top: -36px;
        height: 60px;
      }

      .footer {
        width: 100%;
        margin-top: -20px;
        margin-bottom: 40px;

        .icon {
          width: 32px;
          height: 32px;
        }

        .btn {
          height: 32px;
          font-size: 16px;
          line-height: 32px;

          &::before {
            width: 8px;
            height: 8px;
          }

          &::after {
            width: 8px;
            height: 8px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .home-section-3 {
    .container {
      width: 100%;
      height: auto !important;
      min-height: auto !important;
      padding: 6vw;

      .title {
        align-self: center;
        margin-top: 60px;
        margin-bottom: 80px;
        font-size: 32px;
        line-height: 1.6;
        text-align: center;
        letter-spacing: 0;
      }

      .list-mb {
        display: flex;
        flex-direction: column;
        gap: 15vw;

        .list-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;

          .item-icon {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            margin-bottom: 20px;
            margin-left: -4px;

            .icon-ball {
              width: 20px;
              height: 20px;
            }
          }

          &:nth-child(3) {
            .item-icon {
              position: relative;

              .icon-ball {
                position: absolute;

                &:nth-child(1) {
                  bottom: 0;
                  left: 0;
                }

                &:nth-child(2) {
                  right: 0;
                  bottom: 0;
                }

                &:nth-child(3) {
                  bottom: 17px;
                  left: 10px;
                }
              }
            }
          }

          .titleimg {
            position: relative;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 90px;
            padding: 10px 12vw;
            margin-bottom: 40px;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 800;
            line-height: 130%;
            color: #fff;
            text-align: center;
            text-transform: uppercase;
            background-position-y: -50px !important;
            background-size: cover !important;
            border: 1px solid rgb(255 255 255 / 80%);
            border-radius: 90px;

            &::before {
              position: absolute;
              bottom: -12vw;
              width: 1px;
              height: 12vw;
              content: "";
              background: linear-gradient(180deg, rgb(255 255 255 / 80%) 40%, rgb(255 255 255 / 0%) 100%);
            }
          }

          .content {
            padding: 0 4vw;
            font-family: Inter;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 1.6;
            color: #fff;
            text-align: center;
            opacity: .7;
          }
        }
      }

      .menu {
        display: none;
      }

      .swiper-container {
        display: none;
      }

      .line {
        display: none;
      }

      .footer {
        display: none;
      }
    }
  }
}
</style>
