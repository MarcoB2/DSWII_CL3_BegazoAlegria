import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  precioPorArticulo: number;
  cantidad: number;
  precioTotal: number;

  calcularPrecioTotal() {
    if (this.cantidad > 20) {
      this.precioTotal = this.cantidad * this.precioPorArticulo * 0.9;
    } else if (this.cantidad > 10) {
      this.precioTotal = this.cantidad * this.precioPorArticulo * 0.95;
    } else {
      this.precioTotal = this.cantidad * this.precioPorArticulo;
    }
  }
}
