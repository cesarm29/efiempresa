import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeaderComponent } from "../header/header.component";
import { FilterComponent } from "../filter/filter.component";
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { FooterComponent } from "../footer/footer.component";
import { InformationComponent } from "../information/information.component";
import { CardComponent } from "../card/card.component";
import { OfferComponent } from "../offer/offer.component";
import { ImageComponent } from "../image/image.component";
import { CardDescriptionComponent } from "../card-description/card-description.component";
import { ModalComponent } from "../modal/modal.component";
//model post
import { Post } from '../model/post';
//model image
import { Photo } from '../model/photo';
// get data from service
import { DataService } from '../services/data.service';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [NavbarComponent, HeaderComponent, FilterComponent, NewsletterComponent, FooterComponent, InformationComponent, CardComponent, OfferComponent, ImageComponent, CommonModule, CardDescriptionComponent, ModalComponent]
})
export class HomeComponent {

    dataPhoto!: Photo[];
    dataPost!: Post[];
    dataFilterPost!: Post[];
    dataFilterPhoto!: Photo[];

    constructor(private dataService: DataService) {
        dataService.fetchDataPost().subscribe(res => {
            this.dataPost = res;
        });
        dataService.fetchDataPhoto().subscribe(res => {
            this.dataPhoto = res;
        });
    }

    searchPostByUser(newItem: string) {
        this.dataService.fetchDataFilterPost(newItem).subscribe(res => {
            this.dataFilterPost = res;
        });
    }

    searchPhotoByAlbum(newItem: string) {
        this.dataService.fetchDataFilterPhoto(newItem).subscribe(res => {
            this.dataFilterPhoto = res;
        });
    }
}
