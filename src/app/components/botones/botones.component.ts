import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from './../../services/usuario.service';
import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {

  usuarioService = inject(UsuarioService);
  router = inject (Router);

  @Input() _id : string;
  @Input() parent: string;

  constructor(){
    this._id="";
    this.parent= "";
  }

  borrarUsuario(_id:string) {

    // llamara al servicio donde trendremos la funcion de borrar

  }

}
