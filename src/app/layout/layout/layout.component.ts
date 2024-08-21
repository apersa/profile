import {Component} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {HomeComponent} from "../../components/home/home.component";
import {AboutComponent} from "../../components/about/about.component";
import {FooterComponent} from "../footer/footer.component";
import {ContactComponent} from "../../components/contact/contact.component";
import {SkillsComponent} from "../../components/skills/skills.component";
import {ServicesComponent} from "../../components/services/services.component";
import {ProjectsComponent} from "../../components/projects/projects.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    SkillsComponent,
    ServicesComponent,
    ProjectsComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
