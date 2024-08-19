import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroExercicioComponent } from './cadastro-exercicio/cadastro-exercicio.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ListagemExercicioComponent } from './listagem-exercicio/listagem-exercicio.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [CadastroExercicioComponent, ListagemExercicioComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [CadastroExercicioComponent, ListagemExercicioComponent],
})
export class ExercicioModule {}
