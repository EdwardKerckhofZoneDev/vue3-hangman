<template>
  <div v-if="resultMsg !== ''" class="result-container">
    <div class="result">
      <h2>{{ resultMsg }}</h2>
      <h3 v-if="status === 'lost'">the correct word was: {{ correctWord }}</h3>
      <button @click="restart">Restart</button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'Result',

  props: {
    status: {
      type: String,
      default: '',
    },
    correctWord: {
      type: String,
      default: '',
    },
  },

  setup(props, { emit }) {
    const resultMsg = computed(() => {
      if (props.status === 'won')
        return 'Congratulations! You have guessed the word!'
      if (props.status === 'lost')
        return 'You were not able to guess the word...'
      return ''
    })

    const restart = () => emit('restart')

    return { resultMsg, restart }
  },
})
</script>
