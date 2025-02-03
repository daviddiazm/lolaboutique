import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../../../shared/nav-bar/nav-bar.component";
import { ProductCardComponent } from "../../../products/ui/product-card/product-card.component";
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InfoCardComponent } from "../../../shared/info-card/info-card.component";
import AboutUs from '../../../core/interfaces/AboutUs';
import { ProductService } from '../../../core/services/product.service';
import { Clothe } from '../../../core/interfaces/Clothe.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    ProductCardComponent,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    InfoCardComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export default class HomeComponent implements OnInit {

  public clothesListFirstThree : Clothe[] = []

  constructor(private productService:ProductService) {}

  

  ngOnInit(): void {
    this.productService.getFirstTrheeProducts().subscribe(
      clothes => {
        this.clothesListFirstThree = clothes
      }
    )
  }


  public auboutUsList:AboutUs[] = [
    {
      title: "Sobre Nosotros",
      description: "Bienvenidos a <strong>Lola's Boutique</strong>, una tienda de ropa de segunda mano dedicada a ofrecer moda sostenible y accesible. Nuestra misión es dar una segunda vida a la ropa, reduciendo el impacto ambiental y ayudando a nuestros clientes a encontrar estilos únicos a precios asequibles."
    },
    {
      title: "Nuestra Historia",
      description: "Lola's Boutique nació de la pasión por la moda y el deseo de crear un impacto positivo en el medio ambiente. Comenzamos como una pequeña iniciativa para compartir prendas en buen estado y con el tiempo hemos crecido para convertirnos en un espacio donde todos pueden encontrar algo especial."
    },
    {
      title: "Nuestra Misión",
      description: "Promovemos la moda circular y sostenible. Creemos que cada prenda tiene una historia y merece ser reutilizada. Nuestro compromiso es proporcionar ropa de calidad, asequible y siempre a la moda, mientras reducimos el desperdicio textil."
    },
    {
      title: "Nuestros Valores",
      description: "<ul> <li><strong>Sostenibilidad:</strong> Fomentamos el consumo responsable y la reutilización de prendas.</li> <li><strong>Calidad:</strong> Seleccionamos cuidadosamente cada artículo para asegurar que cumple con nuestros estándares de calidad.</li> <li><strong>Accesibilidad:</strong> Hacemos que la moda esté al alcance de todos.</li> <li><strong>Responsabilidad Social:</strong> Apoyamos causas locales y ayudamos a nuestra comunidad.</li> </ul>"
    },
    {
      title: "El Proceso de Selección",
      description: "Cada prenda en nuestra tienda pasa por un riguroso proceso de selección. Nos aseguramos de que todas las piezas estén en excelente estado y listas para una nueva vida. De esta manera, te ofrecemos ropa única, de alta calidad, a un precio inmejorable."
    },
    {
      title: "Nuestro Equipo",
      description: "Nuestro equipo está formado por apasionados de la moda y defensores de la sostenibilidad. Trabajamos día a día para brindarte las mejores prendas y una experiencia de compra agradable y amigable con el medio ambiente."
    },

  ]


}
