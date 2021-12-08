class Food {
    constructor(rows, columns, rect) {
        // 还是要约定好，columns与rows不然，若是snake直接以像素来划定，则可能导致错位
        this.x = ((Math.random() * columns) >> 0) * rect
        this.y = ((Math.random() * rows) >> 0) * rect
        this.color = 'red'
    }
}

export default Food
