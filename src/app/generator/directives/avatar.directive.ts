import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'canvas[avatar]',
})
export class AvatarDirective implements OnInit {
  ctx: CanvasRenderingContext2D | null;
  headImage!: HTMLImageElement;

  constructor(private ref: ElementRef<HTMLCanvasElement>) {
    this.ctx = this.canvas.getContext('2d');
    this.headImage = new Image();
    this.headImage.onload = () => {
      this.drawHead();
    };
  }

  ngOnInit(): void {
    this.setupCanvas();
    this.drawAlpaca();

    this.setHeadImage('/assets/Diploma-Hat.png');

    setTimeout(() => {
      this.drawHead();
      this.setHeadImage('');
    }, 3000);
  }

  get canvas(): HTMLCanvasElement {
    return this.ref.nativeElement;
  }

  setupCanvas() {
    this.canvas.width = 200;
    this.canvas.height = 200;
    this.canvas.style.backgroundColor = 'grey';
  }

  drawAlpaca() {
    const img = new Image();
    img.onload = () => {
      if (this.ctx == null) {
        return;
      }
      console.log('alpaca');

      this.ctx.drawImage(img, 0, 0, 200, 200);
    };
    img.src = '/assets/alpaca.jpg';
  }

  drawHead() {
    if (this.ctx == null) {
      return;
    }
    console.log('hat');

    this.ctx.drawImage(this.headImage, 65, 7, 45, 45);
  }

  setHeadImage(src: string) {
    this.headImage.src = src;
  }
}
