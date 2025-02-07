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
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule
],
providers: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export default class ProductListComponent implements OnInit {

  clothes: Clothe[] = []
  filteredClothes : Clothe[] = []
  searchTerm : string = ''
  selectedSize : string = ''
  selectedBrand : string = ''
  selectedType : string = ''

  sizesList : string[] = ["XS", "S", "M", "L", "XL", "XXL" ]
  brandList : string[] = ["Adidas", "Forever 21", "Nike", "Noth Face", "Puma", "Studio F" ]
  typeList : string[] = ["Blusa", "Camiseta", "Camisa", "Pantalon", "Falda", "Chaqueta", "Vestido" ]


  constructor(
    private productService:   ProductService,
    private contentfulService:ContentfulService,
    private fb:               FormBuilder
  ) { }

  public productForm : FormGroup = this.fb.group({
    sizes: this.fb.array([]),
    brand: [''],
    type: [''],
    title: [''],
  })

  get formSizes () {
    return this.productForm.controls['sizes'] as FormArray
  }

  ngOnInit(): void {
    this.getClothes()
  }

  getClothes () {
    this.contentfulService.getAllentries().subscribe(
      element => {
        this.clothes = (element as unknown as ClotheContent)?.items.map(item => ({
          id: item.sys.id, // Default since Asset likely lacks `id`
          title: item.fields.titleClothe || "no tiene nombre",
          size: item.fields.sizeClothe, // Default value
          type: item.fields.typeClothe,
          condition: String(item.fields.conditionClothe),
          price: item.fields.priceClothe, // Default price
          img_url: item.fields.imgClothe[0].fields.file.url ?? "",
          brand: item.fields.brandClothe,
          available: item.fields.availableClothe ?? true,
        }));
        this.filteredClothes = [... this.clothes]
      }
    )
  }


  getAll () {
    this.filteredClothes = this.clothes
  }

  setSize (sizes : string[]) {
    this.formSizes.clear()
    sizes.forEach(size => {
      this.formSizes.push(
        this.fb.control( size )
      )
    });
    // console.log(this.formSizes);
    console.log(this.productForm);


    // this.filteredClothes = this.clothes.filter(clothe => clothe.size == "S")
    // this.selectedSize = size
    // this.apllyFilters()
  }

  setBrand ( brand : string ) {
    this.selectedBrand = brand
    this.apllyFilters()
  }

  setType ( type : string ) {
    console.log(type);

    this.selectedType = type
    this.apllyFilters()
  }

  setSearchTerm ( term : string ) {
    this.searchTerm = term
    this.apllyFilters()
  }

  apllyFilters() {
    this.filteredClothes = this.clothes.filter(clothe => {
      return  this.selectedSize ? clothe.size == this.selectedSize : true &&
              this.selectedBrand ? clothe.brand == this.selectedBrand : true &&
              this.selectedType ? clothe.type == this.selectedType : true &&
              this.searchTerm ? clothe.title.includes(this.searchTerm) || clothe.brand.includes(this.searchTerm) : true
    })
  }



}
