function draw(ctx, callBack) {
    ctx.save()
    callBack()
    ctx.restore()
}

function drawDisk(ctx) {
    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(clockX, clockY, 66, 0, Math.PI * 2)
    ctx.fill()
}
