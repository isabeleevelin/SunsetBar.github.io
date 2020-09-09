import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AcessoPrincipalComponent } from './pages/acesso-principal/acesso-principal.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'loginAdm', component: LoginComponent},
  {path:'acesso', component: AcessoPrincipalComponent },
  {path:'cardapio', component: CardapioComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
