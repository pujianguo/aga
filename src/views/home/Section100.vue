<template>
  <section class="home-section-2">
    <div class="container">
    </div>
  </section>
</template>

<script setup>
import useInitGsap from '@/hooks/useInitGsap'

const initGsap = (gsap, ScrollTrigger) => {
}
useInitGsap(initGsap)

</script>

<style lang="scss">
.home-section-2 {
  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 100px;
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
