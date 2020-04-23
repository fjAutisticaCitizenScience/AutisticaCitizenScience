import { Component, OnInit } from '@angular/core';
import { ModalController, ModalType } from "./classes/modalController.class";
import { DataService } from './services/data.service';
import { GalleryItem } from './classes/galleryitem.class';
import { AddExperienceInputArea } from './components/addexperience-inputarea/addexperience-inputarea.component';
import { Footer } from './components/footer/footer.component';
import { HamburgerMenu } from "./components/hamburgermenu/hamburgermenu.component"; 
import { Hero } from './components/hero/hero.component';
import { Header } from './components/header/header.component';
import { PairedDownSecuredEngagement } from "./components/paireddownsecuredengagement/paireddownsecuredengagement.component";
import { stat } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  componentGalleryItems: GalleryItem[];
  currentPageID: string;
  loginStatus: number;
  mainStyles: any;
  navStyles: any;
  itemModal: ModalController;
  profileArea: any = {
    showClass:"profileicon",
    showState:false
  }

  constructor(private Dataservice: DataService) {
    this.Dataservice.CurrentVisiblePage.subscribe(pageID => {
      this.currentPageID = pageID;
    });

    this.Dataservice.Profile.subscribe(data => {
      this.mainStyles = data.styleTheme.main;
      this.navStyles = data.styleTheme.nav;
    });

    this.Dataservice.LoginStatus.subscribe(status =>{
      this.loginStatus = status
    })
    this.Dataservice.ModalController.subscribe(controller =>{
      this.itemModal = controller
    })

    
  }

  ngOnInit(){

    //An array of GalleryItems to display in the Component Gallery.
    this.componentGalleryItems = [
      new GalleryItem("Hero", Hero,{ title:"Welcome to the Autistica Citizen Platform", body: "The project tries to improve the environment from community input"}),
      new GalleryItem("Header", Header, {}),
      new GalleryItem("Hamburger Menu", HamburgerMenu, {}),
      new GalleryItem("Footer", Footer, {}),
      new GalleryItem("Paired Down Secured Engagement", PairedDownSecuredEngagement, {}),
      new GalleryItem("Add Experience Input Area", AddExperienceInputArea, {}),
    ]
  }

  updateLoginStatus(status: number)
  {
    this.Dataservice.nextLoginStatus(status)
  }

  logout(){
    this.updateLoginStatus(0)
    this.profileArea.showClass = "profileicon"
    this.profileArea.showState = false
  }

  toggleProfileAreaExpansion(){
    if(this.profileArea.showState){
      this.profileArea.showClass = "profileicon"
      this.profileArea.showState = false
    }
    else
    {
      this.profileArea.showClass = "profileicon expanded"
      this.profileArea.showState = true
    }
    
  }

  profileAreaClickedOutside(event: any)
  {
    if(this.profileArea.showState)
    {
    this.profileArea.showClass = "profileicon"
    this.profileArea.showState = false
    }
  }
}
