import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[gallery-component]',
})
export class GalleryComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
