import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[ngxDecorateWithArrow]'
})
export class ngxDecorateWithArrow {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input()
  set ngxDecorateWithArrow(condition: boolean) {
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.viewContainer.clear();
  }


}
