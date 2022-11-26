import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';

//Rutas
const routes: Routes=[
  {path: 'inicio', component: InicioComponent},
  {path: 'quienesSomos', component: QuienesSomosComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'testimonios', component: TestimoniosComponent},
  {path: 'contactanos', component: ContactanosComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AsideComponent,
    QuienesSomosComponent,
    InicioComponent,
    ServiciosComponent,
    TestimoniosComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
