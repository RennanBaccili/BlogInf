import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
	images:string[] = ['https://pt.org.br/wp-content/uploads/2022/07/de-volta-ao-mapa-da-fome-familia-pobreza-2.jpeg',
   'https://www.viagenscinematograficas.com.br/wp-content/uploads/2022/05/Ecoturismo-Melhores-Destinos-Brasil-Capa.jpg',
    'https://observatorio3setor.org.br/wp-content/uploads/2019/04/fome-1.jpg'];

  @Input()
  title:string[] = ['','',''];

  @Input()
  description:string[] = ['','',''];
}
