<template>
  <header
    id="header"
    class="relative h-screen flex flex-col justify-center overflow-hidden"
  >
    <nav class="flex items-center absolute z-10 top-0 w-full py-4">
      <a href="/" class="mx-auto bg-black" aria-label="Logo">
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
        mt-10
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
          the world is changing really fast and it's easy to feel like <br />
          you can't keep up with everything. <br />
          <span class="font-medium">well, here we are...</span>
        </div>
        <div class="flex flex-col py-3 md:ml-5vw md:p-0 md:flex-row gap-3">
          <a href="#community">
            <base-button
              size="large"
              variant="outlined"
              class="w-4/5 md:w-auto border-primary bg-black bg-opacity-50"
            >
              Join our community
            </base-button>
          </a>
          <a href="#partner">
            <base-button
              size="large"
              variant="outlined"
              color="white"
              class="w-4/5 md:w-auto bg-black bg-opacity-50"
            >
              Partner with us
            </base-button>
          </a>
        </div>
      </div>
    </section>

    <div
      class="
        absolute
        left-0
        hidden
        md:block
        h-full
        w-full
        bg-black bg-opacity-50
      "
      style="z-index: -1; bottom: -10vh"
    >
      <img
        src="../assets/victory-large.png"
        alt=""
        class="filter saturate-200 ml-auto h-full w-30vw mr-5vw"
      />
    </div>

    <div id="galaxy-1"></div>
  </header>
</template>

<script>
import AppLogo from '@/components/Logo.vue'
import BaseButton from '@/components/Button.vue'

export default {
  name: 'Header',
  components: { AppLogo, BaseButton },
}
</script>

<style scoped>
#galaxy-1 {
  background-image: url(../assets/galaxy.svg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 200vh;
  width: 210vw;
  position: absolute;
  z-index: -2;
  top: -45vh;
  left: -35vw;
  display: none;
}
</style>
