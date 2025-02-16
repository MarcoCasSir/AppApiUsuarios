import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export class UsuarioFormComponent {


  usuarioService = inject (UsuarioService);
  router = inject (Router);
  activedRoute = inject (ActivatedRoute);

  usuarioForm: FormGroup;

  tipo : string;

  constructor(){
    this.tipo = "NUEVO USUARIO";

    this.usuarioForm= new FormGroup ( {
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    } , 
    []);
}

ngOnInit (): void {
    this.activedRoute.params.subscribe(async (params:any) => {
      if (params._id){
        this.tipo = "ACTUALIZAR USUARIO";
        const response = await this.usuarioService.getById(params._id);

        this.usuarioForm= new FormGroup ( {
          _id: new FormControl ( response._id, []),
          first_name: new FormControl(response.first_name, [Validators.required]),
          last_name: new FormControl(response.last_name, [Validators.required]),
          email: new FormControl(response.email, [Validators.required]),
          image: new FormControl(response.image, [Validators.required]),
        } , 
        []);

      }
    })
}


getDataForm() {
  
  }


}
