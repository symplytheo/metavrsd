<template>
  <div class="relative overflow-hidden">
    <app-header />
    <app-content />
    <app-footer />

    <div class="galaxy"></div>
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue'
import AppContent from '@/components/Content.vue'
import AppFooter from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppContent,
    AppFooter,
  },
  data: () => ({
    email: '',
    socials: [
      { title: 'telegram', href: 'http://telegram.com' },
      { title: 'instagram', href: 'http://instagram.com' },
      { title: 'twitter', href: 'http://twitter.com' },
    ],
  }),
}
</script>
<style>
.galaxy {
  background-image: url(./assets/galaxy.svg);
  /* background-color: tomato; */
  background-size: cover;
  background-repeat: no-repeat;
  height: 200%;
  width: 200%;
  position: absolute;
  top: -10vh;
  left: -5vw;
  z-index: -3;
  display: none;
}
</style>
