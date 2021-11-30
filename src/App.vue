<template>
  <header class="flex items-center py-4 px-8 relative">
    <a href="/" class="mx-auto">
      <app-logo />
    </a>
  </header>

  <main class="pb-20 pt-10">
    <section
      class="
        container
        max-w-md
        mx-auto
        text-center
        relative
        md:mx-0 md:max-w-full md:text-left
      "
    >
      <div class="container max-w-screen-lg md:px-10 mx-auto">
        <h4 class="text-5xl sm:text-6xl md:text-6xl md:text-center font-bold">
          <span class="text-primary inline-block">Welcome</span>,<br />
          let’s get you meta-versed
        </h4>
        <p class="my-3 text-xl md:text-2xl font-medium hidden md:block">
          the world is changing really fast and it’s easy to feel like you can’t
          keep up with everything. well, here we are!
        </p>
        <div class="flex flex-col md:flex-row gap-3 p-2">
          <a href="#community">
            <base-button
              size="large"
              variant="outlined"
              class="w-full md:w-auto border-primary"
            >
              Join our community
            </base-button>
          </a>
          <a href="#partner">
            <base-button
              size="large"
              variant="outlined"
              color="white"
              class="w-full md:w-auto"
            >
              Partner with us
            </base-button>
          </a>
        </div>
      </div>

      <div
        class="absolute -bottom-40 md:right-1 lg:right-60 hidden md:block"
        style="z-index: -1"
      >
        <img src="./assets/victory-large.png" class="w-60 object-contain" />
      </div>
    </section>

    <section class="container max-w-md mx-auto md:hidden relative">
      <img src="./assets/victory.png" class="relative mx-auto" />

      <div class="absolute bottom-24 w-full flex justify-center">
        <p class="w-72 text-center text-2xl">
          the world is changing really fast and it’s easy to feel like you can’t
          keep up with everything. well, here we are!
        </p>
      </div>
    </section>

    <div class="-mt-72 md:hidden">
      <img src="./assets/rock.png" class="mx-auto" />
    </div>

    <section id="mission" class="md:mx-0 px-2 md:px-0 md:pt-52 relative">
      <div
        class="
          container
          max-w-md
          mx-auto
          mb-5
          md:max-w-screen-sm md:pl-40
          lg:pl-1
        "
      >
        <h4 class="text-5xl font-bold md:hidden">Our Mission</h4>
        <p class="text-2xl sm:text-2xl md:text-3xl md:pt-16">
          to educate the world about the <br />
          <span class="text-primary inline-block">
            metaverse, <br />
            blockchain and <br />
            other disruptive concepts <br />
          </span>
          with simple, fun and personalised games.
        </p>
      </div>
      <div
        class="hidden font-medium md:block md:text-9xl md:pl-24 lg:text-11xl"
      >
        Our Mission
      </div>

      <div class="absolute top-16 left-0 hidden md:block" style="z-index: -1">
        <img src="./assets/rock-large.png" class="w-72 object-contain" />
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

  <footer
    id="footer"
    class="flex flex-col justify-end items-end pt-16 md:pt-60"
  >
    <div class="container max-w-screen-sm mx-auto">
      <form
        @submit.prevent="joinWaitlist"
        class="hidden md:block max-w-md mx-auto mt-10 mt:0 text-center"
      >
        <h5 class="text-xl font-bold mb-3">
          be the first to know when we launch
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

      <div
        id="partner"
        class="pt-32 pb-8 mt-8 px-5 text-center md:pt-10 my-10 md:my-0"
      >
        <h5 class="text-4xl md:text-xl">
          want to work or <br class="md:hidden" />
          partner with us?
        </h5>
        <p class="font-bold">hello@metavrsd.io</p>
      </div>

      <div id="community" class="pt-8 pb-32 md:pb-12 text-center">
        <h5 class="text-2xl">join our community</h5>
        <p class="font-bold text-sm">
          <span v-for="(item, i) in socials" :key="i">
            <a
              :href="item.href"
              class="m-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ item.title }}
            </a>
            <span v-if="i < socials.length - 1">-</span>
          </span>
        </p>
      </div>

      <div class="pb-4 hidden md:block text-center">
        San Francisco | Lagos | Waterloo
      </div>

      <div class="text-center p-2 md:pb-3">
        <div class="mb-2 md:hidden">San Francisco | Lagos | Waterloo</div>
        <div class="text-black font-bold">
          &copy; <a href="/" class="inline-flex">METAVRSD</a>
          {{ new Date().getFullYear() }}.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import AppLogo from '@/components/Logo.vue'
import BaseButton from '@/components/Button.vue'

export default {
  name: 'App',
  components: {
    AppLogo,
    BaseButton,
  },
  data: () => ({
    email: '',
    socials: [
      { title: 'telegram', href: 'http://telegram.com' },
      { title: 'instagram', href: 'http://instagram.com' },
      { title: 'twitter', href: 'http://twitter.com' },
    ],
  }),
  methods: {
    joinWaitlist() {
      alert(this.email + ' has been added to waitlist')
    },
  },
}
</script>

<style>
#footer {
  background-image: url('./assets/okay.png');
  background-size: 100% 732px;
  background-repeat: no-repeat;
  background-position: center bottom -100px;
}

@media (min-width: 768px) {
  #footer {
    background-image: url('./assets/okay-large.png');
    background-size: 600px 900px;
    background-position: center bottom -250px;
  }
}
</style>
