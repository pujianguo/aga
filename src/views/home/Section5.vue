<template>
  <section class="home-section-5" id="section5">
    <div class="container">
      <h1 class="section-title fromLeft do ae-3">Future Features</h1>
      <div class="content">
        <div class="item fromLeft do" v-for="(item, index) in list" :key="item.id" :class="['ae-' + index]">
          <div class="item-bg">
            <div class="item-title" v-html="item.title"></div>
            <div class="item-desc" v-html="item.desc"></div>
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
  { id: 2, title: 'Education Task', desc: 'Example：Get 180 SLP <br> From Axie in 3 day. <br> Bonus provided by AGA.' },
  { id: 3, title: 'Game Strategy Task', desc: 'Example：Describe your strategy <br> In Mir4 and attach a ROI. <br>  Bonus provided by AGA.' },
  { id: 4, title: 'Medal of Achievement', desc: 'Unlock guild achievement <br> Badges and get special benefits <br> To help the community.' },
  { id: 5, title: 'Recruit Player', desc: 'Post recruiting player programs <br> And offer incentives. ' },
  { id: 6, title: 'E-sports eventsand reward', desc: 'Hold e-sports events <br> And discover all <br> The possibilities of games.' },
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
      gap: 40px;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 80px;

      .item {
        position: relative;
        box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: calc((100% - 80px) / 3);
        height: 384px;
        padding-top: 20px;
        margin-bottom: 0;
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

          .item-desc {
            display: none;
          }
        }

        &:nth-child(1) {
          .item-bg {
            background: url("https://media.arche.network/arche2.0/images/aga/aga-features-1.png") no-repeat center / cover;
          }
        }

        &:nth-child(2) {
          .item-bg {
            background: url("https://media.arche.network/arche2.0/images/aga/aga-features-2.png") no-repeat center / cover;
          }
        }

        &:nth-child(3) {
          .item-bg {
            background: url("https://media.arche.network/arche2.0/images/aga/aga-features-3.png") no-repeat center / cover;
          }
        }

        &:nth-child(4) {
          .item-bg {
            background: url("https://media.arche.network/arche2.0/images/aga/aga-features-4.png") no-repeat center / cover;
          }
        }

        &:nth-child(5) {
          .item-bg {
            background: url("https://media.arche.network/arche2.0/images/aga/aga-features-5.png") no-repeat center / cover;
          }
        }

        &:nth-child(6) {
          .item-bg {
            background: url("https://media.arche.network/arche2.0/images/aga/aga-features-6.png") no-repeat center / cover;
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
          padding-right: 20px;
          padding-left: 20px;
          font-size: 20px;
          font-style: normal;
          font-weight: 800;
          line-height: 1.4;
          color: #fff;
          text-align: center;
          text-transform: uppercase;
        }

        .item-desc {
          margin-top: 28px;
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
  .home-section-5 {
    .container {
      padding: 50px 20px;

      .content {
        margin-top: 60px;

        .item {
          width: calc((100% - 80px) / 3);
          height: 310px;
          border-radius: 16px;

          .item-title {
            height: 60px;
            padding-right: 16px;
            padding-left: 16px;
            font-size: 18px;
          }

          .item-desc {
            margin-top: 20px;
            font-size: 16px;
            line-height: 1.6;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .home-section-5 {
    .container {
      padding: 20px;

      .content {
        margin-top: 60px;

        .item {
          width: calc((100% - 80px) / 3);
          height: 260px;
          border-radius: 12px;

          .item-title {
            height: 60px;
            padding-right: 16px;
            padding-left: 16px;
            font-size: 16px;
          }

          .item-desc {
            margin-top: 20px;
            font-size: 14px;
            line-height: 1.6;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .home-section-5 {
    .container {
      padding: 20px;

      .content {
        margin-top: 60px;

        .item {
          width: calc((100% - 80px) / 3);
          height: 220px;
          border-radius: 12px;

          .item-title {
            height: 40px;
            padding-right: 0;
            padding-left: 0;
            font-size: 14px;
          }

          .item-desc {
            margin-top: 20px;
            font-size: 12px;
            line-height: 1.6;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .home-section-5 {
    .container {
      padding: 6vw;
      padding-top: 80px;

      .section-title {
        font-size: 32px;
        line-height: 1.6;
      }

      .content {
        flex-direction: column;
        margin-top: 40px;

        .item {
          width: 100%;
          height: 140px;
          padding-top: 0;
          background: rgb(48 48 48 / 100%);
          border-radius: 12px;

          &:hover {
            .item-bg {
              top: 0;

              .item-title {
                display: flex;
              }
            }

            .item-content {
              top: 100%;
            }
          }

          .item-bg {
            position: absolute;
            top: 0;
            left: 0;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-content: flex-end;
            justify-content: space-between;

            // align-items: flex-end;
            width: 100%;
            height: 100%;
            padding: 16px;
            transition: all .5s;
          }

          .item-content {
            position: absolute;
            top: 100%;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 100%;
            background: #7942f7;
            transition: all .5s;
          }

          .item-title {
            align-items: flex-end;
            justify-content: flex-end;
            width: 100%;
            height: auto;
            padding: 0;
            font-size: 18px;
            font-style: normal;
            font-weight: 800;
            line-height: 1;
            text-align: right;
          }

          .item-desc {
            width: 80%;
            margin-top: 0;
            font-size: 14px;
            line-height: 1.6;
            text-align: right;
          }

          &:nth-child(1) {
            .item-bg {
              background: url("https://media.arche.network/arche2.0/images/aga/aga-features-1.png") no-repeat;
              background-position: left top;
              background-size: 44%;
            }
          }

          &:nth-child(2) {
            .item-bg {
              align-items: flex-start;
              background: url("https://media.arche.network/arche2.0/images/aga/aga-features-2.png") no-repeat;
              background-position: right top;
              background-size: 44%;

              .item-title {
                justify-content: flex-start;
                text-align: left;
              }

              .item-desc {
                text-align: left;
              }
            }
          }

          &:nth-child(3) {
            .item-bg {
              background: url("https://media.arche.network/arche2.0/images/aga/aga-features-3.png") no-repeat;
              background-position: left top;
              background-size: 44%;
            }
          }

          &:nth-child(4) {
            .item-bg {
              align-items: flex-start;
              background: url("https://media.arche.network/arche2.0/images/aga/aga-features-4.png") no-repeat;
              background-position: right top;
              background-size: 44%;

              .item-title {
                justify-content: flex-start;
                text-align: left;
              }

              .item-desc {
                text-align: left;
              }
            }
          }

          &:nth-child(5) {
            .item-bg {
              background: url("https://media.arche.network/arche2.0/images/aga/aga-features-5.png") no-repeat;
              background-position: left top;
              background-size: 44%;
            }
          }

          &:nth-child(6) {
            .item-bg {
              align-items: flex-start;
              background: url("https://media.arche.network/arche2.0/images/aga/aga-features-6.png") no-repeat;
              background-position: right top;
              background-size: 44%;

              .item-title {
                justify-content: flex-start;
                text-align: left;
              }

              .item-desc {
                text-align: left;
              }
            }
          }
        }
      }
    }
  }
}
</style>
