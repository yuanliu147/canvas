class Ball {
  static interval = 20
  constructor(value, x, y, r = 30, color = '#409EFF') {
    if (typeof value !== 'number') {
      if (value) {
        throw new Error(`${value} is not a number`)
      } else {
        throw new Error(`请传入value`)
      }
    }
    this.value = value
    this.x = x
    this.y = y
    this.r = r
    this.color = color
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
}

export default Ball
