<template>
  <div>我是主页</div>
  <canvas ref="canvasRef"></canvas>
  <span>{{ bubbleSortAnimateRef }}</span>
</template>

<script>
import { onMounted, reactive, ref } from 'vue'

import BubbleSort from '../algorithmClass/bubbleSort'
// import Animate from './animate'
export default {
  name: 'Home',
  setup() {
    const ballsArr = reactive([5, 3, 9, 1, 7])
    const canvasRef = ref(null)
    const bubbleSortAnimateRef = ref(null)
    onMounted(() => {
      canvasRef.value.width = window.innerWidth
      canvasRef.value.height = window.innerHeight
      const ctx = canvasRef.value.getContext('2d')
      const bs = new BubbleSort(ctx, ballsArr)
      // bubbleSortAnimateRef.value = new Animate(ctx, bs.initElems, bs.drawQueue)
      // console.log('drawQueue: ', bs.drawQueue) // 成功获取了绘制路径 =>
      // bubbleSortAnimateRef.value.start()
      bs.sort()
    })

    return {
      canvasRef,
      bubbleSortAnimateRef,
    }
  },
}
</script>
