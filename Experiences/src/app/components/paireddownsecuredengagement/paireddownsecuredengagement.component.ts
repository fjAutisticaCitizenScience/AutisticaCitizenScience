import { Component, Input } from '@angular/core';

import { GalleryComponentInterface } from '../../interfaces/galleryComponent.interface';

@Component({
  template: `
    Paired Down Secured Engagment Placeholder
  `
})
export class PairedDownSecuredEngagement implements GalleryComponentInterface {
  @Input() data: any;

}
