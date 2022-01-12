import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarefa } from '../tarefa.model';
import { TarefasService } from '../shared/tarefas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor( 
    private tarefasServices: TarefasService, 
    private router: Router ) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void {
    if(this.formTarefa.valid){
      this.tarefasServices.cadastrar(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }

}
