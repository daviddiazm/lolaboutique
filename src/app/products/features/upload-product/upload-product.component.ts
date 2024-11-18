import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ColorPickerBoxComponent } from '../../../shared/color-picker-box/color-picker-box.component';
import { MatButtonModule } from '@angular/material/button';

interface Food {
  value: string;
  viewValue: string;
}

interface ProdcutsType {
  value: string;
  viewValue: string;
}

interface ProdcutsSize {
  value: string;
  viewValue: string;
}

interface ProductMaterial {
  value: string;
  viewValue: string;
}

interface ProductBrand {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-upload-product',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    ColorPickerBoxComponent,
  ],
  templateUrl: './upload-product.component.html',
  styleUrl: './upload-product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UploadProductComponent {

  selectedValue: string = "";
  colorToUpload: string = "";

  getColorBox(colorBox:string) {
    this.colorToUpload = colorBox
  }



  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  prodcutsType: ProdcutsType[] = [
    {value: 't-shirts', viewValue: 'Camiseta'},
    {value: 'pants', viewValue: 'Pantalon'},
    {value: 'blouse', viewValue: 'Blusa'},
    {value: 'dress', viewValue: 'Vestido'},
    {value: 'shoes', viewValue: 'Zapatos'},
  ];

  prodcutsSize: ProdcutsSize[] = [
    {value: 'xs', viewValue: 'XS'},
    {value: 's', viewValue: 'S'},
    {value: 'm', viewValue: 'M'},
    {value: 'l', viewValue: 'L'},
    {value: 'xl', viewValue: 'XL'},
    {value: 'xxl', viewValue: 'XXL'},
  ];

  productMaterials: ProductMaterial[] = [
    { value: 'cotton', viewValue: 'Algodón' },
    { value: 'polyester', viewValue: 'Poliéster' },
    { value: 'wool', viewValue: 'Lana' },
    { value: 'silk', viewValue: 'Seda' },
    { value: 'denim', viewValue: 'Denim' },
    { value: 'leather', viewValue: 'Cuero' },
    { value: 'linen', viewValue: 'Lino' },
    { value: 'spandex', viewValue: 'Spandex' },
    { value: 'nylon', viewValue: 'Nylon' },
    { value: 'velvet', viewValue: 'Terciopelo' }
  ];

  productBrands: ProductBrand[] = [
    { value: 'nike', viewValue: 'Nike' },
    { value: 'adidas', viewValue: 'Adidas' },
    { value: 'puma', viewValue: 'Puma' },
    { value: 'underArmour', viewValue: 'Under Armour' },
    { value: 'gucci', viewValue: 'Gucci' },
    { value: 'prada', viewValue: 'Prada' },
    { value: 'zara', viewValue: 'Zara' },
    { value: 'h&m', viewValue: 'H&M' },
    { value: 'levi', viewValue: 'Levi\'s' },
    { value: 'gap', viewValue: 'Gap' }
  ];

  // onFileSelected() {
  //   const inputNode: any = document.querySelector('#file');

  //   if (typeof (FileReader) !== 'undefined') {
  //     const reader = new FileReader();

  //     reader.onload = (e: any) => {
  //       // this.srcResult = e.target.result;
  //     };

  //     reader.readAsArrayBuffer(inputNode.files[0]);
  //   }
  // }


  selectedFile: File | null = null; // Archivo seleccionado
  previewUrl: string | null = null; // URL para la vista previa

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];

      // Crear una vista previa
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

}
