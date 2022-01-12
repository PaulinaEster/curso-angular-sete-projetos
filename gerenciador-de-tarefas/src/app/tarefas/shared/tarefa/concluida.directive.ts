import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appConcluida]'
})
export class ConcluidaDirective implements OnInit{
  @Input() tarefaConcluida: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit(){
    if(this.tarefaConcluida){
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }
}
