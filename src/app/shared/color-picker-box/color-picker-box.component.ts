import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-color-picker-box',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './color-picker-box.component.html',
  styleUrl: './color-picker-box.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerBoxComponent {
  color:string | undefined

  @Output() colorSelected = new EventEmitter<string>();

  selectColor(colorSelected:string) {
    this.color = colorSelected
    this.colorSelected.emit(this.color)
  }
}
