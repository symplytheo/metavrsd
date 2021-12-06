<template>
  <header class="flex items-center py-4 px-8 relative">
    <a href="/" class="mx-auto">
      <app-logo />
    </a>
  </header>

  <main>
    <section
      class="
        container
        max-w-md
        mx-auto
        text-center
        relative
        md:h-screen md:mx-0 md:max-w-full md:text-left
      "
    >
      <div class="container max-w-screen-md pt-8 mx-auto relative">
        <h2 class="text-5xl sm:text-6xl md:text-center text-primary">
          welcome,
        </h2>
        <h3 class="text-5xl sm:text-6xl mb-1 tracking-wider">
          let’s get you meta-versed
        </h3>
        <div class="mt-1 mb-4 md:text-lg hidden md:block font-light">
          the world is changing really fast and it’s easy to feel like <br />
          you can’t keep up with everything. <br />
          <span class="font-medium">well, here we are...</span>
        </div>
        <div class="flex flex-col p-3 md:p-0 md:flex-row gap-3">
          <a href="#community">
            <base-button
              size="large"
              variant="outlined"
              class="w-4/5 md:w-auto border-primary"
            >
              Join our community
            </base-button>
          </a>
          <a href="#partner">
            <base-button
              size="large"
              variant="outlined"
              color="white"
              class="w-4/5 md:w-auto"
            >
              Partner with us
            </base-button>
          </a>
        </div>

        <div
          class="absolute -top-28 md:left-0 w-full hidden md:block"
          style="z-index: -1"
        >
          <img
            src="./assets/victory-large.png"
            class="w-80 object-contain ml-auto lg:-mr-16"
          />
        </div>
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

    <section id="mission" class="px-2 md:px-0 relative md:h-screen">
      <div
        class="
          container
          max-w-md
          mx-auto
          mb-5
          md:pl-3 md:my-auto md:ml-auto md:mr-0
          lg:max-w-screen-sm lg:pl-40 lg:mx-auto
        "
      >
        <h4 class="text-5xl font-bold md:hidden tracking-widest">
          our mission
        </h4>
        <p class="text-2xl md:pt-16">
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

      <div
        class="
          hidden
          font-medium
          absolute
          md:bottom-32
          lg:bottom-20
          left-0
          w-full
          md:block
        "
        style="font-size: 18.5vw"
      >
        our &nbsp;mission
      </div>

      <div class="absolute -top-60 left-0 hidden md:block" style="z-index: -1">
        <img src="./assets/rock-large.png" class="w-96 object-contain" />
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

  <footer class="relative mt-20 md:-mt-20">
    <img
      src="./assets/okay-large.png"
      class="hidden md:block mx-auto w-2/3 object-contain relative"
    />
    <img
      src="./assets/okay.png"
      class="md:hidden w-full sm:w-3/4 sm:mx-auto relative"
    />

    <div class="absolute bottom-0 left-0 w-full h-3/4 py-7 md:py-1 md:h-3/5">
      <div
        class="
          container
          max-w-md
          lg:max-w-screen-sm
          mx-auto
          h-full
          text-center
          flex flex-col
          justify-between
        "
      >
        <form
          @submit.prevent="joinWaitlist"
          class="hidden md:block lg:w-3/5 mx-auto font-light"
        >
          <h5 class="text-xl mb-3">
            be the <span class="font-bold">first</span> to know when we launch
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

        <div id="partner" class="md:pt-14 md:pb-6 lg:pt-28 pb-12">
          <h5 class="text-4xl sm:text-5xl md:text-2xl font-light">
            want to
            <span class="font-normal block md:inline">work or partner</span>
            with us?
          </h5>
          <p class="font-bold text-2xl md:text-lg">hello@metavrsd.io</p>
        </div>

        <div id="community" class="md:py-8 lg:py-16">
          <h5 class="text-3xl sm:text-4xl md:text-2xl font-light">
            join our community
          </h5>
          <p class="text-sm sm:text-base md:text-sm">
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

        <div class="uppercase mt-24 md:mt-0 font-light text-sm tracking-widest">
          San Francisco | Lagos | Waterloo
        </div>

        <div class="md:py-6 lg:py-10 text-black">
          <h1 class="font-medium text-sm tracking-widest">
            &copy; <a href="/" class="inline-flex">METAVRSD</a>
            {{ new Date().getFullYear() }}.
          </h1>
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

<style></style>
