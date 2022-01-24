<template>
  <div class="relative overflow-hidden">
    <app-header />
    <app-content />
    <app-footer />

    <div id="galaxy-2"></div>
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
#galaxy-2 {
  background-image: url(./assets/galaxy.svg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 200%;
  width: 200%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -3;
  display: none;
}
</style>
