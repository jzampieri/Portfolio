<template>
  <div class="home-page">
    <div id="finisher-header" class="header-animado" />
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Main from '@/components/Home/Main/Main.vue'

export default {
  components: {
    Header,
    Main
  },
  mounted() {
  if (window.FinisherHeader) {
    new window.FinisherHeader({
      container: 'finisher-header',
      backgroundColor: '#0f0f0f',
      blobColor: '#ffffff',
      blobOpacity: 0.15,
      speed: 1,
      blobCount: 8,
      width: window.innerWidth,
      height: 300
    })
  } else {
    console.error('FinisherHeader não carregado!')
  }
  }
}
</script>

<style lang="scss">
.header-animado {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  z-index: 0;
  pointer-events: none;
}

.home-page {
  position: relative;
  z-index: 1;
}
</style>
