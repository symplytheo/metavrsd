<template>
  <app-header />
  <app-content />
  <app-footer />
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
<style></style>
