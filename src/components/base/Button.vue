<template>
  <button :type="type" class="btn" :class="[buttonClass, colorClass]">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    size: { default: 'medium' }, // small, medium, large
    type: { default: 'button' },
    variant: { default: 'contained' }, // contained, outlined, text
    color: { default: 'primary' },
  },
  computed: {
    colorClass() {
      return `${
        this.variant === 'contained'
          ? `bg-${this.color} border-${this.color} text-black`
          : this.variant === 'outlined'
          ? `bg-transparent text-${this.color} border-${this.color}`
          : `text-${this.color} border-transparent bg-black bg-opacity-0 hover:bg-opacity-10`
      }`
    },
    buttonClass() {
      return {
        'text-xs': this.size === 'small',
        'text-sm': this.size !== 'small',
        'h-7': this.size === 'small',
        'h-9': this.size === 'medium',
        'h-11': this.size === 'large',
        'border-2': true,
        'hover:opacity-90': true,
      }
    },
  },
}
</script>

<style></style>
