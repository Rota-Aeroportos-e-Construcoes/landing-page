import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './Components/navbar/navbar.component';
import {HomeComponent} from './Pages/home/home.component';
import {AboutComponent} from './Pages/about/about.component';
import {OurVisionComponent} from './Pages/our-vision/our-vision.component';
import {RotaLocationComponent} from './Pages/rota-location/rota-location.component';
import {RotaServiceComponent} from './Pages/rota-service/rota-service.component';
import {ProjectsComponent} from './Pages/projects/projects.component';
import {FooterComponent} from './Components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    OurVisionComponent,
    RotaLocationComponent,
    RotaServiceComponent,
    ProjectsComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'page-rota';
}
