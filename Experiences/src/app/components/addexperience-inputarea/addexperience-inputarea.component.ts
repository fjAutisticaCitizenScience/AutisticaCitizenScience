import { Component, Input } from '@angular/core';

import { GalleryComponentInterface } from '../../interfaces/galleryComponent.interface';

@Component({
  template: `
    Add Experience Input Area Placeholder
  `
})
export class AddExperienceInputArea implements GalleryComponentInterface {
  @Input() data: any;

}
