import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [
    { 
      nom : "Desaegher", 
      prenom : "Thomas", 
      age : 12, 
      adresse : {
        num : 110, 
        rue : "de la Pinte", 
        ville : "Lille"
      },
      chats : [
        { nom : "Milo", couleur : "noir", age : 5 },
        { nom : "Lylas", couleur : "noir", age : 6 }
      ]
    },
    { 
      nom : "Obama", 
      prenom : "Gertrude", 
      age : 97, 
      adresse : {
        num : 59, 
        rue : "de la vieille", 
        ville : "Mérignac"
      },
      chats : [
        { nom : "Coucou", couleur : "noir", age : 5 },
        { nom : "Pôle", couleur : "noir", age : 6 },
        { nom : "Emploi", couleur : "noir", age : 5 },
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  ajouterUser = (user) => {
    this.users.push(user);
  }

}
