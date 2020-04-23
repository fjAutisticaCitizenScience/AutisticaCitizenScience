import { Component, Input } from '@angular/core';

import { GalleryComponentInterface } from '../../interfaces/galleryComponent.interface';

@Component({
  template: `
    Footer Placeholder
  `
})
export class Footer implements GalleryComponentInterface {
  @Input() data: any;

}
