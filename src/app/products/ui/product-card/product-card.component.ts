import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Clothe } from '../../../core/interfaces/Clothe.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements OnInit {
  @Input() clothe!: Clothe;

  linkWhatsApp:string = ""

  ngOnInit(): void {
    if(!this.clothe) throw Error('No hay')
  }

  redirectToWhatsapp () {
    this.linkWhatsApp = "https://wa.me/573117672673?text=I'm%20inquiring%20about%20the%20apartment%20listing"
  }

}
