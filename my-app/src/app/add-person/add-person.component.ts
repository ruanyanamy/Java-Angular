import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from '../person';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css'
})
export class AddPersonComponent implements OnInit{

  constructor(private http:HttpClient , private router:Router){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onAddPerson(data:any){
    console.log(data.firstname);
    console.log(data.lastname);
    console.log(data.street);
    console.log(data.city);
    let person = new Person(undefined , data.firstname , data.lastname , data.street , data.city , {self:{href:""}});
    let baseUrl = "http://localhost:8080/eBiz/api/persons";
    this.http.post(baseUrl , person).subscribe({
      next:(data) => {console.log("Person Created Successfully" , data)},
      error:(error) => {console.log("Person Created Failed due to ",error)},
      complete:() => {
        console.log("Process complete ..");
        this.router.navigate(['list-persons']);
      }
    })
  }

}
