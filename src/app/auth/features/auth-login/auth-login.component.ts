import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NavBarComponent } from "../../../shared/nav-bar/nav-bar.component";

@Component({
  selector: 'app-auth-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NavBarComponent
],
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AuthLoginComponent { }
