import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  myExperiences = [
    {
      position: 'Sr.Java FullStack Developer',
      year: '2021-Present',
      company: 'Bitskraft Pvt Limited, Kathmandu',
      details: [
        'Working on Spring Boot Framework (Microservies)',
        'Hands on with Video Platform (Web RTC)',
        'Implementation of sockets',
      ],
    },
    {
      position: 'Java FullStack Developer',
      year: '2019-2021',
      company: 'Harati IT Services, Lalitpur',
      details: [
        'Worked on Groovy on Grails Framework',
        'Implementation of third-party APIs (SOAP & REST)',
        'Implemented APIs on JavaScript using AJAX',
      ],
    },
    {
      position: 'Instructor',
      year: '2019',
      company: 'NIIT, Kathmandu',
      details: [
        'Taught courses in Java, C, JavaScript to all-ages',
        'Created guides and course materials to reiterate lecture information and help students',
      ],
    },
    {
      position: 'Jr.Java Developer',
      year: '2018-2019',
      company: 'ITGLANCE, Kathmandu',
      details: [
        'Collaborated with other developers to identify and alleviate a number of bugs and errors in the software',
        'Worked with Angular Framework',
      ],
    },
  ];
}
