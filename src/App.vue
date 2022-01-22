<template>
  <app-header />

  <main class="relative md:pb-60">
    <section class="container -mt-44 max-w-md mx-auto md:hidden relative">
      <img
        src="./assets/victory.png"
        class="relative filter saturate-200 mx-auto"
      />

      <div class="absolute bottom-24 w-full flex justify-center">
        <p class="w-72 text-center text-2xl">
          the world is changing really fast and it’s easy to feel like you can’t
          keep up with everything. well, here we are!
        </p>
      </div>
    </section>

    <div class="-mt-72 md:hidden">
      <img src="./assets/rock.png" class="mx-auto filter saturate-200" />
    </div>

    <section id="mission" class="px-2 md:px-0 relative md:h-screen">
      <div class="md:pt-12vh lg:pt-8vh">
        <h4 class="text-5xl font-bold md:hidden tracking-widest">
          our mission
        </h4>
        <p class="text-2xl md:hidden font-light">
          to educate the world about the <br />
          <span class="text-primary inline-block">
            metaverse, <br />
            blockchain and <br />
            other disruptive concepts
          </span>
          <br />
          with simple, fun and personalised games.
        </p>
      </div>

      <div class="hidden absolute left-0 w-full md:block" style="bottom: 20vh">
        <p
          class="text-2xl leading-tight"
          style="font-size: 4.5vh; margin-left: 35vw"
        >
          to educate the world about the <br />
          <span class="text-primary inline-block">
            metaverse, <br />
            blockchain and <br />
            other disruptive concepts
          </span>
          <br />
          with simple, fun and personalised games.
        </p>
        <div class="text-18.5vw text-center leading-none">
          our &nbsp;mission
        </div>
      </div>

      <div
        class="absolute left-0 h-screen hidden md:block"
        style="z-index: -1; top: -15vh"
      >
        <img
          src="./assets/rock-large.png"
          class="h-full filter saturate-200 w-30vw"
        />
      </div>
    </section>

    <section
      id="waitlist"
      class="text-center mt-20 container max-w-md mx-auto px-5 md:hidden"
    >
      <form @submit.prevent="joinWaitlist">
        <h5 class="text-4xl font-bold mb-3">
          be the <br />
          first to know <br />
          <span class="text-primary md:text-white">when we launch</span>
        </h5>
        <div class="px-3">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="
              px-3
              py-3
              placeholder-gray-200
              bg-transparent
              text-sm
              border border-white
              outline-none
              focus:outline-none focus:ring-0
              w-full
            "
            required
          />
        </div>
      </form>
    </section>
  </main>

  <app-footer />
</template>

<script>
import AppHeader from '@/components/Header.vue'
import AppFooter from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
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
  mounted() {
    function update(e) {
      var x = e.clientX || e.touches[0].clientX
      var y = e.clientY || e.touches[0].clientY

      document.documentElement.style.setProperty('--cursorX', x + 'px')
      document.documentElement.style.setProperty('--cursorY', y + 'px')
    }

    document.addEventListener('mousemove', update)
    document.addEventListener('touchmove', update)
  },
  methods: {
    joinWaitlist() {
      alert(this.email + ' has been added to waitlist')
    },
  },
}
</script>
<style>
/* Flashlight Overlay */
:root {
  cursor: none;
  --cursorX: 50vw;
  --cursorY: 50vh;
}
:root:before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 200;
  pointer-events: none;
  background: radial-gradient(
    circle 18vmax at var(--cursorX) var(--cursorY),
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.2) 80%,
    rgba(0, 0, 0, 0.75) 100%
  );
}
</style>
