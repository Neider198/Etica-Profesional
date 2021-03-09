import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EticaInformaticaComponent } from './components/etica-informatica/etica-informatica.component';
import { EticaProfesionalComponent } from './components/etica-profesional/etica-profesional.component';
import { EticaPublicoComponent } from './components/etica-publico/etica-publico.component';
import { ForosParticipativosComponent } from './components/foros-participativos/foros-participativos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContenidoComponent } from './components/contenido/contenido.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path:'inicio',
    component: InicioComponent 
  },
  {
    path:'contenido',
    component: ContenidoComponent
  },
  {
    path:'etica-de-lo-publico',
    component: EticaPublicoComponent 
  },
  {
    path:'etica-profesional',
    component: EticaProfesionalComponent
  },
  {
    path:'etica-informatica',
    component: EticaInformaticaComponent
  },
  {
    path:'foros-participativos',
    component: ForosParticipativosComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
