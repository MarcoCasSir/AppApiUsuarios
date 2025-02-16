import { Component, Input } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { BotonesComponent } from "../botones/botones.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [BotonesComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() miUsuario!: Usuario;

}
