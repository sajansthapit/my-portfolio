import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  mySkills = [
    {
      name: 'Java',
      logo: '../../../assets/images/skills/java.svg',
      link: 'https://www.java.com/en/',
    },
    {
      name: 'Spring Boot',
      logo: '../../../assets/images/skills/springboot.svg',
      link: 'https://spring.io/projects/spring-boot',
    },
    {
      name: 'HTML',
      logo: '../../../assets/images/skills/html.svg',
      link: 'https://html.com',
    },
    {
      name: 'CSS',
      logo: '../../../assets/images/skills/css.svg',
      link: 'https://www.w3.org/Style/CSS/Overview.en.html',
    },
    {
      name: 'JavaScript',
      logo: '../../../assets/images/skills/js.svg',
      link: 'https://www.javascript.com',
    },
    {
      name: 'TypeScript',
      logo: '../../../assets/images/skills/typescript.svg',
      link: 'https://www.typescriptlang.org',
    },
    {
      name: 'Angular',
      logo: '../../../assets/images/skills/angular.svg',
      link: 'https://angular.io',
    },
    {
      name: 'Node',
      logo: '../../../assets/images/skills/nodejs.svg',
      link: 'https://nodejs.org/en',
    },
    {
      name: 'Postgres',
      logo: '../../../assets/images/skills/postgres.svg',
      link: 'https://www.postgresql.org',
    },
    {
      name: 'MYSQL',
      logo: '../../../assets/images/skills/mysql.svg',
      link: 'https://www.mysql.com',
    },
    {
      name: 'Mongo',
      logo: '../../../assets/images/skills/mongo.svg',
      link: 'https://www.mongodb.com',
    },
    {
      name: 'Docker',
      logo: '../../../assets/images/skills/docker.svg',
      link: 'https://www.docker.com',
    },
    {
      name: 'GIT',
      logo: '../../../assets/images/skills/git.svg',
      link: 'https://git-scm.com',
    },
  ];
}
