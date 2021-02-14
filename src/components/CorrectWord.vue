<template>
  <div class="correct-word">
    <span class="letter" v-for="(letter, i) in letters" :key="i">
      {{ correctLetters.includes(letter) ? letter : '' }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CorrectWord',

  props: {
    letters: {
      type: Array,
      required: true,
    },
    correctLetters: {
      type: Array,
      default: () => [],
    },
  },
})
</script>
