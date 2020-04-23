import { Type } from '@angular/core';

export class GalleryItem {
  constructor(public componentName:string, public component: Type<any>, public data: any) {}
}