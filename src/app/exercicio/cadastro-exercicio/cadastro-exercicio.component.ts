import { Component } from '@angular/core';
import { Exercicio } from '../../shared/model/exercicio';
import { EXERCICIOS } from '../../shared/model/EXERCICIOS';

@Component({
  selector: 'app-cadastro-exercicio',
  templateUrl: './cadastro-exercicio.component.html',
  styleUrl: './cadastro-exercicio.component.scss',
})
export class CadastroExercicioComponent {
  exercicio: Exercicio;
  exercicios: Exercicio[];

  constructor() {
    this.exercicio = new Exercicio();
    this.exercicios = EXERCICIOS;
  }

  inserirExercicio(): void {
    this.exercicios.push(this.exercicio);
    this.exercicio = new Exercicio();
  }
}
