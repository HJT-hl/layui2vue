import { defineComponent, h, Ref, ref, watchEffect } from 'vue'

import Upload from '../packages/upload'

import ButtonContainer from '../packages/button-container'
const App = defineComponent({
  setup () {
    const filePreviewList: Ref<string[]> = ref([])
    const up = ref();
    const yellow = 'yellow'
    return () => <div style='width:800px;margin: 100px auto;'>
      <div v-css={{yellow}} style={{backgroundColor: 'var(--yellow)'}}> hello 可以的有点像</div>

    </div>
  }
})

export default App
