import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Sistema Académico Automatizado',
      description: 'Plataforma para gestión de matrículas, notas y reportes con arquitectura modular.',
      technologies: ['Angular', 'Node.js', 'Docker', 'PowerShell'],
      link: 'https://github.com/kevintomala/academic-system',
    },
    {
      title: 'Alpha Technologies',
      description: 'Proyecto personal para soluciones escalables y automatización de flujos.',
      technologies: ['Microservicios', 'Git Submodules', 'Linux/Windows'],
      link: 'https://github.com/kevintomala/alpha-technologies',
    },
  ];
}