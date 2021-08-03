<template>
  <div style='width:800px;margin: 100px auto;' class="home">
    <Carousel
      ref="ele"
      :width='800'
      :height='400'
      :autoplay='false'
      :index='0'
      class="test"
    >
      <CarouselItem v-for="(child,i) of children" :style="{width:'100%',height:'100%',backgroundColor: child}">
        条目{{ i }}
      </CarouselItem>
    </Carousel>
    <Button @click="v.length === 10 ? v : v+=1">点一下</Button>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import { Carousel, CarouselItem, Button } from '../packages'

const App = defineComponent({
  name: 'App',
  components: {
    Carousel, CarouselItem, Button,
  },
  data () {
    return {
      children: ['skyblue', '#009688', 'green', '#5FB878', 'pink'],
      flowList: [],
      closeId : 0,
      v : "我是V",
    }
  },
  setup () {
    const ele = ref()
    const prev = () => {
      ele.value.prev()
    }
    const next = () => {
      ele.value.next()
    }
    return {
      ele,
      prev,
      next
    }
  },
})
export default App
</script>
<style lang="less" >

</style>



