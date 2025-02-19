import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export class UsuarioFormComponent {


 
  usuarioService = inject (UsuarioService);
  router = inject (Router);
  activedRoute = inject (ActivatedRoute);

  usuarioForm: FormGroup;

  tipo : string;

  boton: string;

  constructor(){
    this.tipo = "NUEVO";
    this.boton= "GUARDAR";

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
        this.tipo = "ACTUALIZAR";
        this.boton= "ACTUALIZAR";
        const response = await this.usuarioService.getById(params._id);

        this.usuarioForm= new FormGroup ( {
          _id: new FormControl ( response._id, []),
          first_name: new FormControl(response.first_name, [Validators.required]),
          last_name: new FormControl(response.last_name, [Validators.required]),
          email: new FormControl(response.email, [Validators.required, Validators.email]),
          image: new FormControl(response.image, [Validators.required]),
        } , 
        []);

      }
    })
}


async getDataForm() {   

  try{
    let user: Usuario = this.usuarioForm.value as Usuario;   

    if ( this.boton == 'GUARDAR'){    
      let response = await this.usuarioService.insert(user);
      alert(`Se ha guardado correctamente`);
      this.usuarioForm.reset(); 
    }
    else {  
        let response = await this.usuarioService.update(user);         
        if (response.error) {
            alert(`Error: `+ response.error);
            return; 
        }        
        else(response._id) 
            alert(`Se ha actualizado correctamente el usuario: `+ response.first_name);           
      }
    
  }   
    catch (erro){
      alert('Ha habido un problema de comunicacion');
    }

  }
}
