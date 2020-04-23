import { Component, Input } from '@angular/core';

import { GalleryComponentInterface } from '../../interfaces/galleryComponent.interface';

@Component({
  template: `
    Header Placeholder
  `
})
export class Header implements GalleryComponentInterface {
  @Input() data: any;

}
