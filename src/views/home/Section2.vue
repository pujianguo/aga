<template>
  <section class="home-section-2" id="section2">
    <div class="container">
      <h1 class="title fromLeft ae-1 do">What Is The AGA</h1>
      <div class="content">
        <div class="left">
          <div class="card">
            <h2 class="fromLeft ae-2 do">guilds in Metaverse</h2>
            <p class="fromLeft ae-3 do">
              AGA is a decentralized autonomous organization (DAO)
              Formed by Game guilds in Metaverse.
            </p>
          </div>
          <div class="card">
            <h2 class="fromLeft ae-4 do">MORE OPPORTUNITIES</h2>
            <p class="fromLeft ae-5 do">
              It is dedicated to helping players,<br>
              Guilds and games get more opportunities to collaborate
              Empowered by Arche Network.
            </p>
          </div>
          <svg-icon class="down-icon fromLeft ae-6 do" name="down"></svg-icon>
        </div>
        <div class="right">
          <circle-image class="right-image fromLeft ae-6 do"></circle-image>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CircleImage from './Section2/Circle.vue'
import useInitGsap from '@/hooks/useInitGsap'

const initGsap = (gsap, ScrollTrigger) => {
  gsap.utils.toArray('.home-section-2').forEach(line => {
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
</script>

<style lang="scss">
.home-section-2 {
  .container {
    z-index: 2;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    min-height: auto !important;
    padding: 90px 20px 100px;

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
            font-size: 25px;
            font-style: normal;
            font-weight: 700;
            line-height: 40px;
            text-transform: uppercase;
          }

          p {
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
  .home-section-2 {
    .container {
      gap: 40px;
      padding: 90px 20px 100px;

      .title {
        font-size: 50px;
        line-height: 1;
      }

      .content {
        .left {
          .card {
            max-width: 460px;

            &:first-child {
              padding-bottom: 80px;

              &::before {
                top: 20px;
                left: -32px;
                width: 16px;
              }
            }

            h2 {
              margin-bottom: 1em;
              font-size: 22px;
              line-height: 1.8;
            }

            p {
              font-size: 18px;
              line-height: 1.8;
            }
          }

          .down-icon {
            width: 52px;
            height: 52px;
            margin-top: 80px;
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
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .home-section-2 {
    .container {
      gap: 40px;
      padding: 80px 20px;

      .title {
        font-size: 40px;
        line-height: 1;
      }

      .content {
        .left {
          .card {
            max-width: 380px;

            &:first-child {
              padding-bottom: 60px;

              &::before {
                top: 20px;
                left: -20px;
                width: 10px;
              }
            }

            h2 {
              margin-bottom: 1em;
              font-size: 20px;
              line-height: 1.8;
            }

            p {
              font-size: 16px;
              line-height: 1.8;
            }
          }

          .down-icon {
            width: 44px;
            height: 44px;
            margin-top: 60px;
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
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .home-section-2 {
    .container {
      gap: 30px;
      padding: 60px 20px;

      .title {
        font-size: 32px;
        line-height: 1;
      }

      .content {
        .left {
          .card {
            max-width: 280px;

            &:first-child {
              padding-bottom: 40px;

              &::before {
                top: 12px;
                left: -12px;
                width: 6px;
              }
            }

            h2 {
              margin-bottom: .6em;
              font-size: 16px;
              line-height: 1.8;
            }

            p {
              font-size: 14px;
              line-height: 1.8;
            }
          }

          .down-icon {
            width: 32px;
            height: 32px;
            margin-top: 60px;
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
}

@media screen and (max-width: 768px) {
  .home-section-2 {
    .container {
      position: relative;
      gap: 40px;
      padding: 6vw;

      .title {
        position: relative;
        z-index: 5;
        width: 44%;
        margin-bottom: 30vw;
        font-size: 32px;
        line-height: 1.6;
      }

      .content {
        flex-direction: column;

        .left {
          .card {
            max-width: auto;
            padding-left: 6vw;

            &:first-child {
              padding-bottom: 4em;

              &::before {
                top: 20px;
                left: 0;
                width: 12px;
              }
            }

            h2 {
              margin-bottom: .5em;
              font-size: 20px;
              line-height: 2;
            }

            p {
              font-size: 16px;
              line-height: 1.6;
            }
          }

          .down-icon {
            width: 32px;
            height: 32px;
            margin-top: 2em;
            margin-left: 6vw;
          }
        }

        .right {
          position: absolute;
          top: 6vw;
          right: -6vw;
          z-index: 1;
          flex: 1;
          transform: scale(1.25) rotate(-70deg);
        }
      }
    }
  }
}
</style>
