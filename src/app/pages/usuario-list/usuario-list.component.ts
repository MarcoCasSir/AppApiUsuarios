import { UsuarioService } from './../../services/usuario.service';
import { Component, inject } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './usuario-list.component.html',
  styleUrl: './usuario-list.component.css'
})
export class UsuarioListComponent {

  arrUsuario: Usuario [];
  usuarioService= inject(UsuarioService);

  constructor(){    

    this.arrUsuario= [];
  }

  ngOnInit():void {
    this.usuarioService.getAllWithObservables().subscribe((data) => {
      this.arrUsuario = data.results;
    });
  }
}
