<template>
  <header class="flex items-center py-2 px-4">
    <div class="mx-auto animate">
      <app-logo />
    </div>
  </header>

  <main class="py-20">
    <section
      id="welcome"
      class="
        container
        max-w-screen-sm
        mx-auto
        px-4
        mb-10
        md:px-0
        text-center
        md:text-left
        relative
      "
    >
      <h4 class="text-4xl font-bold">
        <span class="text-primary">Welcome</span>, <br />
        Let’s get you meta-versed
      </h4>
      <p class="mt-3 text-xl font-semibold">
        the world is changing really fast and it’s easy to feel like you can’t
        keep up with everything. well, here we are!
      </p>
      <div class="mt-2 flex flex-col md:flex-row gap-2">
        <a href="#community">
          <base-button size="large" variant="outlined" class="w-full md:w-auto">
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
    </section>

    <section id="mission" class="px-4 md:px-0 relative">
      <div class="pb-20">
        <div class="pt-44 px-5 container max-w-md mx-auto">
          <p class="text-xl font-semibold">
            to educate the world about the <br />
            <span class="text-primary">
              metaverse, <br />
              blockchain and <br />
              other disruptive concepts <br />
            </span>
            with simple, fun and personalised games.
          </p>
        </div>
        <div
          class="py-4 text-5xl sm:text-8xl md:text-9xl text-center font-bold"
        >
          Our Mission
        </div>
      </div>

      <div class="absolute top-1 left-0 w-full md:hidden" style="z-index: -1">
        <img src="./assets/victory.png" class="h-auto w-auto mx-auto" />
      </div>
    </section>

    <section
      id="waitlist"
      class="pt-20 pb-28 text-center container max-w-md mx-auto px-4 md:px-0"
    >
      <form @submit.prevent="joinWaitlist">
        <h5 class="text-4xl font-bold md:text-xl md:font-normal mb-3">
          be the first to know
          <span class="text-primary md:text-white">when we launch</span>
        </h5>
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="
            px-3
            py-3
            placeholder-gray-400
            bg-transparent
            text-sm
            border border-white
            outline-none
            animate-pulse
            focus:outline-none focus:ring-0 focus:animate-none
            hover:animate-none
            w-full
          "
          required
        />
      </form>
    </section>

    <div
      id="partner"
      class="pt-36 pb-6 px-10 text-center container max-w-sm mx-auto"
    >
      <h5 class="text-4xl md:text-lg">want to work or partner with us?</h5>
      <p class="font-bold">hello@metavrsd.io</p>
    </div>

    <div
      id="community"
      class="pt-14 pb-24 text-center container max-w-sm mx-auto"
    >
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
  </main>

  <footer class="text-center p-4 relative">
    <div class="mb-2">San Francisco | Lagos | Waterloo</div>
    <div class="text-black">
      &copy; Metavrsd {{ new Date().getFullYear() }}.
    </div>

    <div class="absolute bottom-0 left-0 md:hidden w-full" style="z-index: -1">
      <img src="./assets/okay.png" class="h-auto mx-auto w-auto" />
    </div>
  </footer>
</template>

<script>
import AppLogo from '@/components/Logo.vue'
import BaseButton from '@/components/base/Button.vue'

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

<style></style>
