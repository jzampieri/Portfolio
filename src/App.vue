<template>
  <div id="app">
    <router-view />
    <div ref="cursor" class="custom-cursor" />
  </div>
  <Home/>
</template>

<script>
import { gsap } from 'gsap'
import Home from './views/home/Home.vue'

export default {
  components: {
   Home 
  },
  data() {
    return {
      idleTimeout: null
    }
  },
  mounted() {
    const cursor = this.$refs.cursor

    if (!cursor) return

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      autoAlpha: 0
    })

    document.addEventListener('mouseenter', () => {
      gsap.to(cursor, { autoAlpha: 1, duration: 0.2 })
    })

    document.addEventListener('mouseleave', () => {
      gsap.to(cursor, { autoAlpha: 0, duration: 0.2 })
    })

    document.addEventListener('mousemove', e => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out'
      })

      gsap.to(cursor, {
        scale: 1.8,
        duration: 0.3,
        ease: 'power2.out'
      })

      clearTimeout(this.idleTimeout)

      this.idleTimeout = setTimeout(() => {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.7,
          ease: 'power2.out'
        })
      }, 150)
    })
  }
}
</script>

<style lang="scss">
@use'@/assets/scss/style.scss';

.custom-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1000;
  mix-blend-mode: difference;
  background-color: transparent;
}

body {
  cursor: none !important;
}
</style>
