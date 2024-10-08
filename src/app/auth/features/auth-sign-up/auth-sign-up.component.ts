import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auth-sign-up',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './auth-sign-up.component.html',
  styleUrl: './auth-sign-up.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AuthSignUpComponent { }
