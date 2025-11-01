import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule], // Importa RouterModule para standalone
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Corrige styleUrl a styleUrls
  standalone: true,
})
export class HomeComponent {}