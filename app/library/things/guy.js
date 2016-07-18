class Guy {
  constructor(x, y, height, width) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
  }

  moveLeft(){
    this.x -= 5;
  }

  moveRight(){
    this.x += 5;
  }

  moveUp(){
    this.y -= 5;
  }

  moveDown(){
    this.y += 5;
  }

  draw(_ctx){
    _ctx.beginPath();
    _ctx.strokeStyle = "#C8EF1A";
    _ctx.lineWidth = 0.8;
    _ctx.strokeRect(this.x, this.y, this.height, this.width);
    _ctx.closePath();
    _ctx.fill();
  }
}
