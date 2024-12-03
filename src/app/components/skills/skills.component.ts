import {Component} from '@angular/core';
import {MatChip, MatChipSet} from "@angular/material/chips";

@Component({
    selector: 'app-skills',
    imports: [MatChip, MatChipSet],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: string[] = ["HTML", "CSS", "JavaScript", "Angular", "Bootstrap", "Angular Material", "Java", "C", "C++",
    "Spring", "MySQL", "Wordpress", "Github", "Machine Learning", "Deep Learning", "Generative AI", "LLMs"];
}
