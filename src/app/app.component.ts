import { Component } from '@angular/core';
import { Exercicio } from '../shared/model/exercicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Ficha de Treino';
  exercicio: Exercicio = new Exercicio();
  exercicios: Array<Exercicio>;

  constructor() {
    this.exercicios = new Array<Exercicio>();
  }

  inserirExercicio(): void {
    this.exercicios.push(this.exercicio);
    this.exercicio = new Exercicio();
  }
}
