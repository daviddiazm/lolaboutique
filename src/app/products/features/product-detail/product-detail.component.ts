import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { ContentfulService } from '../../../core/services/contentful.service';
import { Clothe } from '../../../core/interfaces/Clothe.interface';
import { ClotheResponse } from '../../../core/interfaces/ClotheResponse.interface';
import { BtnWhatsappComponent } from "../../ui/btn-whatsapp/btn-whatsapp.component";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLinkActive,
    BtnWhatsappComponent
],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export default class ProductDetailComponent implements OnInit {

  id : string | null = ''
  linkWhatsApp : string = ''
  clothe !: Clothe
  stars: string = ''

  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id =  params.get('id')
    })

    if (this.id) {
      this.contentfulService.getEntrieById(this.id).subscribe((clothe : ClotheResponse) => {
        console.log(clothe);
        this.clothe = {
          id: clothe.sys.id,
          brand: clothe.fields.brandClothe ,
          img_url: clothe.fields.imgClothe[0].fields.file.url ,
          price: clothe.fields.priceClothe,
          size: clothe.fields.sizeClothe,
          title: clothe.fields.titleClothe,
          available: true,
          condition: String(clothe.fields.conditionClothe),
          type: clothe.fields.typeClothe
        };

        this.getStars()

        // this.linkWhatsApp = `https://wa.me/573117672673?text=Hola%20Buenos%20dias%20estoy%20interesad@%20por%20esta%20prenda%20${this.clothe.img_url}`
        // this.linkWhatsApp = `https://wa.me/573117672673?text=Hola%20Buenos%20dias%20estoy%20interesad@%20por%20esta%20prenda%20https://lolasboutique.netlify.app/products/product-detail/${this.clothe.id}`
      });
    }

  }

  getStars () {
    for (let i = 0; i < Number(this.clothe.condition) ; i++) {
      this.stars += "⭐"
    }
  }

}
