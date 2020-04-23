import { Component, Input } from '@angular/core';

import { GalleryComponentInterface } from '../../interfaces/galleryComponent.interface';

@Component({
  template: `
    HamburgerMenu Placeholder
  `
})
export class HamburgerMenu implements GalleryComponentInterface {
  @Input() data: any;

}
