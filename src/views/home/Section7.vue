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
      <div class="card fromLeft ae-2 do">
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
      </div>
      <div class="card fromLeft ae-3 do">
        <div class="card-title">
          <span>CONTACT AGA</span>
        </div>
        <div class="card-content">
          <div class="contact-list">
            <a href="">
              <svg-img class="icon" name="facebook"></svg-img>
            </a>
            <a href="">
              <svg-img class="icon" name="telegram"></svg-img>
            </a>
            <a href="">
              <svg-img class="icon" name="twitter"></svg-img>
            </a>
            <a href="">
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
  margin-top: 300px;

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: unset !important;
    padding: 0 20px;

    .card {
      margin: 0 30px 50px;

      &:nth-child(3) {
        margin-bottom: 144px;
      }

      .card-title {
        .logo-icon {
          width: 122px;
          height: 40px;
        }

        span {
          font-family: Futura;
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

        .info {
          max-width: 380px;
          font-family: Futura;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 32px;
          color: rgb(255 255 255 / 70%);
        }

        .list {
          .list-item {
            font-family: Futura;
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
  height: 85px;
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
    .container {
    }
  }
}
</style>
