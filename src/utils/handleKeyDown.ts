import { onMounted, onUnmounted } from 'vue'

const handleKeyDown = (handler: EventListenerOrEventListenerObject) => {
  onMounted(() => window.addEventListener('keydown', handler, false))

  onUnmounted(() => window.removeEventListener('keydown', handler, false))
}

export default handleKeyDown
