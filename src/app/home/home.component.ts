import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { AboutComponent } from '../sections/about/about.component';
import { SkillsComponent } from '../sections/skills/skills.component';
import { ExperienceComponent } from '../sections/experience/experience.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavComponent, AboutComponent, SkillsComponent, ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
