import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list-persons',
  standalone: true,
  imports: [CommonModule , RouterOutlet , RouterLink , RouterLinkActive],
  templateUrl: './list-persons.component.html',
  styleUrl: './list-persons.component.css'
})
export class ListPersonsComponent implements OnInit{

  persons : Person[] = [];
  constructor(private HttpClient:HttpClient){}

  ngOnInit(): void {
    let baseUrl = "http://localhost:8080/eBiz/api/persons";
    this.HttpClient.get<PersonResponse>(baseUrl)
      .subscribe({
        next:(data) => {this.persons = data._embedded.persons} , 
        error:(error) => {console.error("Loading persons data error due to ",error)} ,
        complete:() => {
          this.persons.forEach(person => {
            let href = person._links.self.href;
            let index = href.lastIndexOf("/");
            person.id = href.substring(index+1);
          })
        }
      })
  }

}

interface PersonResponse{
  _embedded : {
    persons : Person[] ,
    _links : {
      self : {href:string},
      profile : {href:string}
    }
  }
}
