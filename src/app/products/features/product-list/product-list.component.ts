import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductCardComponent } from "../../ui/product-card/product-card.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../../../core/services/product.service';
import { Clothe } from '../../../core/interfaces/Clothe.interface';
import { ContentfulService } from '../../../core/services/contentful.service';
import { ClotheContent } from '../../../core/interfaces/ClotheContent.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,

],
providers: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export default class ProductListComponent implements OnInit {

  clothes: Clothe[] = []
  // clothes: ClotheContent[] = []

  constructor(
    private productService:   ProductService,
    private contentfulService:ContentfulService
  ) {}

  ngOnInit(): void {
    // this.productService.getProducts().subscribe(
    //   clothes => {
    //     this.clothes = clothes
    //   }
    // )

    this.contentfulService.getAllentries().subscribe(
      element => {
        console.log(element);
        const newClothes = {

        }
        // this.clothes = element.includes?.Asset?.map(asset => ({
        //   id: 0, // Default since Asset likely lacks `id`
        //   title: asset.fields?.title || "no tiene nombre",
        //   size: "Unknown", // Default value
        //   type: "Unknown",
        //   condition: "New",
        //   price: 0, // Default price
        //   img_url: asset.fields?.file?.url ?? "", // Only available property
        //   color: "Unknown",
        //   brand: "Unknown",
        //   available: true, // Default to available
        // })) ?? [];

        // this.clothes = (element as ClotheContent)?.items.map( item => ({
        //   id: 0, // Default since Asset likely lacks `id`
        //   title: item.fields.titleClothe || "no tiene nombre",
        //   size: item.fields.sizeClothe, // Default value
        //   type: "" ,
        //   condition: "New",
        //   price: 100 , // Default price
        //   img_url: item.fields.imgClothe[0].fields.file.url ?? "",
        //   color: "Unknown",
        //   brand: item.fields.brandClothe,
        //   available: true, // Default to available
        // }))

        this.clothes = (element as unknown as ClotheContent)?.items.map(item => ({
          id: 0, // Default since Asset likely lacks `id`
          title: item.fields.titleClothe || "no tiene nombre",
          size: item.fields.sizeClothe, // Default value
          type: item.fields.typeClothe,
          condition: String(item.fields.conditionClothe),
          price: item.fields.priceClothe, // Default price
          img_url: item.fields.imgClothe[0].fields.file.url ?? "",
          brand: item.fields.brandClothe,
          available: item.fields.availableClothe ?? true,
        }));

      }
    )
  }

}
