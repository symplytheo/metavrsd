<template>
  <main class="relative md:pb-60">
    <section class="container -mt-44 max-w-md mx-auto md:hidden relative">
      <img
        src="../assets/victory.png"
        alt=""
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
      <img
        src="../assets/rock.png"
        alt=""
        class="mx-auto filter saturate-200"
      />
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
          src="../assets/rock-large.png"
          alt=""
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
</template>

<script>
export default {
  name: 'AppContent',
  methods: {
    joinWaitlist() {
      alert(this.email + ' has been added to waitlist')
    },
  },
}
</script>
