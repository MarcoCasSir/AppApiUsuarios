import { Routes } from '@angular/router';
import { UsuarioListComponent } from './pages/usuario-list/usuario-list.component';
import { UsusarioViewComponent } from './pages/ususario-view/ususario-view.component';
import { UsuarioFormComponent } from './pages/usuario-form/usuario-form.component';

export const routes: Routes = [
    {path: "", pathMatch: "full" , redirectTo: "home"},
    {path:"home", component: UsuarioListComponent},    
    {path:"newuser", component: UsuarioFormComponent},
    {path:"updateuser/:_id", component: UsuarioFormComponent},
    {path:"user/:_id", component: UsusarioViewComponent},
    
    {path:"**", redirectTo:"home"}
    
    //{path:"**", component: Page404Component}

];
