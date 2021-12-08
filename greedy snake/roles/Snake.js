class Snake {
    constructor(rect = 10) {
        this.rect = rect
        this.data = [ // 第0项为snake header
            { x: 10 * rect + 40, y: 200, color: 'green' },
            { x: 10 * rect + 30, y: 200, color: 'white' },
            { x: 10 * rect + 20, y: 200, color: 'white' },
            { x: 10 * rect + 10, y: 200, color: 'white' },
            { x: 10 * rect, y: 200, color: 'white' },
        ]
        this.direction = 'right'
    }
    move() {
        let i = this.data.length - 1 // 获取最后一个小方块
        this.lastData = { // 为什么不可以直接浅拷贝？
            x: this.data[i].x,
            y: this.data[i].y,
            color: this.data[i].color
        }
        while (i > 0) { // >0是因为第一项为自主控制的结点
            this.data[i].x = this.data[i - 1].x
            this.data[i].y = this.data[i - 1].y
            i--
        }
        switch(this.direction){
            // 根据direction控制snake header下一步移动的位置
            case 'left':
                this.data[0].x -= 1;
                break;
            case 'right':
                this.data[0].x += 1;
                break;
            case 'top':
                this.data[0].y -= 1;
                break;
            case 'bottom':
                this.data[0].y += 1;
                break;
        }
    }
    changeDirection(direction) {
        // 如果蛇本身现在在左右移动，我们只能修改让蛇上下移动
        if(this.direction === 'left' || this.direction === 'right'){
            if(direction === 'left' || direction === 'right'){
                return false; // 不能修改方向
            }
        } else {
            if(direction==='top'||direction==='bottom'){
                return false; // 不能修改方向
            }
        }
        this.direction = direction;
        return true;
    }
}

export default Snake
