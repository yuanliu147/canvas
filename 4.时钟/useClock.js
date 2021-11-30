const [clockX, clockY] = [230, 350]
// 绘制包裹
export function draw(ctx, callBack, ...args) { // 这是什么设计模式？
    ctx.save()
    callBack(ctx, ...args)
    ctx.restore()
}
// 绘制圆盘
export function drawDisk(ctx) {
    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(clockX, clockY, 66, 0, Math.PI * 2)
    ctx.fill()
}
// 绘制圆盘边框
export function drawDiskFrame(ctx) {
    ctx.beginPath()
    ctx.lineWidth = 8
    ctx.strokeStyle = '#f15252'
    ctx.arc(clockX, clockY, 70, 0, Math.PI * 2)
    ctx.stroke()
}
// 绘制圆盘边框描边
export function drawDiskFrameStroke(ctx) {
    ctx.beginPath()
    ctx.lineWidth = 3
    ctx.strokeStyle = '#ff0000'
    ctx.arc(clockX, clockY, 73, 0, Math.PI * 2)
    ctx.stroke()
}
// 绘制刻度线
export function drawTickLine(ctx) {
    ctx.translate(clockX, clockY)
    ctx.beginPath()
    ctx.lineWidth = 5
    ctx.strokeStyle = 'red'
    // const circleDeg = Math.PI * 2
    // ctx.rotate(circleDeg * degree) 注意：变换是相对的，以上一次变换为基准
    for (let i = 0; i < 4; i++) {
        ctx.moveTo(58, 0)
        ctx.lineTo(66, 0)
        ctx.rotate(Math.PI / 2)
    }
    ctx.stroke()
}
// 绘制5分钟线
export function drawFiveLine(ctx) {
    ctx.translate(clockX, clockY)
    ctx.beginPath()
    ctx.strokeStyle = '#9f8d7d'
    ctx.lineWidth = 5
    for (let i = 0; i < 12; i++) {
        if(i % 3 !== 0) {
            ctx.moveTo(62, 0)
            ctx.lineTo(66, 0)
        }
        ctx.rotate(Math.PI / 6)
    }
    ctx.stroke()
}
// 绘制一分钟线
export function drawOneLine(ctx) {
    ctx.translate(clockX, clockY)
    ctx.beginPath()
    ctx.lineWidth = 3
    ctx.strokeStyle = '#9f8d7d'
    for (let i = 0; i < 60; i++) {
        if(i % 5 !== 0) {
            ctx.moveTo(64, 0)
            ctx.lineTo(66, 0)
        }
        ctx.rotate(Math.PI / 30)
    }
    ctx.stroke()
}
// 绘制时针
export function drawHourHand(ctx) {
    ctx.translate(clockX, clockY)
    ctx.beginPath()
    ctx.rotate(getHoursDegree())
    ctx.rotate(0)
    ctx.lineWidth = 4
    ctx.lineCap = 'round'
    ctx.strokeStyle = '#e5ce5e'
    ctx.moveTo(-10, 0)
    ctx.lineTo(38, 0)

    ctx.stroke()
}
// 绘制分针
export function drawMinutesHand(ctx) {
    ctx.translate(clockX, clockY)
    ctx.beginPath()
    ctx.rotate(getMinutesDegree())
    ctx.lineWidth = 3
    ctx.lineCap = 'round'
    ctx.strokeStyle = '#e5ce5e'
    ctx.moveTo(-10, 0)
    ctx.lineTo(45, 0)

    ctx.stroke()
}
// 绘制秒针
export function drawSecondsHand(ctx) {
    ctx.translate(clockX, clockY)
    ctx.beginPath()
    ctx.rotate(getSecondsDegree())
    ctx.lineWidth = 2
    ctx.lineCap = 'round'
    ctx.strokeStyle = '#de1111'
    ctx.moveTo(-10, 0)
    ctx.lineTo(48, 0)

    ctx.stroke()
}
// 获取小时刻度
export function getHoursDegree() {
    const date = new Date()
    const hour = date.getHours()

    return (hour % 12 / 12) * (Math.PI * 2) - Math.PI / 2// + Math.PI / 2
}
// 获取分钟刻度
export function getMinutesDegree() {
    const date = new Date()
    const minites = date.getMinutes()

    return (minites / 60) * (Math.PI * 2) - Math.PI / 2
}
// 获取秒钟刻度
export function getSecondsDegree() {
    const date = new Date()
    const seconds = date.getSeconds()

    return (seconds / 60) * Math.PI * 2 - Math.PI / 2
}
