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

  @Input() _id: string;
  @Input() parent: string;

  constructor(){
    this._id="";
    this.parent= "";
  }

  async borrarUsuario(_id: string) {
    let confirmacion = confirm(` Quieres borrar al usuario: ` + this._id);

    if (confirmacion) {        
        try {
            let response = await this.usuarioService.delete(_id); 

            if (response.error) {
                alert(`Error: `+ response.error);
                return; 
            }
            
            if (response._id) {
                alert(`Se ha borrado correctamente el usuario: `+ response.first_name);                
                
                if (this.parent === 'view') {
                    this.router.navigate(['/home']);
                } else {
                    location.reload();
                }
            } else {
                alert('La confirmacion no es validad');
            }
        } catch (error) {
            alert('Ha habido un problema de comunicacion');
        }
    }
}


} 
