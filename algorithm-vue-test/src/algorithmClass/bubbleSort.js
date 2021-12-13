import _ from 'lodash'
import { Tween, update } from "@tweenjs/tween.js";
// import TWEEN from '@tweenjs/tween.js'

class BubbleSort {
  constructor(ctx, elems = [], delay = 300) {
    this.ctx = ctx
    this.elems = elems
    this.timer = null
    this.initElems = _.cloneDeep(elems)
    this.drawQueue = [] // 每次更新后的
    this.delay = delay
  }
  start() {
    this.timer = setInterval(() => {
      if (this.isSorted()) {
        this.stop()
      }
    }, this.delay)
  }
  stop() {
    clearInterval(this.timer)
  }
  sort() {
    const { elems } = this
    let i = 0
    while (i < elems.length) {
      let lastSwappedIndex = -1
      for (let j = 0; j < elems.length - 1; j++) {
        if (elems[j + 1].value < elems[j].value) {
          this.swapElem(j, j + 1) // 交换elems里面的数据
          /**
           * 这步应该是渲染到canvas里面了
           * */
          // console.log('elems: ', elems, this.elems)
          this.drawQueue.push(_.cloneDeep(elems))
          lastSwappedIndex = j + 1
        }
      }
      i += elems.length - lastSwappedIndex
    }
    this.render()
  }
  render() { // 有没有兴趣利用递归来解决这种异步获取不到值的结果
    let { drawQueue, initElems } = this
    while (drawQueue.length > 0) { // while里若是存在异步操作，
      const nextElems = drawQueue.shift()
      console.log('nowElems: ', initElems, 'nextElems: ', nextElems)
      const diff = []
      for (let i = 0; i < initElems.length && initElems[i].value !== nextElems[i].value; i++) {
        diff.push(initElems[i])
        console.log('i: ', i, 'nowElems: ', initElems[i], 'diff: ', diff)
      }
      console.log('diff: ', diff)
      this.draw(initElems, diff[0], diff[1])
      initElems = nextElems
    }
  }
  draw(elems, now, next) {
    if (!now) return
    const { ctx } = this
    const nowTween = new Tween(now)
    nowTween.to({ x: next.x, y: next.y}, 300).start()
    const nextTween = new Tween(next)
    nextTween.to({ x: now.x, y: now.y}, 300).start()
    ;(function animate() {
      update()
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      elems.forEach(item => {
        item.draw(ctx)
      })
      requestAnimationFrame(animate)
    })()
  }
  isSorted() {
    const { elems } = this
    for (let i = 1; i < elems.length; i++) {
      if (elems[i].value < elems[i - 1].value) {
        return false
      }
    }
    return true
  }
  swapElem(i, j) {
    // 交换elems里面的数据
    /*    const elemI = this.elems[i]
    this.elems[i] = this.elems[j]
    this.elems[j] = elemI */
    ;[this.elems[i].value, this.elems[j].value] = [
      this.elems[j].value,
      this.elems[i].value,
    ]
  }
}

export default BubbleSort
