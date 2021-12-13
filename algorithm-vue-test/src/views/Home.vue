<template>
  <div>我是主页</div>
  <canvas ref="canvasRef"></canvas>
</template>

<script>
import { onMounted, reactive, ref } from 'vue'

import Ball from '../elemClass/ball'
import BubbleSort from '../algorithmClass/bubbleSort'
export default {
  name: 'Home',
  setup() {
    const ballsArr = reactive([5, 3, 9, 1, 7])
    const ballsElem = reactive([])
    const canvasRef = ref(null)
    onMounted(() => {
      canvasRef.value.width = window.innerWidth
      canvasRef.value.height = window.innerHeight
      const ctx = canvasRef.value.getContext('2d')
      ballsArr.forEach((item, index) => {
        ballsElem[index] = new Ball(item)
      })
      const bs = new BubbleSort(ctx, ballsElem)
      bs.sort()
      console.log('drawQueue: ', bs.drawQueue) // 成功获取了绘制路径 =>
    })

    return {
      canvasRef,
      ballsElem,
    }
  },
}
</script>
