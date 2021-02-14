<template>
  <div class="alert-container" :class="{ show: show }">
    <p>You have already entered this letter</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppAlert',

  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
