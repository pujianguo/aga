<script setup>
import { ref } from 'vue'
import useInitGsap from '@/hooks/useInitGsap'

const initGsap = (gsap, ScrollTrigger) => {
}
useInitGsap(initGsap)

const currentIndex = ref(1)
const changeItem = (index) => {
  currentIndex.value = index
}
</script>

<template>
  <section class="home-section-3">
    <div class="container">
      <h1 class="title">Why Join The AGA</h1>
      <div class="menu">
        <div class="line-box">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
        <div class="content-box">
          <div class="item" :class="{'active': currentIndex === 1}" @click="changeItem(1)">
            <div class="item-icon">
              <svg-img class="icon-ball" name="ball"></svg-img>
            </div>
            <div class="item-text">
              Latest and <br>Top Games Offering
            </div>
          </div>
          <div class="item" :class="{'active': currentIndex === 2}" @click="changeItem(2)">
            <div class="item-icon">
              <svg-img class="icon-ball" name="ball"></svg-img>
              <svg-img class="icon-ball" name="ball"></svg-img>
            </div>
            <div class="item-text">
              Launchpad<br>Whitelist
            </div>
          </div>
          <div class="item" :class="{'active': currentIndex === 3}" @click="changeItem(3)">
            <div class="item-icon">
              <svg-img class="icon-ball" name="ball"></svg-img>
              <svg-img class="icon-ball" name="ball"></svg-img>
              <svg-img class="icon-ball" name="ball"></svg-img>
            </div>
            <div class="item-text">
              Listed in <br>
              Arche Network
            </div>
          </div>
          <div class="item" :class="{'active': currentIndex === 4}" @click="changeItem(4)">
            <div class="item-icon">
              <svg-img class="icon-ball" name="ball"></svg-img>
              <svg-img class="icon-ball" name="ball"></svg-img>
              <svg-img class="icon-ball" name="ball"></svg-img>
              <svg-img class="icon-ball" name="ball"></svg-img>
            </div>
            <div class="item-text">
              More <br> Incentive
            </div>
          </div>
          <svg-icon class="last-icon" name="plus"></svg-icon>
        </div>
      </div>
      <div class="img-box">
        <div class="box-item" style="background: url(/images/home/section3_img_bg_1.png) no-repeat center / cover;">
          <div class="content">
            Arche have the latest game connection and information and share the information such as the game strategy to the guilds that allows them to join the game in early stage.
          </div>
        </div>
        <div class="box-item" style="background: url(/images/home/section3_img_bg_1.png) no-repeat center / cover;">
          <div class="content">
            Arche have the latest game connection and information and share the information such as the game strategy to the guilds that allows them to join the game in early stage.
          </div>
        </div>
        <div class="box-item" style="background: url(/images/home/section3_img_bg_1.png) no-repeat center / cover;">
          <div class="content">
            Arche have the latest game connection and information and share the information such as the game strategy to the guilds that allows them to join the game in early stage.
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="footer">
        <svg-icon class="icon" name="left"></svg-icon>
        <div class="btn">MORE OPPORTUNITIES</div>
        <svg-icon class="icon" name="right"></svg-icon>
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
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 90px 245px 200px;

    .title {
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

    .img-box {
      display: flex;
      align-items: center;
      width: 100%;
      height: 425px;
      margin-top: 194px;

      .box-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 798px;
        height: 425px;
        border: 1px solid #fff;
        border-radius: 425px;

        .content {
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 630px;
          height: 194px;
          padding: 26px 80px;
          font-family: Futura;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 32px;
          color: #fff;
          text-align: center;
          background: #404040;
          border-radius: 97px;
          mix-blend-mode: normal;
          opacity: .7;
        }
      }

      .pre-box{

      }

      .current-box {

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
        width: 350px;
        height: 60px;
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
