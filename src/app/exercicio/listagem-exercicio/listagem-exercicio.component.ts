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
}
