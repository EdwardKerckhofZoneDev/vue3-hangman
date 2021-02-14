<template>
  <svg height="250" width="200" class="hangman-container">
    <!-- Rod -->
    <line x1="60" y1="20" x2="140" y2="20" />
    <line x1="140" y1="20" x2="140" y2="50" />
    <line x1="60" y1="20" x2="60" y2="230" />
    <line x1="20" y1="230" x2="100" y2="230" />

    <!-- Head -->
    <circle v-if="lessOrEq(1)" cx="140" cy="70" r="20" />
    <!-- Body -->
    <line v-if="lessOrEq(2)" x1="140" y1="90" x2="140" y2="150" />
    <!-- Arms -->
    <line v-if="lessOrEq(3)" x1="140" y1="120" x2="120" y2="100" />
    <line v-if="lessOrEq(4)" x1="140" y1="120" x2="160" y2="100" />
    <!-- Legs -->
    <line v-if="lessOrEq(5)" x1="140" y1="150" x2="120" y2="180" />
    <line v-if="lessOrEq(6)" x1="140" y1="150" x2="160" y2="180" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HangMan',

  props: {
    amtWrong: {
      type: Number,
      default: 0,
    },
  },

  setup(props) {
    // Returns true if the paramater given is smaller than the equal amount wrong
    const lessOrEq = (num: number) => props.amtWrong >= num

    return { lessOrEq }
  },
})
</script>
