<script setup>
import { computed, ref } from 'vue'
import useInitGsap from '@/hooks/useInitGsap'

const initGsap = (gsap, ScrollTrigger) => {
}
useInitGsap(initGsap)

const currentMonthIndex = ref(0)
// TODO: info数据
const list = [
  { id: 1, month: 'January', monthShort: 'Jan', title: 'AGA Member Club Developer Forum', info: 'Together in the collective building of future Metaverse.' },
  { id: 2, month: 'February', monthShort: 'Feb', title: 'AGA Member Club Developer Forum', info: 'Together in the collective building of future Metaverse.' },
  { id: 3, month: 'March', monthShort: 'Mar', title: 'AGA Member Club Developer Forum', info: 'Together in the collective building of future Metaverse.' },
  { id: 4, month: 'April', monthShort: 'Apr', title: 'AGA Member Club Developer Forum', info: 'Together in the collective building of future Metaverse.' },
  { id: 5, month: 'May', monthShort: 'May', title: 'AGA Member Club Developer Forum', info: 'Together in the collective building of future Metaverse.' },
  { id: 6, month: 'Jun', monthShort: 'Jun', title: 'AGA Member Club Developer Forum', info: 'Together in the collective building of future Metaverse.' },
  { id: 7, month: 'More', monthShort: 'More', title: 'AGA Member Club Developer Forum', info: 'Together in the collective building of future Metaverse.' },
]
const monthInfo = computed(() => {
  return list[currentMonthIndex.value]
})
const handleMonthChange = (index) => {
  currentMonthIndex.value = index
}
const handleRight = () => {
  if (currentMonthIndex.value < list.length - 1) {
    currentMonthIndex.value++
  } else {
    currentMonthIndex.value = 0
  }
}
const progressleft = computed(() => {
  return currentMonthIndex.value * 14.285 + '%'
})
</script>

<template>
  <section class="home-section-6">
    <div class="container">
      <h1 class="section-title">
        Join The AGA’s <br>
        Monthly Meetings
      </h1>
      <div class="big-img-box">
        <div class="header">
          <svg-img class="logo" name="logo-text"></svg-img>
          <svg-icon class="icon" name="right" @click="handleRight"></svg-icon>
        </div>
        <div class="middle">
          <div class="text">{{monthInfo.title}}</div>
        </div>
        <div class="footer">
          <div class="month">{{monthInfo.month}}.</div>
          <div class="progress"></div>
        </div>
      </div>
      <div class="content-title">
        <span>RELEASE DATE:</span>
        <span>MEETINGS:</span>
        <span>Sign up</span>
      </div>
      <div class="content">
        <div class="item">
          <div class="info">
            {{monthInfo.info}}
          </div>
          <h1 class="info-title">INFO</h1>
        </div>

        <div class="item" v-for="(item, index) in list" :class="{active: currentMonthIndex === index}" :key="item.id"
          @click="handleMonthChange(index)"
        ><span>{{item.monthShort}}.</span></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.home-section-6 {
  .container {
    padding: 100px 20px;

    .section-title {
    }

    .big-img-box {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 384px;
      padding: 40px 50px;
      margin-top: 179px;
      background: url("/images/home/section6_box_bg.png") no-repeat center / cover;
      border-radius: 20px;

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo {
          width: 91px;
          height: 34px;
        }

        .icon {
          width: 64px;
          height: 64px;
          cursor: pointer;
        }
      }

      .middle {
        .text {
          position: relative;
          box-sizing: border-box;
          display: inline-block;
          max-width: 320px;
          padding: 16px;
          font-family: Mackay Test;
          font-size: 30px;
          font-style: normal;
          font-weight: 600;
          line-height: 33px;
          color: #fff;
          text-align: left;
          letter-spacing: .05em;

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

      .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .month {
          font-family: Futura;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 32px;
          text-align: left;
          letter-spacing: 0;
        }

        .progress {
          position: relative;
          width: 624px;
          height: 3px;
          overflow: hidden;
          background: rgb(255 255 255 / 50%);
          border-radius: 2px;

          &::before {
            position: absolute;
            top: 0;
            left: v-bind(progressleft);
            width: 14.285%;
            height: 3px;
            content: "";
            background: #fff;
            border-radius: 2px;
            transition: left .5s;
          }
        }
      }
    }

    .content-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 178px;
      margin-bottom: 30px;

      span {
        font-family: Futura;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 32px;
        color: #fff;
        text-align: left;
        text-transform: uppercase;
        letter-spacing: 0;

        &:nth-child(1) {
          flex: 3;
        }

        &:nth-child(2) {
          flex: 5;
        }

        &:nth-child(3) {
          flex: 2;
          text-align: right;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }

    .content {
      position: relative;
      display: flex;
      border-bottom: 1px solid #fff;

      &::before {
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 0;
        height: 32px;
        content: "";
        background: #fff;
        border-left: 1px solid #fff;
      }

      &::after {
        position: absolute;
        right: 0;
        bottom: -1px;
        width: 0;
        height: 32px;
        content: "";
        background: #fff;
        border-left: 1px solid #fff;
      }

      .item {
        position: relative;
        flex: 1;
        height: 220px;

        .info {
          max-width: 280px;
          font-family: Futura;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 32px;
          color: rgb(255 255 255 / 70%);
          text-align: left;
          letter-spacing: 0;
        }

        .info-title {
          margin-top: 43px;
          font-family: Futura;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 40px;
          color: #fff;
          text-decoration-line: underline;
          text-transform: uppercase;
          cursor: pointer;
        }

        span {
          font-family: Futura;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 32px;
          color: rgb(255 255 255 / 30%);
          text-align: left;
          letter-spacing: 0;
          cursor: pointer;
        }

        &.active {
          span {
            position: relative;
            padding: 10px 16px;
            color: rgb(255 255 255 / 100%);

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

        &::before {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 160px;
          content: "";
          background: #fff;
          border-left: 1px solid #fff;
        }

        &:nth-child(1) {
          flex: 3;

          &::before {
            display: none;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1100px) and (max-width: 1400px) {
  .home-section-6 .container {
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .home-section-6 .container {
  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .home-section-6 .container {
  }
}

@media screen and (max-width: 768px) {
  .home-section-6 {
    .container {
    }
  }
}
</style>
