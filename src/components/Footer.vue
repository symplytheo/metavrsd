<template>
  <footer class="relative mt-20 md:-mt-20">
    <img
      src="../assets/okay-large.png"
      alt=""
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
      src="../assets/okay.png"
      alt=""
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
          <p>
            <a
              href="mailto:hello@metavrsd.io"
              class="font-bold text-2xl md:text-lg"
            >
              hello@metavrsd.io
            </a>
          </p>
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
export default {
  name: 'Footer',
  methods: {
    joinWaitlist() {
      alert(this.email + ' has been added to waitlist')
    },
  },
}
</script>
