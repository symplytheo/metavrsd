<template>
  <header class="relative h-screen flex flex-col justify-center">
    <nav class="flex items-center absolute z-10 top-0 w-full py-4">
      <a href="/" class="mx-auto">
        <app-logo />
      </a>
    </nav>

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
      <div class="md:w-67.5vw mx-auto">
        <h2
          class="
            text-6xl text-primary
            md:text-center md:leading-none md:text-5.7vw
          "
        >
          welcome,
        </h2>
        <h3
          class="
            text-5xl
            sm:text-6xl
            tracking-wider
            md:tracking-normal md:text-5.7vw md:leading-none md:pl-5vw
          "
        >
          let’s get you meta-versed
        </h3>
        <div
          class="
            mt-1
            mb-4
            pl-5vw
            hidden
            text-1.7vw
            md:block
            font-light
            leading-tight
          "
        >
          the world is changing really fast and it’s easy to feel like <br />
          you can’t keep up with everything. <br />
          <span class="font-medium">well, here we are...</span>
        </div>
        <div class="flex flex-col py-3 md:ml-5vw md:p-0 md:flex-row gap-3">
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
      </div>
    </section>

    <div
      class="absolute left-0 hidden md:block h-full w-full"
      style="z-index: -1; bottom: -10vh"
    >
      <img
        src="./assets/victory-large.png"
        class="filter saturate-200 ml-auto h-full w-30vw mr-5vw"
      />
    </div>
  </header>

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
          class="text-2xl leading-tight font-light"
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

  <footer class="relative mt-20 md:-mt-20">
    <img
      src="./assets/okay-large.png"
      class="
        hidden
        md:block
        mx-auto
        w-2/3
        object-contain
        relative
        filter
        saturate-200
      "
    />
    <img
      src="./assets/okay.png"
      class="md:hidden w-full sm:w-3/4 sm:mx-auto relative filter saturate-200"
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
