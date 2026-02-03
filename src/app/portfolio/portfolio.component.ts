import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectContributor {
  name: string;
  githubUrl: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  siteUrl?: string;
  repoUrl?: string;
  status: 'Listo' | 'En progreso' | 'En mantenimiento';
  category?: string;
  contributors: ProjectContributor[];
  previewLabel?: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit, OnDestroy {
  displayedTitle = '';
  fullTitle = 'Proyectos en produccion y en proceso';
  titleTypingSpeed = 60;
  private titleTimeoutId?: ReturnType<typeof setTimeout>;

  projects: Project[] = [
    {
      title: 'ADEMY - Sistema de Administración Academica',
      description: 'Plataforma para gestion de matriculas, notas y reportes con arquitectura modular.',
      technologies: ['ReactJS', 'Node.js', 'Docker', 'MySQL'],
      siteUrl: 'https://sg-academico.vercel.app/',
      repoUrl: 'https://github.com/KevinTomala/sg_academico',
      status: 'Listo',
      category: 'Web App',
      contributors: [
        { name: 'Kevin Tomala', githubUrl: 'https://github.com/kevintomala' },
        { name: 'SamVp29', githubUrl: 'https://github.com/SamVp29' }
      ]
    },
    {
      title: 'Generador QR',
      description: 'Herramienta web para crear codigos QR personalizables y listos para descargar.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      siteUrl: 'https://kevintomala.github.io/qr-generate',
      repoUrl: 'https://github.com/KevinTomala/qr-generate',
      status: 'Listo',
      category: 'Web App',
      contributors: [
        { name: 'Kevin Tomala', githubUrl: 'https://github.com/kevintomala' }
      ]
    },
    {
      title: 'Barbershop El Chino',
      description: 'Sitio web para barberia con enfoque en reservas y presencia local.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      siteUrl: 'https://barbershopelchino.github.io/website/',
      repoUrl: 'https://github.com/BarberShopElChino/website',
      status: 'Listo',
      category: 'Landing',
      contributors: [
        { name: 'Kevin Tomala', githubUrl: 'https://github.com/kevintomala' },
        { name: 'BarberShopElChino', githubUrl: 'https://github.com/BarberShopElChino' }
      ]
    },
    {
      title: 'LLESDental',
      description: 'Mantenimiento y mejoras de sitio clinico con acceso privado.',
      technologies: ['Angular', 'Node.js', 'MySQL'],
      siteUrl: 'https://llesdental.cendcap.com/login',
      repoUrl: 'https://github.com/cendcap/llesdental',
      status: 'En mantenimiento',
      category: 'Mantenimiento',
      contributors: [
        { name: 'Kevin Tomala', githubUrl: 'https://github.com/kevintomala' },
        { name: 'cendcap', githubUrl: 'https://github.com/cendcap' }
      ]
    },
    {
      title: 'CENDCAP',
      description: 'Sitio institucional con actualizaciones de contenido y optimizacion.',
      technologies: ['WordPress', 'HTML', 'CSS'],
      siteUrl: 'https://cendcap.com/',
      status: 'Listo',
      category: 'Web',
      contributors: [
        { name: 'Kevin Tomala', githubUrl: 'https://github.com/kevintomala' }
      ]
    },
    {
      title: 'Aplicacion Movil (sin publicar)',
      description: 'Aplicacion movil construida para gestión de reservaciones. Aun no publicada.',
      technologies: ['Ionic', 'Angular', 'Firebase'],
      status: 'En progreso',
      category: 'Mobile',
      previewLabel: 'App movil sin publicacion',
      contributors: [
        { name: 'Kevin Tomala', githubUrl: 'https://github.com/kevintomala' }
      ]
    },
    {
      title: 'Alpha Technologies',
      description: 'Pagina corporativa en planificacion y definicion de marca.',
      technologies: ['Branding', 'UX', 'Web'],
      status: 'En progreso',
      category: 'Web',
      previewLabel: 'Sitio en planificacion',
      contributors: [
        { name: 'Kevin Tomala', githubUrl: 'https://github.com/kevintomala' }
      ]
    },
  ];

  ngOnInit() {
    this.typeTitle();
  }

  ngOnDestroy() {
    if (this.titleTimeoutId) {
      clearTimeout(this.titleTimeoutId);
    }
  }

  getDomain(url?: string): string {
    if (!url) return 'Sin dominio';

    try {
      const domain = new URL(url).hostname;
      return domain.replace(/^www\./, '');
    } catch {
      return url;
    }
  }

  getPreviewImage(url?: string): string | null {
    if (!url) return null;

    const encodedUrl = encodeURIComponent(url);
    return `https://s0.wordpress.com/mshots/v1/${encodedUrl}?w=1200`;
  }

  getRepoLabel(url?: string): string {
    if (!url) return 'Privado';

    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.hostname === 'github.com') {
        return parsedUrl.pathname.replace(/^\//, '');
      }
      return url;
    } catch {
      return url;
    }
  }

  trackByTitle(index: number, project: Project): string {
    return project.title;
  }

  private typeTitle(index = 0) {
    if (index < this.fullTitle.length) {
      this.displayedTitle += this.fullTitle.charAt(index);
      this.titleTimeoutId = setTimeout(() => this.typeTitle(index + 1), this.titleTypingSpeed);
    }
  }
}
