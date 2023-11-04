import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { MispacientesComponent } from './components/mispacientes/mispacientes.component';
import { SubirrecetaComponent } from './components/subirreceta/subirreceta.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  {
    path: 'main',
    component: MainComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/register']))
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recuperar-password', component: RecuperarPasswordComponent},
  { path: 'mispacientes', component: MispacientesComponent},
  { path: 'subirreceta', component: SubirrecetaComponent},
  { path: '**', redirectTo: 'login'}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
