import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'dispensar-billetes',
  standalone: true,
  imports: [FormsModule,
    CommonModule],
  templateUrl: './dispensar-billetes.component.html',
  styleUrl: './dispensar-billetes.component.css'
})
export class DispensarBilletesComponent {
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
