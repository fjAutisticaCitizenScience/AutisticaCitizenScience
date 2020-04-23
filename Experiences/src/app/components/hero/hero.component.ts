import { Component, Input } from '@angular/core';

import { GalleryComponentInterface } from '../../interfaces/galleryComponent.interface';

@Component({
  template: `
    <div>
      <h4>{{data.title}}</h4>

      {{data.body}}
    </div>
  `
})
export class Hero implements GalleryComponentInterface {
  @Input() data: any;

}
