// 绘制包裹
function draw(ctx, callBack, ...args) {
    ctx.save()
    callBack(ctx, ...args)
    ctx.restore()
}
// 绘制圆盘
function drawDisk(ctx) {
    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(clockX, clockY, 66, 0, Math.PI * 2)
    ctx.fill()
}
// 绘制圆盘边框
function drawDiskFrame(ctx) {
    ctx.beginPath()
    ctx.lineWidth = 8
    ctx.strokeStyle = '#f15252'
    ctx.arc(clockX, clockY, 70, 0, Math.PI * 2)
    ctx.stroke()
}
// 绘制圆盘边框描边
function drawDiskFrameStroke(ctx) {

}
