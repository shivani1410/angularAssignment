import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReder]'
})
export class RederDirective implements OnInit{
  @Input() defaultColor:string='transparent';
  @Input() highlightedColor:string;
@HostBinding('style.backgroundColor') backgroundColor:string='transparent';
  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
ngOnInit(): void {
  this.backgroundColor=this.highlightedColor
  // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
}
@HostListener('mouseenter') mouseover(eventData:Event){
  // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
  this.backgroundColor=this.highlightedColor
}
@HostListener('mouseleave') mouseleave(eventData:Event){
  // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent')
  this.backgroundColor=this.defaultColor
}
}
