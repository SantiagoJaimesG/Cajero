import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cajero';
  montoSolicitado: number;
  denominaciones: Array<number>;
  billetes: Array<number>;

  constructor(){
    this.montoSolicitado = 0;
    this.denominaciones = [10000, 20000, 50000, 100000];
    this.billetes = [0, 0, 0, 0];
  }

  dispensarDinero() {
    let monto = this.montoSolicitado;
    let contador = 0;

    while (monto > 0) {
      let entra = 0;

      for (let i = contador; i < this.denominaciones.length; i++) {
        if (monto >= this.denominaciones[i]) {
          this.billetes[i]++;
          monto -= this.denominaciones[i];
          entra = 1;
        }
      }

      if (entra === 0 && contador === this.denominaciones.length) {
        contador = 0;
      } else {
        contador++;
      }
    }
  }
}
