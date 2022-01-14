<script setup>
import useInitGsap from '@/hooks/useInitGsap'

const initGsap = (gsap, ScrollTrigger) => {
  gsap.utils.toArray('.home-section-7').forEach(line => {
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

<template>
  <section class="home-section-7" id="section7">
    <div class="container">
      <div class="card fromLeft ae-1 do">
        <div class="card-title">
          <svg-img class="logo-icon" name="logo-text"></svg-img>
        </div>
        <div class="card-content">
          <div class="info">
            AGA is a decentralized autonomous organization (DAO) <br>
            Formed by Game guilds in Metaverse.
          </div>
        </div>
      </div>
      <!-- <div class="card fromLeft ae-2 do">
        <div class="card-title">
          <span>About us</span>
        </div>
        <div class="card-content">
          <div class="list">
            <div class="list-item">Zeux</div>
            <div class="list-item">Portfolio</div>
            <div class="list-item">Careers</div>
            <div class="list-item">Contact us</div>
          </div>
        </div>
      </div> -->
      <div class="card fromLeft ae-2 do">
        <div class="card-title">
          <span>Join us</span>
        </div>
        <div class="card-content">
          <a class="join fromRight ae-7 do" href="https://archenetwork.typeform.com/AGAAPPLY" target="_blank">Join AGA</a>
        </div>
      </div>
      <div class="card fromLeft ae-3 do">
        <div class="card-title">
          <span>CONTACT AGA</span>
        </div>
        <div class="card-content">
          <div class="contact-list">
            <!-- <a href="">
              <svg-img class="icon" name="facebook"></svg-img>
            </a> -->
            <a href="https://twitter.com/AGAMetaverse" target="_blank">
              <svg-img class="icon" name="twitter"></svg-img>
            </a>
            <a href="https://t.me/ArcheNetwork" target="_blank">
              <svg-img class="icon" name="telegram"></svg-img>
            </a>
            <a href="https://discord.com/invite/ah8h2sqF2B" target="_blank">
              <svg-img class="icon" name="discord"></svg-img>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="page-footer"></div>
</template>

<style lang="scss">
.home-section-7 {
  margin-top: 80px;

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: unset !important;
    padding: 0 20px;

    .card {
      margin: 0 0 50px;

      &:nth-child(3) {
        margin-bottom: 144px;
      }

      .card-title {
        .logo-icon {
          width: 122px;
          height: 40px;
        }

        span {
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 32px;
          color: #fff;
          text-align: left;
          text-transform: uppercase;
        }
      }

      .card-content {
        margin-top: 35px;

        .join {
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          width: fit-content;
          height: fit-content;
          padding: 10px 30px;
          margin-top: 30px;
          font-family: Mackay Test;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 26px;
          color: #fff;
          text-align: right;
          letter-spacing: .05em;
          white-space: nowrap;
          border: 1px solid #fff;
          border-radius: 9px;
          transition: all .25s;

          &:hover {
            color: #000;
            background: #fff;
          }
        }

        .info {
          max-width: 380px;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 32px;
          color: rgb(255 255 255 / 70%);
        }

        .list {
          .list-item {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            color: rgb(255 255 255 / 70%);
            cursor: pointer;
          }
        }

        .contact-list {
          display: flex;
          align-items: center;
          justify-content: space-between;

          a {
            margin-right: 40px;

            .icon {
              width: 32px;
              height: 32px;
              color: #fff;
            }

            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
}

.page-footer {
  width: 100%;
  height: 10px;
  background: rgb(121 66 247 / 100%);
}

@media screen and (min-width: 1100px) and (max-width: 1400px) {
  .home-section-7 .container {
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .home-section-7 .container {
  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .home-section-7 .container {
  }
}

@media screen and (max-width: 768px) {
  .home-section-7 {
    margin-top: 80px;

    .container {
      flex-direction: column;
      align-content: center;
      align-items: center;

      .card {
        margin: 0 0 40px;

        &:nth-child(3) {
          margin-bottom: 80px;
        }

        .card-title {
          text-align: center;
        }

        .card-content {
          margin-top: 20px;

          .join {
            margin-top: 10px;
          }

          .info {
            max-width: 100%;
            padding: 0 20px;
            font-size: 14px;
            line-height: 1.4;
            text-align: center;
          }

          .contact-list {
            a {
              .icon {
                width: 28px;
                height: 28px;
              }
            }
          }
        }
      }
    }
  }

  .page-footer {
    width: 100%;
    height: 5px;
    background: rgb(121 66 247 / 100%);
  }
}
</style>
