<template>
  <div class="wrong-letters-container">
    <div class="wrong-letters">
      <p v-show="wrongLetters.length > 0">Wrong Letters</p>
      <span v-for="(letter, i) in wrongLetters" :key="i">
        {{ letter }} {{ i === wrongLetters.length - 1 ? '' : ', ' }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WrongGuessedLetters',

  props: {
    wrongLetters: {
      type: Array,
      default: () => [],
    },
  },
})
</script>
