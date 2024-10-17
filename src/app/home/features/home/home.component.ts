import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavBarComponent } from "../../../shared/nav-bar/nav-bar.component";
import { ProductCardComponent } from "../../../products/ui/product-card/product-card.component";
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    ProductCardComponent,
    RouterLink,
    MatButtonModule,
    MatIconModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent { }
