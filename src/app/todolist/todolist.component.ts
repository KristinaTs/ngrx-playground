import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

interface Todo {
  name: string;
  lastname: string;
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodolistComponent implements OnInit {
  @Input() todo: Todo;
  @Output() emitCh = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  change() {
    this.emitCh.emit();
  }

  changeInner() {
    this.todo.name = 'INNER';
  }
}
