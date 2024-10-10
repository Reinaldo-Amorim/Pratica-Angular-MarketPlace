import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { CadastroComponent } from './page/cadastro/cadastro.component';
import { ProdutosComponent } from './page/produtos/produtos.component';
import { PerfilComponent } from './page/perfil/perfil.component';

export const routes: Routes = [
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"",
        pathMatch:"full",
        redirectTo:"login"
    },
    {
        path:"cadastro",
        component: CadastroComponent
    },
    {
        path:"produtos",
        component: ProdutosComponent
    },
    {
        path:"perfil",
        component: PerfilComponent
    },
    
];
