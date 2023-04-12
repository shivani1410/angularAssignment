import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
@HostBinding('class.open') isOpen=false;
  constructor() { }
@HostListener('click') openDropdown(){
  this.isOpen=!this.isOpen
}
@HostListener('mouseleave') closeDropdown(){
  this.isOpen=!this.isOpen
}
}
