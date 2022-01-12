import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefasService } from '../shared/tarefas.service';
import { Tarefa } from '../tarefa.model';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {
  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor( private tarefasServices: TarefasService, 
    private route: Router,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.router.snapshot.params['id'];
    this.tarefa = this.tarefasServices.buscarPorID(id);
  }

  atualizar(): void {
    if(this.formTarefa.form.valid){
      this.tarefasServices.atualizar(this.tarefa);
      this.route.navigate(['/tarefas']);
    }
  }
}
