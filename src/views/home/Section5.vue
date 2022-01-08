<template>
  <section class="home-section-5">
    <div class="container">
      <h1 class="section-title">Future Features</h1>
      <div class="content">
        <div class="item" v-for="item in list" :key="item.id">
          <div class="item-title" v-html="item.title"></div>
          <div class="item-content">
            <div class="top"></div>
            <div class="bottom"><span>MORE</span></div>
            <div class="img">
              <svg-img name="ball"></svg-img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import useInitGsap from '@/hooks/useInitGsap'

const initGsap = (gsap, ScrollTrigger) => {
}
useInitGsap(initGsap)

const list = [
  { id: 1, title: 'Fund and NFT', desc: 'Raise Fund and NFT by publish your requests' },
  { id: 2, title: 'Education <br> Task', desc: 'xxxxxxxxxxxxxxxx' },
  { id: 3, title: 'Game Strategy Task', desc: 'xxxxxxxxxxxxxxxx' },
  { id: 4, title: 'Medal of <br> Achievement', desc: 'xxxxxxxxxxxxxxxx' },
  { id: 5, title: 'Recruit <br> Player', desc: 'xxxxxxxxxxxxxxxx' },
  { id: 6, title: 'E-sports eventsand <br> reward', desc: 'xxxxxxxxxxxxxxxx' },
]
</script>

<style lang="scss">
.home-section-5 {
  .container {
    padding: 100px;

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
        box-sizing: border-box;
        width: 345px;
        height: 384px;
        padding-top: 16px;
        margin-bottom: 55px;
        background: rgb(64 64 64 / 50%);
        border-radius: 20px;

        .item-title {
          box-sizing: border-box;
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
          opacity: .7;
        }

        .item-content {
          position: relative;
          box-sizing: border-box;
          width: calc(100% - 60px);
          height: 255px;
          padding: 0 30px;

          .top,
          .botttom {
            position: absolute;
            left: 0;
            width: 100%;
            height: 20px;

            &::before {
              position: absolute;
              top: 0;
              left: 0;
              width: 20px;
              height: 20px;
              content: "";
              border-color: #fff;
              border-style: solid;
            }

            &::after {
              position: absolute;
              top: 0;
              right: 0;
              width: 20px;
              height: 20px;
              content: "";
              border-color: #fff;
              border-style: solid;
            }
          }

          .top {
            top: 0;

            &::before{

            }

            &::after{

            }
          }

          .bottom {
            bottom: 0;
          }
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
