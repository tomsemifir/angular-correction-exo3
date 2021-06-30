import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm : FormGroup;

  @Output() inscription = new EventEmitter<any>();

  constructor(private fb : FormBuilder) { 
    this.userForm = this.fb.group({
      nom : "",
      prenom : "",
      age : 0,
      adresse : this.fb.group({
        num : 0,
        rue : "",
        ville : ""
      }),
      chats : this.fb.array([
        this.fb.group({
          nom : "",
          couleur : "",
          age : 0
        })
      ])
    })
  }

  ngOnInit(): void {
  }

  get chats() {
    return this.userForm.get('chats') as FormArray
  }

  ajouterChat = () => {
    this.chats.push(this.fb.group({
      nom : "",
      couleur : "",
      age : 0
    }))
  }

  supprimerChat = () => {
    this.userForm.value.chats.splice(this.chats.length - 1, 1)
    this.chats.controls.splice(this.chats.length - 1, 1)
  }

  inscriptionUser = () => {
    this.inscription.emit(this.userForm.value);
  }

}
