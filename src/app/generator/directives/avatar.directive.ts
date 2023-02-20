import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: 'canvas[avatar]',
})
export class AvatarDirective implements OnInit, OnChanges {
  @Input() hat: string | undefined = '';
  ctx: CanvasRenderingContext2D | null;

  constructor(private ref: ElementRef<HTMLCanvasElement>) {
    this.ctx = this.canvas.getContext('2d');
  }

  ngOnInit(): void {
    this.setupCanvas();
    this.drawAlpaca();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { hat } = changes;
    this.drawAlpaca();
    if (hat && hat.currentValue) this.drawHat();
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
      this.ctx.drawImage(img, 0, 0, 200, 200);
    };
    img.src = '/assets/alpaca.jpg';
  }

  drawHat() {
    const headImage = new Image();
    headImage.onload = () => {
      if (this.ctx == null) {
        return;
      }
      this.ctx.drawImage(headImage, 65, 7, 45, 45);
    };
    headImage.src = `/assets/${this.hat}`;
  }
}
