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
    smallImage: 'https://media.arche.network/arche2.0/images/aga/aga-guilds-01.png',
    bigImage: 'https://media.arche.network/arche2.0/images/aga/aga-guilds-01b.png',
    website: 'https://yggsea.io/',
    community: {
      discord: 'https://discord.com/invite/yggsea',
      twitter: 'http://twitter.com/yggsea',
    },
  },
  {
    id: 2,
    name: 'YIELD GUILD',
    player: '103,007+',
    language: 'English',
    title: 'YGG IS A PLAY-TO-EARN GAMING GUILD',
    desc: 'YGG IS A PLAY-TO-EARN GAMING GUILD, BRINGING PLAYERS TOGETHER TO EARN VIA BLOCKCHAIN-BASED ECONOMIES. We ARE THE SETTLERS OF NEW WORLDS IN THE METAVERSE.',
    smallImage: 'https://media.arche.network/arche2.0/images/aga/aga-guilds-02.png',
    bigImage: 'https://media.arche.network/arche2.0/images/aga/aga-guilds-02b.png',
    website: 'https://yieldguild.io/',
    community: {
      discord: 'https://discord.com/invite/AWSVhfkVXG',
      twitter: 'https://twitter.com/yieldguild',
    },
  },
  {
    id: 3,
    name: 'AVOCADO DAO',
    player: '61,240+',
    language: 'English',
    title: 'A collection of contributors',
    desc: 'Avocado DAO (Decentralized Autonomous Organization) is a collection of contributors that believe in the benefits of blockchain technologies and the metaverse.',
    smallImage: 'https://media.arche.network/arche2.0/images/aga/aga-guilds-03.png',
    bigImage: 'https://media.arche.network/arche2.0/images/aga/aga-guilds-03b.png',
    website: 'https://www.avocadodao.io/',
    community: {
      discord: 'https://discord.com/invite/avocadoguild',
      twitter: 'https://twitter.com/avocadoguild',
    },
  },
  {
    id: 4,
    name: 'GOOD GAMES GUILD',
    player: '32,220+',
    language: 'English',
    title: 'WE ARE THE NEW SHERIFF IN TOWN',
    desc: 'Good Games Guild is a Gaming Hub that aims to create the largest virtual world economy by optimizing its owned assets to get maximum reward generated.',
    smallImage: 'https://media.arche.network/arche2.0/images/aga/aga-guilds-04.png',
    bigImage: 'https://media.arche.network/arche2.0/images/aga/aga-guilds-04b.png',
    website: 'https://goodgamesguild.com/',
    community: {
      discord: 'https://discord.com/invite/x47U9qkR5K',
      twitter: 'https://twitter.com/goodgamesguild',
    },
  },
  {
    id: 5,
    name: 'EARN GUILD',
    player: '27,017+',
    language: 'English',
    title: 'guild for play-to-earn games',
    desc: 'Earn Guild is a play-to-earn guild. Play-to-earn games are skill-based blockchain games where players earn crypto tokens when they win. We support players of play-to-earn games so that they can earn more.',
    smallImage: 'https://media.arche.network/arche2.0/images/aga/aga-guilds-05.png',
    bigImage: 'https://media.arche.network/arche2.0/images/aga/aga-guilds-05b.png',
    website: 'https://www.earnguild.io/',
    community: {
      discord: 'https://discord.com/invite/earnguild',
      twitter: 'https://twitter.com/EarnGuild',
    },
  },
  {
    id: 6,
    name: 'INFINITY FORCE',
    player: '13,130+',
    language: 'English',
    title: 'BUILD YOUR GUILD',
    desc: 'A simple integrated platform to build a guild, access a global pool of trained players and manage team performance autonomously.',
    smallImage: 'https://media.arche.network/arche2.0/images/aga/aga-guilds-06.png',
    bigImage: 'https://media.arche.network/arche2.0/images/aga/aga-guilds-06b.png',
    website: 'https://infinityforce.com/',
    community: {
      discord: 'https://discord.com/invite/infinity-force',
      twitter: 'http://www.twitter.com/infinityforce_',
    },
  },
]
const initGsap = (gsap, ScrollTrigger) => {
  gsap.utils.toArray('.home-section-4').forEach(line => {
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
  <section class="home-section-4" id="section4">
    <div class="container">
      <div class="big-img-box">
        <div class="img-wrap"><img class="img" :src="currentItem.bigImage" alt=""></div>
        <div class="content">
          <div class="title">Guilds</div>
          <div class="control">
            <svg-icon class="icon" name="left" @click="handlePrev"></svg-icon>
            <svg-icon class="icon" name="right" @click="handleNext"></svg-icon>
          </div>
        </div>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in list" :key="item.id">
            <img class="img" :src="item.smallImage" alt="">
          </div>
        </div>
      </div>
      <div class="info-box">
        <div class="card fromLeft do ae-3">
          <div class="card-title">{{currentItem.name}}</div>
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
            <a class="btn" target="_blank" :href="currentItem.website">WEBSITE</a>
          </div>
        </div>
        <div class="card fromLeft do ae-5">
          <div class="card-title">{{currentItem.title}}</div>
          <div class="card-content">
            <div class="desc">{{currentItem.desc}}</div>
          </div>
          <div class="card-footer">
            <div class="community-list">
              <a class="btn" target="_blank" :href="currentItem.website">WEBSITE</a>
              <a class="item" target="_blank" v-for="(v, k, i) in currentItem.community" :key="i" :href="v">
                <svg-img class="icon" :name="'community_' + k"></svg-img>
                <span>{{k}}</span>
              </a>
            </div>
          </div>
        </div>
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
    padding: 90px 20px 100px;

    .big-img-box {
      position: relative;
      width: 100%;

      .img-wrap {
        width: 100%;
        height: 100%;
        animation: imgop 20s linear infinite;

        @keyframes imgop {
          from {
            opacity: .6;
            transform: scale(.9);
          }

          to {
            opacity: .8;
            transform: scale(1.2);
          }
        }

        &::before {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          content: "";
          background: linear-gradient(180deg, #000 0%, rgb(0 0 0 / 0%) 16%, rgb(0 0 0 / 0%) 60%, #000 100%);
        }

        &::after {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          content: "";
          background: linear-gradient(90deg, #000 0%, rgb(0 0 0 / 0%) 25%, rgb(0 0 0 / 0%) 75%, #000 100%);
        }

        .img {
          display: block;
          width: 100%;
        }
      }

      .content {
        position: absolute;
        top: 0;
        left: 50%;
        z-index: 9;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        transform: translateX(-50%);

        .title {
          position: absolute;
          top: -10px;
          left: 0;
          font-family: Mackay Test;
          font-size: 60px;
          font-style: normal;
          font-weight: 600;
          line-height: 1;
          text-align: left;
          letter-spacing: .05em;
        }
      }

      .control {
        position: absolute;
        top: 50%;
        left: 0;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0;
        transform: translateY(-50%);

        .icon {
          width: 64px;
          height: 64px;
          cursor: pointer;
        }
      }
    }

    .swiper-container {
      position: relative;
      width: 100vw;
      margin-top: -80px;

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
            box-sizing: border-box;
            display: block;
            width: 100%;
            height: 100%;
            padding: 1.5px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgb(0 0 0 / 25%);
          }

          transform: scale(.9);
        }

        .swiper-slide-active {
          background: linear-gradient(180deg, rgb(255 255 255 / 75%) 0%, rgb(255 255 255 / 5%) 100%);
          border-radius: 12px;
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
      margin-top: 70px;
      border-top: 1px solid #fff;

      &::before {
        position: absolute;
        top: -1px;
        left: 0;
        width: 0;
        height: 12px;
        content: "";
        border-left: 1px solid #fff;
      }

      &::after {
        position: absolute;
        top: -1px;
        right: 0;
        width: 0;
        height: 12px;
        content: "";
        border-left: 1px solid #fff;
      }

      .card {
        flex: 1;
        padding-top: 60px;

        &:nth-child(1) {
          position: relative;

          &::before {
            position: absolute;
            top: -1px;
            right: 0;
            width: 0;
            height: 12px;
            content: "";
            border-left: 1px solid #fff;
          }
        }

        .card-title {
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
          margin-top: 20px;

          .list {
            width: 100%;

            .list-item {
              display: flex;
              align-items: center;
              width: 100%;

              .item-label {
                width: 200px;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: 32px;
                color: #fff;
                text-transform: uppercase;
              }

              .item-value {
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 32px;
                color: rgb(255 255 255 / 70%);
              }
            }
          }

          .desc {
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            color: rgb(255 255 255 / 70%);
          }
        }

        .card-footer {
          margin-top: 40px;

          .btn {
            display: block;
            width: 140px;
            height: 36px;
            font-size: 16px;
            font-style: normal;
            font-weight: 800;
            line-height: 36px;
            color: rgb(255 255 255 / 100%);
            text-align: center;
            background: rgb(255 255 255 / 0%);
            border: 1px solid rgb(255 255 255 / 100%);
            border-radius: 20px;
            transition: all .3s;

            &:hover {
              color: rgb(0 0 0 / 100%);
              background: rgb(255 255 255 / 100%);
            }
          }

          .community-list {
            display: flex;
            gap: 40px;
            align-items: center;
            justify-content: flex-start;

            .item {
              display: flex;
              gap: 14px;
              width: 120px;
              height: 32px;
              color: #fff;

              &:hover {
                text-decoration: underline;
              }

              .icon {
                display: inline-block;
                width: 32px;
                height: 32px;
              }

              span {
                display: inline-block;
                font-size: 16px;
                font-weight: 800;
                line-height: 32px;
                text-transform: uppercase;
              }
            }
          }
        }
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
      padding: 6vw;
      padding-top: 100px;

      .big-img-box {
        width: 100%;
        height: 35vw;

        .img-wrap {
          width: 100%;
          height: 100%;
          transform-origin: top center;
          animation: imgop 20s linear infinite;

          @keyframes imgop {
            from {
              opacity: .8;
              transform: scale(1.6);
            }

            to {
              opacity: 1;
              transform: scale(1.8);
            }
          }

          .img {
            display: block;
            width: 100%;
          }
        }

        .content {
          z-index: 999;

          .title {
            top: -10px;
            font-size: 32px;
          }
        }

        .control {
          top: 80%;
          z-index: 999;

          .icon {
            width: 32px;
            height: 32px;
            cursor: pointer;
          }
        }
      }

      .swiper-container {
        position: relative;
        z-index: 10;
        width: 320vw;
        margin-top: 50px;

        .swiper-wrapper {
          .swiper-slide {
            .img {
              padding: 1px;
            }
          }

          .swiper-slide-active {
            background: linear-gradient(180deg, rgb(255 255 255 / 75%) 0%, rgb(255 255 255 / 5%) 100%);
            border-radius: 12px;
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
        flex-direction: column;
        width: 76vw;
        margin-top: 40px;
        margin-right: 6vw;
        margin-left: 6vw;

        .card {
          flex: 1;
          padding-top: 30px;

          &:nth-child(1) {
            position: relative;

            &::before {
              position: absolute;
              top: -1px;
              right: 0;
              width: 0;
              height: 12px;
              content: "";
              border-left: 1px solid #fff;
            }
          }

          .card-title {
            font-size: 18px;
            line-height: 1;
          }

          .card-content {
            height: auto;
            margin-top: 16px;

            .list {
              .list-item {
                justify-content: space-between;

                .item-label {
                  width: auto;
                  font-size: 14px;
                  line-height: 1.8;
                }

                .item-value {
                  font-size: 14px;
                  line-height: 1.8;
                }
              }
            }

            .desc {
              font-size: 14px;
              line-height: 1.6;
            }
          }

          .card-footer {
            margin-top: 0;

            .btn {
              display: none;

              &:hover {
                color: rgb(0 0 0 / 100%);
                background: rgb(255 255 255 / 100%);
              }
            }

            .community-list {
              display: flex;
              gap: 40px;
              align-items: center;
              justify-content: flex-start;
              margin-top: 30px;

              .btn {
                display: block;
                color: rgb(0 0 0 / 100%);
                background: rgb(255 255 255 / 100%);
              }

              .item {
                display: flex;
                gap: 14px;
                width: 32px;
                height: 32px;
                color: #fff;

                &:hover {
                  text-decoration: underline;
                }

                .icon {
                  display: inline-block;
                  width: 32px;
                  height: 32px;
                }

                span {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
