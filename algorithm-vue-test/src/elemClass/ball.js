class Ball {
  static count = 0
  static interval = 20
  constructor(value, x, y , r = 30, color = '#409EFF') {
    if (typeof value !== 'number') {
      if (value) {
        throw new Error(`${value} is not a number`)
      } else {
        throw new Error(`请传入value`)
      }
    }
    this.value = value
    this.y = y
    this.r = r
    this.color = color
    if (!x) {
      this.x = 100 + Ball.count * r * 2 + Ball.interval * Ball.count
      Ball.count++
    } else {
      this.x = x
    }
    if (!y) {
      this.y = 100 + Ball.count * 10
    }
  }
  draw(ctx) {
    const { value, x, y, r, color } = this
    ctx.save()
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
    ctx.font = '25px serif'
    const text = ctx.measureText(value)
    ctx.textBaseline = 'middle'
    ctx.strokeStyle = 'white'
    ctx.strokeText(value, x - text.width / 2, y)
    ctx.restore()
  }
  moveTo(x) {
    // 暂时只处理x轴上的交换
    this.x = x
  }
}

export default Ball
