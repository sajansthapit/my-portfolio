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
      year: '2021',
      company: 'Bitskraft Pvt Limited, Kathmandu',
      details: [
        'Successfully implemented a video platform for baking system using microservice (spring boot, NodeJS) and web-sockets',
        'Conducted code reviews, provided constructive feedback, and mentored junior developers',
        'Collaboration with other teams for seamless integration of new technologies',
        'Refactored legacy codebase, improve code readability and maintainability',
        'Integrated third-party APIs seamlessly, enabling new capabilities and enhancing the overall user experience',
      ],
    },
    {
      position: 'Java Developer',
      year: '2019',
      company: 'Harati IT Services, Lalitpur',
      details: [
        'Design and implementation of a online payment gateway system using Grails Framework',
        'Implemented features from scratch, meeting all requirements and exceeding expectations in terms of functionality and performance',
        'Implemented coding standards and best practices, resulting in cleaner, more maintainable code and improved productivity',
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
      year: '2018',
      company: 'ITGLANCE, Kathmandu',
      details: [
        'Worked on the both backend and frontend for a restaurant management system',
        'Collaborated with other developers to identify and alleviate a number of bugs and errors in the software',
        'Completed assigned tasks on scheduled time, contributing to the successful delivery of projects',
      ],
    },
  ];
}
