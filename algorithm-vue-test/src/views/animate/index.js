import { Tween, update } from '@tweenjs/tween.js'
import _ from 'lodash'
class Animate {
  constructor(ctx, initFrame, animationFrames) {
    this.ctx = ctx
    this.initFrame = initFrame
    this.animationFrames = animationFrames
    this.currFrameIndex = 0
    this.timer = null
    this.drawInitFrame()
  }
  drawInitFrame() {
    const { initFrame } = this
    initFrame.forEach((item) => {
      item.draw(this.ctx)
    })
  }
  async start() {
    const { animationFrames } = this
    for (let i = 0; i < animationFrames.length - 1; i++) {
      debugger
      ;((i, j) => {
        this.currFrameIndex = i
        debugger
        const [elem1, elem2] = this.diff(animationFrames[i], animationFrames[j])
        this.swapElem(elem1, elem2)
      })(i, i + 1)
      debugger
    }
  }
  stop() {
    cancelAnimationFrame(this.timer)
  }
  diff(oldFrame, newFrame) {
    const diffArr = [] // diffArr中保存着oldFrame与newFrame不同的结点，排序通常是两个节点
    for (let i = 0; i < oldFrame.length; i++) {
      if (oldFrame[i].value !== newFrame[i].value) {
        diffArr.push(oldFrame[i])
      }
    }
    return diffArr
  }
  swapElem(elem1, elem2) {
    const { ctx, currFrameIndex, animationFrames } = this
    const _this = this
    const tempElem = _.cloneDeep(elem1)
    new Tween(elem1).to({ x: elem2.x, y: elem2.y }, 300).start()
    new Tween(elem2).to({ x: tempElem.x, y: tempElem.y }, 300).start()
    ;(function animate() {
      update()
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      animationFrames[currFrameIndex].forEach((item) => {
        item.draw(ctx)
      })
      _this.timer = requestAnimationFrame(animate)
    })()
  }
}

export default Animate
