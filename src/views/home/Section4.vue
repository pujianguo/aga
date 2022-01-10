<script setup>
import { computed, onMounted, ref } from 'vue'
import useInitGsap from '@/hooks/useInitGsap'
import Swiper from 'swiper'
import 'swiper/css'
const list =
[
  {
    id: 1,
    name: 'YGG SEA',
    player: '39,354+',
    language: 'English',
    title: 'First subDAO of YieldGuild',
    desc: 'First subDAO of YieldGuild. Our mission is to create the biggest and most sustainable Play-To-Earn virtual economy focused on South East Asia.',
    imgUrl: '/images/home/section4_item1_bg.png',
    website: '',
    community: {
      discord: '',
      twitter: '',
      youtube: '',
      subtract: '',
    },
  },
  {
    id: 2,
    name: 'YIELD GUILD',
    player: '103,007+',
    language: 'English',
    title: 'YGG IS A PLAY-TO-EARN GAMING GUILD',
    desc: 'YGG IS A PLAY-TO-EARN GAMING GUILD, BRINGING PLAYERS TOGETHER TO EARN VIA BLOCKCHAIN-BASED ECONOMIES. We ARE THE SETTLERS OF NEW WORLDS IN THE METAVERSE.',
    imgUrl: '/images/home/section4_item2_bg.png',
    website: '',
    community: {
      discord: '',
      twitter: '',
      medium: '',
      union: '',
    },
  },
  {
    id: 3,
    name: 'AVOCADO DAO',
    player: '61,240+',
    language: 'English',
    title: 'A collection of contributors',
    desc: 'Avocado DAO (Decentralized Autonomous Organization) is a collection of contributors that believe in the benefits of blockchain technologies and the metaverse.',
    imgUrl: '/images/home/section4_item3_bg.png',
    website: '',
    community: {
      facebook: '',
      telegram: '',
      youtube: '',
      twitter: '',
      discord: '',
      medium: '',
    },
  },
  {
    id: 4,
    name: 'GOOD GAMES GUILD',
    player: '32,220+',
    language: 'English',
    title: 'WE ARE THE NEW SHERIFF IN TOWN',
    desc: 'Good Games Guild is a Gaming Hub that aims to create the largest virtual world economy by optimizing its owned assets to get maximum reward generated.',
    imgUrl: '/images/home/section4_item4_bg.png',
    website: '',
    community: {
      telegram: '',
      discord: '',
      twitter: '',
      medium: '',
    },
  },
  {
    id: 5,
    name: 'EARN GUILD',
    player: '27,017+',
    language: 'English',
    title: 'guild for play-to-earn games',
    desc: 'Earn Guild is a play-to-earn guild. Play-to-earn games are skill-based blockchain games where players earn crypto tokens when they win. We support players of play-to-earn games so that they can earn more.',
    imgUrl: '/images/home/section4_item5_bg.png',
    website: '',
    community: {
      telegram: '',
      discord: '',
      twitter: '',
      medium: '',
    },
  },
  {
    id: 6,
    name: 'INFINITY FORCE',
    player: '13,130+',
    language: 'English',
    title: 'BUILD YOUR GUILD',
    desc: 'A simple integrated platform to build a guild, access a global pool of trained players and manage team performance autonomously.',
    imgUrl: '/images/home/section4_item6_bg.png',
    website: '',
    community: {
      telegram: '',
      discord: '',
      twitter: '',
    },
  },
]
const initGsap = (gsap, ScrollTrigger) => {
}
useInitGsap(initGsap)

