import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Updated templateUrl path to match existing file
  standalone: true, // Asegúrate de que sea standalone
  imports: [RouterOutlet,CommonModule,RouterModule], // Importa RouterModule para enrutamiento
})
export class AppComponent {
  //title = 'prueba';
}