<template>
  <header class="flex items-center py-4 px-8 relative">
    <a href="/" class="mx-auto">
      <app-logo />
    </a>
  </header>

  <main class="pb-20 pt-10">
    <section class="px-4 mb-20 md:px-0 text-center md:text-left relative">
      <div class="container max-w-screen-md mx-auto">
        <h4 class="text-4xl md:text-5xl font-bold">
          <span class="text-primary animate-bounce inline-block">Welcome</span
          >,<br />
          Let’s get you meta-versed
        </h4>
        <p class="mb-5 mt-3 text-xl md:text-2xl font-semibold">
          the world is changing really fast and it’s easy to feel like you can’t
          keep up with everything. well, here we are!
        </p>
        <div class="flex flex-col md:flex-row gap-3">
          <a href="#community">
            <base-button
              size="large"
              variant="outlined"
              class="w-full md:w-auto"
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
        class="absolute -bottom-20 right-20 hidden md:block"
        style="z-index: -1"
      >
        <img src="./assets/victory-large.png" class="w-56 object-contain" />
      </div>
    </section>

    <section
      id="mission"
      class="pt-48 pb-10 my-10 px-5 md:px-0 md:pt-32 relative"
    >
      <div class="container max-w-screen-sm mx-auto mb-5">
        <p class="text-xl sm:text-2xl md:text-3xl font-semibold">
          to educate the world about the <br />
          <span class="text-primary inline-block animate-pulse">
            metaverse, <br />
            blockchain and <br />
            other disruptive concepts <br />
          </span>
          with simple, fun and personalised games.
        </p>
      </div>
      <div
        class="
          text-5xl
          sm:text-6xl
          md:text-8xl
          lg:text-9xl
          font-bold
          md:pl-20
          lg:pl-36
        "
      >
        Our Mission
      </div>

      <div class="absolute top-0 left-0 hidden md:block" style="z-index: -1">
        <img src="./assets/rock-large.png" class="w-64 object-contain" />
      </div>
    </section>

    <section
      id="waitlist"
      class="py-10 text-center container max-w-md mx-auto px-1 md:hidden"
    >
      <form @submit.prevent="joinWaitlist">
        <h5 class="text-3xl font-bold md:text-xl mb-3">
          be the first to know
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
        </div>
      </form>
    </section>
  </main>

  <footer id="footer" class="flex flex-col justify-end gap-y-6">
    <div class="container max-w-screen-sm mx-auto md:pt-10">
      <form
        @submit.prevent="joinWaitlist"
        class="hidden md:block max-w-md mx-auto mt-10 text-center"
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
        </div>
      </form>

      <div id="partner" class="pt-36 pb-8 mt-8 px-5 text-center md:pt-8 my-10">
        <h5 class="text-4xl md:text-lg">want to work or partner with us?</h5>
        <p class="font-bold">hello@metavrsd.io</p>
      </div>

      <div id="community" class="pt-8 pb-32 text-center md:mb-40">
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

      <div class="text-center p-2 md:pb-5">
        <div class="mb-2">San Francisco | Lagos | Waterloo</div>
        <div class="text-black font-bold">
          &copy; <a href="/" class="animate-pulse inline-flex">Metavrsd</a>
          {{ new Date().getFullYear() }}.
        </div>
      </div>
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

<style>
#mission {
  background-image: url('./assets/victory.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
}

#footer {
  background-image: url('./assets/okay.png');
  background-size: 100% 732px;
  background-repeat: no-repeat;
}

@media (min-width: 768px) {
  #footer {
    background-image: url('./assets/okay-large.png');
    background-size: 600px 100%;
    background-position: center;
    padding-top: 200px;
  }

  #mission {
    background: none;
  }
}
</style>
