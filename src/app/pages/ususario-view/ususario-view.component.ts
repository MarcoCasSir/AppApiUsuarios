import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { BotonesComponent } from "../../components/botones/botones.component";

@Component({
  selector: 'app-ususario-view',
  standalone: true,
  imports: [BotonesComponent],
  templateUrl: './ususario-view.component.html',
  styleUrl: './ususario-view.component.css'
})
export class UsusarioViewComponent {

  usuarioService= inject(UsuarioService);

  activatedRoute = inject(ActivatedRoute);


  miUsuario!: Usuario;


  ngOnInit():void {
    this.activatedRoute.params.subscribe(async(params: any)=>{
      let _id: string  = params._id as string;

        try {     
            this.miUsuario=  await this.usuarioService.getById(_id);
        } catch (err) {  
            console.log ( " Error al llamar a la API " + err);
        }    
      });
    }

}