// swiper
let swiper = null
onMounted(() => {
  swiper = new Swiper('.home-section-4 .swiper-container', {
    slidesPerView: 5,
    // spaceBetween: 20,
    slideToClickedSlide: true,
    centeredSlides: true,
    loop: true,
  })
  swiper.on('activeIndexChange', function (e) {
    const { realIndex } = e
    if (realIndex !== currentIndex.value) {
      currentIndex.value = realIndex
    }
  })
})
const currentIndex = ref(0)
const currentItem = computed(() => {
  return list[currentIndex.value]
})
const handlePrev = () => {
  if (currentIndex.value > 1) {
    currentIndex.value--
  } else {
    currentIndex.value = list.length - 1
  }
  swiper.slidePrev()
}
const handleNext = () => {
  if (currentIndex.value < list.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
  swiper.slideNext()
}
</script>

<template>
  <section class="home-section-4">
    <div class="container">
      <div class="big-img-box">
        <img class="img" :src="currentItem.imgUrl" alt="">
        <div class="content">
          <div class="title">Guild List</div>
        </div>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in list" :key="item.id">
            <img class="img" :src="item.imgUrl" alt="">
          </div>
        </div>
      </div>
      <div class="info-box">
        <div class="card">
          <div class="card-title">INFO</div>
          <div class="card-content">
            <div class="list">
              <div class="list-item">
                <div class="item-label">guild name:</div>
                <div class="item-value">{{currentItem.name}}</div>
              </div>
              <div class="list-item">
                <div class="item-label">PLAYER:</div>
                <div class="item-value">{{currentItem.player}}</div>
              </div>
              <div class="list-item">
                <div class="item-label">Language:</div>
                <div class="item-value">{{currentItem.language}}</div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <a class="btn" :href="currentItem.website">webset</a>
          </div>
        </div>
        <div class="card">
          <div class="card-title">{{currentItem.title}}</div>
          <div class="card-content">
            <div class="desc">{{currentItem.desc}}</div>
          </div>
          <div class="card-footer">
            <div class="community-list">
              <a class="item" v-for="(v, k, i) in currentItem.community" :key="i" :href="v">
                <svg-img class="icon" :name="'community_' + k"></svg-img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <svg-icon class="icon" name="left" @click="handlePrev"></svg-icon>
        <svg-icon class="icon" name="right" @click="handleNext"></svg-icon>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.home-section-4 {
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

    .big-img-box {
      position: relative;
      width: 100vw;

      .img {
        display: block;
        width: 100%;
      }

      .content {
        position: absolute;
        top: 0;
        left: 50%;
        box-sizing: border-box;
        width: 100%;
        max-width: 1200px;
        height: 100%;
        padding: 200px;
        transform: translateX(-50%);

        .title {
          position: absolute;
          bottom: 30%;
          left: 0;
          font-family: Mackay Test;
          font-size: 107px;
          font-style: normal;
          font-weight: 600;
          line-height: 118px;
          text-align: left;
          letter-spacing: .05em;
        }
      }
    }

    .swiper-container {
      position: relative;
      width: 100vw;
      margin-top: 97px;

      .swiper-wrapper {
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          text-align: center;
          opacity: .5;
          transition: 300ms;

          .img {
            display: block;
            width: 100%;
            height: 100%;
          }

          transform: scale(.9);
        }

        .swiper-slide-active,
        .swiper-slide-duplicate-active {
          z-index: 999;
          opacity: 1;
          transform: scale(1.2);
        }
      }
    }

    .info-box {
      position: relative;
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 72px;
      border-top: 1px solid #fff;

      &::before {
        position: absolute;
        top: -1px;
        left: 0;
        width: 0;
        height: 32px;
        content: "";
        border-left: 1px solid #fff;
      }

      &::after {
        position: absolute;
        top: -1px;
        right: 0;
        width: 0;
        height: 32px;
        content: "";
        border-left: 1px solid #fff;
      }

      .card {
        flex: 1;
        padding-top: 100px;

        &:nth-child(1) {
          position: relative;

          &::before {
            position: absolute;
            top: -1px;
            right: 0;
            width: 0;
            height: 32px;
            content: "";
            border-left: 1px solid #fff;
          }
        }

        .card-title {
          font-family: Futura;
          font-size: 25px;
          font-style: normal;
          font-weight: 700;
          line-height: 40px;
          color: #fff;
          text-align: left;
          text-transform: uppercase;
          letter-spacing: 0;
        }

        .card-content {
          height: 110px;
          margin-top: 35px;

          .list {
            width: 100%;

            .list-item {
              display: flex;
              align-items: center;
              width: 100%;

              .item-label {
                width: 200px;
                font-family: Futura;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: 32px;
                color: #fff;
                text-transform: uppercase;
              }

              .item-value {
                font-family: Futura;
                font-size: 20px;
                font-style: normal;
                font-weight: 500;
                line-height: 32px;
                color: rgb(255 255 255 / 70%);
              }
            }
          }

          .desc {
            font-family: Futura;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            color: rgb(255 255 255 / 70%);
          }
        }

        .card-footer {
          margin-top: 78px;

          .btn {
            display: block;
            width: 131px;
            height: 34px;
            font-family: Futura;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 34px;
            color: #fff;
            text-align: center;
            background: linear-gradient(61.12deg, #7942f7 28.31%, #ffe5fa 79.69%, #fff 94.59%);
            border-radius: 20px;
          }

          .community-list {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .item {
              display: block;
              width: 40px;
              height: 40px;

              .icon {
                width: 40px;
                height: 40px;
              }
            }
          }
        }
      }
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 70px;

      .icon {
        width: 64px;
        height: 64px;
        cursor: pointer;
      }
    }
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
