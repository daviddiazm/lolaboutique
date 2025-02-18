import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Clothe } from '../../../core/interfaces/Clothe.interface';
import { RouterModule } from '@angular/router';
import { BtnWhatsappComponent } from "../btn-whatsapp/btn-whatsapp.component";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    BtnWhatsappComponent
],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements OnInit {
  @Input() clothe!: Clothe;
  // linkWhatsApp: string = `https://wa.me/573117672673?text=Hola%20Buenos%20dias%20estoy%20interesad@%20por%20esta%20prenda%20${this.clothe.img_url}`
  linkWhatsApp: string = ``

  ngOnInit(): void {
    if (!this.clothe) throw Error('No hay')
    else this.linkWhatsApp = `https://wa.me/573117672673?text=Hola%20Buenos%20dias%20estoy%20interesad@%20por%20esta%20prenda%20${this.clothe.img_url}`
  }

  redirectToWhatsapp() {
    this.linkWhatsApp = "https://wa.me/573117672673?text=I'm%20inquiring%20about%20the%20apartment%20listing"
  }

}
