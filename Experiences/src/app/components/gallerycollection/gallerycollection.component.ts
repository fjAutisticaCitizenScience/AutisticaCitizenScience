import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { GalleryItem } from '../../classes/galleryitem.class'
import { GalleryComponentInterface } from '../../interfaces/galleryComponent.interface'
import { GalleryComponentDirective } from '../../directives/galleryComponent.directive'

@Component({
    selector: 'gallery-component',
    template: `
            <div style="background-color:white; margin: 15px">
                <div style="background-color:rgb(144, 181, 181); padding: 5px;">{{galleryItem.componentName}}</div>
                <div style="padding: 5px;">
                    <ng-template gallery-component></ng-template>
                </div>
            </div>
              `
  })
  export class GalleryCollectionComponent implements OnInit, OnDestroy {
    @Input() galleryItem: GalleryItem;
    //currentAdIndex = -1;
    @ViewChild(GalleryComponentDirective, {static: true}) adHost: GalleryComponentDirective;
    //interval: any;
  
    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  
    ngOnInit() {
      this.loadComponent();
      //this.getAds();
    }
  
    ngOnDestroy() {
      //clearInterval(this.interval);
    }
  
    loadComponent() {
      //this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
      //const adItem = this.ads[this.currentAdIndex];
  
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.galleryItem.component);
  
      const viewContainerRef = this.adHost.viewContainerRef;
      viewContainerRef.clear();
  
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<GalleryComponentInterface>componentRef.instance).data = this.galleryItem.data;
    }
  }

















