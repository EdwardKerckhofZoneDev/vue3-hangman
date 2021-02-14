<template>
  <app-header />
  <div class="hangmang-container">
    <hang-man :amt-wrong="wrongLetters.length" />
    <wrong-guessed-letters :wrong-letters="wrongLetters" />
    <correct-word :letters="letters" :correct-letters="correctLetters" />
  </div>
  <result :status="status" :correct-word="word" @restart="restart" />
  <app-alert :show="showAlertBoolean" />
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, ref } from 'vue'

import AppHeader from './components/AppHeader.vue'
import HangMan from './components/HangMan.vue'
import WrongGuessedLetters from './components/WrongGuessedLetters.vue'
import CorrectWord from './components/CorrectWord.vue'
import Result from './components/Result.vue'
import AppAlert from './components/AppAlert.vue'

import handleKeyDown from './utils/handleKeyDown'

const randomWord = (words: Array<string>) =>
  words[Math.floor(Math.random() * words.length)]

export default defineComponent({
  name: 'App',

  components: {
    AppHeader,
    HangMan,
    WrongGuessedLetters,
    CorrectWord,
    Result,
    AppAlert,
  },

  setup() {
    const words = ['test', 'vue', 'hangman', 'composition']
    let word = ref(randomWord(words)).value

    // onMounted(async () => {
    //   const { data } = await axios.get(
    //     'https://random-word-api.herokuapp.com/word?number=50',
    //   )
    //   words = data
    //   word = ref(randomWord(words)).value
    // })

    const guessedLetters = ref<string[]>([])
    const letters = computed(() => word.split(''))
    const wrongLetters = computed(() =>
      guessedLetters.value.filter(l => !letters.value.includes(l)),
    )
    const correctLetters: ComputedRef<string[]> = computed(() =>
      guessedLetters.value.filter(l => letters.value.includes(l)),
    )

    const status = computed(() => {
      if (wrongLetters.value.length === 6) return 'lost' // hangman has 6 steps to be fully drawn
      if (letters.value.every(l => correctLetters.value.includes(l)))
        return 'won'
      return ''
    })

    const restart = () => {
      guessedLetters.value = []
      word = ref(randomWord(words)).value
    }

    const showAlertBoolean = ref(false)
    const showAlert = () => {
      showAlertBoolean.value = true
      setTimeout(() => (showAlertBoolean.value = false), 2500)
    }

    handleKeyDown(event => {
      const key: string = (event as KeyboardEvent).key.toLowerCase()

      if (
        (event as KeyboardEvent).keyCode < 65 ||
        (event as KeyboardEvent).keyCode > 90
      )
        return

      if (status.value) return // if the game was won / lost, return

      // Show alert when the pressed letter was already pressed
      if (guessedLetters.value.includes(key)) {
        showAlert()
        return
      }

      // If all these checks fail (they return), add the pressed letter
      // to the guessedLetters array
      guessedLetters.value.push(key)
    })

    return {
      letters,
      word,
      wrongLetters,
      correctLetters,
      guessedLetters,
      showAlertBoolean,
      status,
      restart,
    }
  },
})
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
