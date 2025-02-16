import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-ususario-view',
  standalone: true,
  imports: [],
  templateUrl: './ususario-view.component.html',
  styleUrl: './ususario-view.component.css'
})
export class UsusarioViewComponent {

  usuarioService= inject(UsuarioService);

  activatedRoute = inject(ActivatedRoute);


  miUsuario!: Usuario;

ngOnInit():void {
  this.activatedRoute.params.subscribe((params: any)=>{
    let _id: string  = params._id as string;
   
     this.miUsuario= this.usuarioService.getById(_id);
  
  });
}



}
