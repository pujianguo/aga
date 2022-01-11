<template>
  <section class="home-section-5" id="section5">
    <div class="container">
      <h1 class="section-title fromLeft do ae-3">Future Features</h1>
      <div class="content">
        <div class="item fromLeft do" v-for="(item, index) in list" :key="item.id" :class="['ae-' + index]">
          <div class="item-bg">
            <div class="item-title" v-html="item.title"></div>
          </div>
          <div class="item-content">
            <div class="item-title" v-html="item.title"></div>
            <div class="item-desc" v-html="item.desc"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import useInitGsap from '@/hooks/useInitGsap'

const initGsap = (gsap, ScrollTrigger) => {
  gsap.utils.toArray('.home-section-5').forEach(line => {
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

const list = [
  { id: 1, title: 'Fund and NFT', desc: 'Raise Fund and NFT <br> By publish your requests' },
  { id: 2, title: 'Education <br> Task', desc: 'Example：Get 180 SLP <br> From Axie in 3 day. <br> Bonus provided by AGA.' },
  { id: 3, title: 'Game Strategy <br> Task', desc: 'Example：Describe your strategy <br> In Mir4 and attach a ROI. <br>  Bonus provided by AGA.' },
  { id: 4, title: 'Medal of <br> Achievement', desc: 'Unlock guild achievement <br> Badges and get special benefits <br> To help the community.' },
  { id: 5, title: 'Recruit <br> Player', desc: 'Post recruiting player programs <br> And offer incentives. ' },
  { id: 6, title: 'E-sports eventsand <br> reward', desc: 'Hold e-sports events <br> And discover all <br> The possibilities of games.' },
]
</script>

<style lang="scss">
.home-section-5 {
  .container {
    padding: 100px 20px;

    .section-title {
      text-align: right;
    }

    .content {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 156px;

      .item {
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: 346px;
        height: 384px;
        padding-top: 16px;
        margin-bottom: 55px;
        overflow: hidden;
        background: rgb(64 64 64 / 50%);
        border-radius: 20px;

        &:hover {
          .item-bg {
            top: -100%;

            .item-title {
              display: none;
            }
          }

          .item-content {
            top: 0%;
          }
        }

        .item-bg {
          position: absolute;
          top: 0;
          left: 0;
          box-sizing: border-box;
          display: flex;
          align-items: flex-end;
          width: 100%;
          height: 100%;
          padding: 16px;
          transition: all .5s;
        }

        &:nth-child(1) {
          .item-bg {
            background: url("/images/home/section5_item1_bg.svg") no-repeat center / cover;
          }
        }

        &:nth-child(2) {
          .item-bg {
            background: url("/images/home/section5_item2_bg.svg") no-repeat center / cover;
          }
        }

        &:nth-child(3) {
          .item-bg {
            background: url("/images/home/section5_item3_bg.svg") no-repeat center / cover;
          }
        }

        &:nth-child(4) {
          .item-bg {
            background: url("/images/home/section5_item4_bg.svg") no-repeat center / cover;
          }
        }

        &:nth-child(5) {
          .item-bg {
            background: url("/images/home/section5_item5_bg.svg") no-repeat center / cover;
          }
        }

        &:nth-child(6) {
          .item-bg {
            background: url("/images/home/section5_item6_bg.svg") no-repeat center / cover;
          }
        }

        .item-content {
          position: absolute;
          top: 100%;
          left: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background: #7942f7;
          transition: all .5s;
        }

        .item-title {
          position: relative;
          z-index: 1;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 80px;
          font-family: Futura;
          font-size: 25px;
          font-style: normal;
          font-weight: bold;
          line-height: 40px;
          color: #fff;
          text-align: center;
          text-transform: uppercase;
        }

        .item-desc {
          margin-top: 28px;
          font-family: Futura;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 32px;
          text-align: center;
          letter-spacing: 0;
          opacity: .7;
        }
      }
    }
  }
}

@media screen and (min-width: 1100px) and (max-width: 1400px) {
  .home-section-5 .container {
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .home-section-5 .container {
  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .home-section-5 .container {
  }
}

@media screen and (max-width: 768px) {
  .home-section-5 {
    .container {
    }
  }
}
</style>
