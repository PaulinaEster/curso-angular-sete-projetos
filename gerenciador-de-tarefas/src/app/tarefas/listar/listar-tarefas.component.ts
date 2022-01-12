import { Component, OnInit } from '@angular/core';

import { TarefasService } from '../shared/tarefas.service';
import { Tarefa } from '../tarefa.model';


@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {
  tarefas: Tarefa[];

  constructor(private tarefaService: TarefasService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa:Tarefa): void {
    $event.preventDefault();
    if(confirm(`Deseja remover a tarefa ${tarefa.nome}?`)){
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    if(confirm(`Deseja alterar o status da tarefa ${tarefa.nome}?`)){
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }
}
