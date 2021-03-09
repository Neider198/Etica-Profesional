import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { EticaPublicoComponent } from './components/etica-publico/etica-publico.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ForosParticipativosComponent } from './components/foros-participativos/foros-participativos.component';
import { EticaProfesionalComponent } from './components/etica-profesional/etica-profesional.component';
import { EticaInformaticaComponent } from './components/etica-informatica/etica-informatica.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    EticaPublicoComponent,
    InicioComponent,
    ForosParticipativosComponent,
    EticaProfesionalComponent,
    EticaInformaticaComponent,
    ContenidoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
