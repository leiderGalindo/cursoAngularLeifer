import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appImagenRota]'
})
export class ImagenRotaDirective{
  @Input() urlCustom:string;

  constructor(private elementRef: ElementRef) { }

  @HostListener('error')
  cargarImagenPorDefecto(){
    const element = this.elementRef.nativeElement
    element.src = this.urlCustom || 'https://th.bing.com/th/id/OIP.0faQQosBDN2F-62g8nTk_QHaDg?w=341&h=165&c=7&o=5&pid=1.7';
    //element.src = 'https://th.bing.com/th/id/R6af9a41c7e3e3d7f2db1b9c6e2fa9ad4?rik=aHZ3UZDmjr5cZQ&pid=ImgRaw';
  }
  
}
