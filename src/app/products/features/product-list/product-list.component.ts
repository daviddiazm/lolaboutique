import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductCardComponent } from "../../ui/product-card/product-card.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../../../core/services/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Clothe } from '../../../core/interfaces/Clothe.interface';

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
providers: [
  HttpClient
],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductListComponent implements OnInit {

  clothes: Clothe[]

  constructor(private productService: ProductService) {
    this.clothes = []
  }

  ngOnInit(): void {
    console.log(
      this.productService.getProducts().subscribe(
        clothes => {
          this.clothes = clothes
        }
      )
    );

  }


}
