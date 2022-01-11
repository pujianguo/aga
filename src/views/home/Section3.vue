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
  { id: 1, title: 'Latest and Top Games Offering', desc: 'Arche have the latest game connection and information and share the information such as the game strategy to the guilds that allows them to join the game in early stage.', imgUrl: '/images/home/section3_item1_bg.png' },
  { id: 2, title: 'Launchpad Whitelist', desc: 'Can get whitelisted from Game Asset Offerings for Guilds that support Games in the early stage or invested in.', imgUrl: '/images/home/section3_item2_bg.png' },
  { id: 3, title: 'Listed inArche Network', desc: 'The guilds logo will be shown below the games that they participate in, that allows more people to enter the guilds when they wanna join the game.', imgUrl: '/images/home/section3_item3_bg.png' },
  { id: 4, title: 'MORE OPPORTUNITIES', desc: 'When a projects want to do promotion, they could submit their event detail to Arche and we will deliver the event information to the Guilds in AGA. And the Guilds community could get the exclusive incentive.', imgUrl: '/images/home/section3_item4_bg.png' },
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
      <div class="menu">
        <div class="line-box fromLeft ae-2 do">
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
    height: 100%;
    padding: 90px 20px 200px;

    .title {
      align-self: flex-end;
      margin-bottom: 147px;
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
        height: 32px;
        margin-bottom: 45px;
        border: 1.5px solid #fff;
        border-bottom: 0;

        .item {
          flex: 1;
          height: 32px;
          border-right: 1.5px solid #fff;

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

        .item {
          position: relative;
          flex: 1;
          cursor: pointer;
          opacity: .4;

          .item-icon {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            width: 60px;
            height: 60px;

            .icon-ball {
              width: 30px;
              height: 30px;
            }
          }

          .item-text {
            max-width: 200px;
            margin-top: 16px;
            font-family: Futura;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
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
                  bottom: 28px;
                  left: 15px;
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
      width: 150vw;
      height: 425px;
      margin-top: 194px;

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
          }

          .content {
            position: relative;
            z-index: 1;
            box-sizing: border-box;
            display: flex;
            display: none;
            align-items: center;
            justify-content: center;
            max-width: 630px;
            height: 200px;
            padding: 26px 80px;
            margin: 0 50px;
            font-family: Futura;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            color: #fff;
            text-align: center;
            background: #404040;
            border-radius: 100px;
            mix-blend-mode: normal;
            opacity: .7;
          }
        }

        .swiper-slide-active,
        .swiper-slide-duplicate-active {
          opacity: 1;
          transform: scale(1);

          .content {
            display: flex;
          }
        }
      }
    }

    .line {
      width: 1px;
      height: 148px;
      margin: 0 auto;
      background: #fff;
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 16px;

      .icon {
        width: 64px;
        height: 64px;
        cursor: pointer;
      }

      .btn {
        position: relative;
        height: 60px;
        padding: 0 20px;
        font-family: Futura;
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
  .home-section-3 .container {
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .home-section-3 .container {
  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .home-section-3 .container {
  }
}

@media screen and (max-width: 768px) {
  .home-section-3 {
    .container {
    }
  }
}
</style>
