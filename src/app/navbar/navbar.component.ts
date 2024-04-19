import { Component } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [ModalComponent]
})
export class NavbarComponent {

}
