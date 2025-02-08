import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-whatsapp',
  standalone: true,
  imports: [],
  template: `
        <a [href]="linkWhatsApp" target="_blank" rel="noopener noreferrer">
          <button class="whatsapp-button">
            <i class="fab fa-whatsapp"></i>
            Contacta por WhatsApp
          </button>
        </a>`,
  styles: `
    :host {
      display: block;
    }
    .whatsapp-button {
      background-color: #4CAF50; /* Verde Material UI */
      color: white;
      border: none;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 4px;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    }

    .whatsapp-button:hover {
      background-color: #3e8e41; /* Verde más oscuro al pasar el ratón */
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnWhatsappComponent implements OnInit {
  @Input() clotheImg: String = ''

  linkWhatsApp: string = ``

  ngOnInit(): void {
    if(this.clotheImg) {
      // this.linkWhatsApp = `https://wa.me/573117672673?text=Hola%20Buenos%20dias%20estoy%20interesad@%20por%20esta%20prenda%20${this.clotheImg}`
      this.linkWhatsApp = `https://wa.me/573205219906?text=Hola%20Buenos%20dias%20estoy%20interesad@%20por%20esta%20prenda%20${this.clotheImg}`
    }
  }

}
