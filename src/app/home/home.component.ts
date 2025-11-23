import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  logo: string;
  color?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedText = '';
  fullText = 'Desarrollador Full Stack';
  typingSpeed = 100;
  
  skills = [
    { icon: '⚙️', title: 'Automatización', description: 'Flujos frontend/backend optimizados' },
    { icon: '📦', title: 'Arquitectura', description: 'Microservicios y módulos escalables' },
    { icon: '🧠', title: 'Soluciones', description: 'Sistemas resilientes para equipos' },
    { icon: '🚀', title: 'Performance', description: 'Optimización y mejores prácticas' }
  ];

  // Tecnologías con carrusel (las más importantes)
  featuredTechnologies: Technology[][] = [
    // Fila 1
    [
      { name: 'Angular', logo: 'assets/images/tech/angular.svg', color: '#DD0031' },
      { name: 'React', logo: 'assets/images/tech/react.svg', color: '#61DAFB' },
      { name: 'TypeScript', logo: 'assets/images/tech/typescript.svg', color: '#3178C6' },
      { name: 'Node.js', logo: 'assets/images/tech/nodejs.svg', color: '#339933' },
      { name: 'Python', logo: 'assets/images/tech/python.svg', color: '#3776AB' },
      { name: 'Docker', logo: 'assets/images/tech/docker.svg', color: '#2496ED' }
    ],
    // Fila 2
    [
      { name: 'MySQL', logo: 'assets/images/tech/mysql.svg', color: '#4479A1' },
      { name: 'MongoDB', logo: 'assets/images/tech/mongodb.svg', color: '#47A248' },
      { name: 'AWS', logo: 'assets/images/tech/aws.svg', color: '#FF9900' },
      { name: 'Google Cloud', logo: 'assets/images/tech/googlecloud.svg', color: '#4285F4' },
      { name: 'Git', logo: 'assets/images/tech/git.svg', color: '#F05032' },
      { name: 'Linux', logo: 'assets/images/tech/linux.svg', color: '#FCC624' }
    ]
  ];

  // Tecnologías por categoría (para el grid)
  technologies = {
    frontend: [
      { name: 'Angular', logo: 'assets/images/tech/angular.svg', color: '#DD0031' },
      { name: 'React', logo: 'assets/images/tech/react.svg', color: '#61DAFB' },
      { name: 'Vue.js', logo: 'assets/images/tech/vuejs.svg', color: '#4FC08D' },
      { name: 'TypeScript', logo: 'assets/images/tech/typescript.svg', color: '#3178C6' },
      { name: 'JavaScript', logo: 'assets/images/tech/javascript.svg', color: '#F7DF1E' },
      { name: 'HTML5', logo: 'assets/images/tech/html5.svg', color: '#E34F26' },
      { name: 'CSS3', logo: 'assets/images/tech/css3.svg', color: '#1572B6' }
    ],
    backend: [
      { name: 'Node.js', logo: 'assets/images/tech/nodejs.svg', color: '#339933' },
      { name: 'Apache', logo: 'assets/images/tech/apache.svg', color: '#D22128' },
      { name: 'Nginx', logo: 'assets/images/tech/nginx.svg', color: '#009639' },
      { name: 'Python', logo: 'assets/images/tech/python.svg', color: '#3776AB' },
      { name: 'PHP', logo: 'assets/images/tech/php.svg', color: '#777BB4' },
      { name: 'Express', logo: 'assets/images/tech/express.svg', color: '#000000' },
    ],
    mobile: [
    { name: 'React Native', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg', color: '#61DAFB' },
    { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/flutter.svg', color: '#02569B' },
    { name: 'Ionic', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/ionic.svg', color: '#3880FF' },
    { name: 'Cordova', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apachecordova.svg', color: '#E8E8E8' },
    { name: 'Capacitor', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/capacitor.svg', color: '#6255A5' },
    { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/kotlin.svg', color: '#7F52FF' },
    { name: 'Android', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/android.svg', color: '#3DDC84' }
  ],
    database: [
      { name: 'MySQL', logo: 'assets/images/tech/mysql.svg', color: '#4479A1' },
      { name: 'Microsoft SQL Server', logo: 'assets/images/tech/microsoftsqlserver.svg', color: '#CC2927' },
      { name: 'SQLite', logo: 'assets/images/tech/sqlite.svg', color: '#003B57' },
      { name: 'PostgreSQL', logo: 'assets/images/tech/postgresql.svg', color: '#4169E1' },
      { name: 'MongoDB', logo: 'assets/images/tech/mongodb.svg', color: '#47A248' },
      { name: 'Firebase', logo: 'assets/images/tech/firebase.svg', color: '#FFCA28' },
      { name: 'phpMyAdmin', logo: 'assets/images/tech/phpmyadmin.svg', color: '#6C78AF' }
    ],
    tools: [
      { name: 'Docker', logo: 'assets/images/tech/docker.svg', color: '#2496ED' },
      { name: 'AWS', logo: 'assets/images/tech/aws.svg', color: '#FF9900' },
      { name: 'Google Cloud', logo: 'assets/images/tech/googlecloud.svg', color: '#4285F4' },
      { name: 'Git', logo: 'assets/images/tech/git.svg', color: '#F05032' },
      { name: 'GitHub', logo: 'assets/images/tech/github.svg', color: '#181717' },
      { name: 'Linux', logo: 'assets/images/tech/linux.svg', color: '#FCC624' },
      { name: 'VS Code', logo: 'assets/images/tech/vscode.svg', color: '#007ACC' }
    ]
  };

  stats = [
    { number: '5+', label: 'Años de experiencia' },
    { number: '20+', label: 'Proyectos completados' },
    { number: '30+', label: 'Tecnologías dominadas' }
  ];

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter(index = 0) {
    if (index < this.fullText.length) {
      this.displayedText += this.fullText.charAt(index);
      setTimeout(() => this.typeWriter(index + 1), this.typingSpeed);
    }
  }
}