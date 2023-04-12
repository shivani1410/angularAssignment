import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasic]'
})
export class BasicDirective  implements OnInit{

  constructor(private elRef:ElementRef) { }
ngOnInit(): void {
  this.elRef.nativeElement.style.backgroundColor='green'
}
}
