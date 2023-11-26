import { Component } from '@angular/core';

@Component({
  selector: 'app-salario-obrero',
  templateUrl: './salario-obrero.component.html',
  styleUrls: ['./salario-obrero.component.css']
})
export class SalarioObreroComponent {
  horasTrabajadas: number;
  salarioSemanal: number;

  calcularSalario() {
    const salarioBase = 16;
    const horasNormales = 40;

    if (this.horasTrabajadas <= horasNormales) {
      this.salarioSemanal = this.horasTrabajadas * salarioBase;
    } else {
      const horasExtras = this.horasTrabajadas - horasNormales;
      const salarioHorasExtras = 20;
      this.salarioSemanal = horasNormales * salarioBase + horasExtras * salarioHorasExtras;
    }
  }
}
