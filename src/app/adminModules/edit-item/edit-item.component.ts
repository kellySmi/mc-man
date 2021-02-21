import { Component, Input, OnInit, Output } from '@angular/core';
import {  FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { EventEmitter } from 'keyv';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  @Input() item:  any;
  @Output() modifiedItem: EventEmitter = new EventEmitter();
  itemForm = this.fb.group({
    name: [''],
    uuid: ['']
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.itemForm.setValue(this.item);
  }
  onSubmit(){

  }
}
