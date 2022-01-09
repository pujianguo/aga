<template>
  <section class="home-section-2">
    <div class="container">
      <h1 class="title">What Is The AGA</h1>
      <div class="content">
        <div class="left">
          <div class="card">
            <h2>guilds in Metaverse</h2>
            <p>
              AGA is a decentralized autonomous organization (DAO)
              Formed by Game guilds in Metaverse.
            </p>
          </div>
          <div class="card">
            <h2>MORE OPPORTUNITIES</h2>
            <p>
              It is dedicated to helping players,<br>
              Guilds and games get more opportunities to collaborate
              Empowered by Arche Network.
            </p>
          </div>
          <svg-icon class="down-icon" name="down"></svg-icon>
        </div>
        <div class="right">
          <circle-image class="right-image"></circle-image>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CircleImage from './Section2/Circle.vue'
import useInitGsap from '@/hooks/useInitGsap'

const initGsap = (gsap, ScrollTrigger) => {
}
useInitGsap(initGsap)

</script>

<style lang="scss">
.home-section-2 {
  .container {
    z-index: 2;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 90px 20px 200px;

    .title {
      font-family: Mackay Test;
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: 66px;
      text-align: left;
      letter-spacing: .05em;
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .left {
        .card {
          position: relative;
          max-width: 530px;

          &:first-child {
            padding-bottom: 124px;

            &::before {
              position: absolute;
              top: 20px;
              left: -52px;
              width: 32px;
              height: 100%;
              content: "";
              border-color: #fff;
              border-style: solid;
              border-width: 1px 0 1px 1px;
            }
          }

          h2 {
            margin-bottom: 24px;
            font-family: Futura;
            font-size: 25px;
            font-style: normal;
            font-weight: 700;
            line-height: 40px;
            text-transform: uppercase;
          }

          p {
            font-family: Futura;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            opacity: .7;
          }
        }

        .down-icon {
          width: 64px;
          height: 64px;
          margin-top: 106px;
          cursor: pointer;
        }
      }

      .right {
        flex: 1;

        .right-image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

@media screen and (min-width: 1100px) and (max-width: 1400px) {
  .home-section-2 .container {
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .home-section-2 .container {
  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .home-section-2 .container {
  }
}

@media screen and (max-width: 768px) {
  .home-section-2 {
    .container {
    }
  }
}
</style>
