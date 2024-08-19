import { Exercicio } from './../../shared/model/exercicio';
import { Component } from '@angular/core';
import { EXERCICIOS } from '../../shared/model/EXERCICIOS';

@Component({
  selector: 'app-listagem-exercicio',
  templateUrl: './listagem-exercicio.component.html',
  styleUrl: './listagem-exercicio.component.scss',
})
export class ListagemExercicioComponent {
  exercicios = EXERCICIOS;

  editar(exercicio: Exercicio) {
    exercicio.nome += 'Alterado';
  }

  remover(exercicio: Exercicio) {
    const indxExercicioARemover = this.exercicios.findIndex(
      (e) => e.nome === exercicio.nome
    );
    if (indxExercicioARemover > -1) {
      this.exercicios.splice(indxExercicioARemover, 1);
    }
  }
}
