import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
@Input() set appUnless(condition:boolean){
if(!condition){
  this.viewContentRef.createEmbeddedView(this.tempRef)
}
}
  constructor(private tempRef:TemplateRef<any>, private viewContentRef:ViewContainerRef) { }

}
