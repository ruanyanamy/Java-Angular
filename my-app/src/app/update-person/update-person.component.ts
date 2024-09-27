import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-person',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-person.component.html',
  styleUrl: './update-person.component.css'
})
export class UpdatePersonComponent implements OnInit{

  person:Person = new Person(undefined , "" , "" , "" , "" ,{self:{href:""}});

  constructor(private route:ActivatedRoute , private HttpClient:HttpClient , private router:Router){

  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    console.log("id = "+id);
    let baseUrl = `http://localhost:8080/eBiz/api/persons/${id}`;
    this.HttpClient.get<Person>(baseUrl).subscribe({
      next:(data)=>{this.person = data},
      error:(error)=>{console.error('Fail to get Person for id = '+id, error)},
      complete:()=>{
        this.person.id = id;
        console.log(this.person);
      }
    });
  }

  onUpdatePerson(){
    let baseUrl = `http://localhost:8080/eBiz/api/persons/${this.person.id}`;
    this.HttpClient.put(baseUrl,this.person).subscribe({
      next:(data)=>{console.log("Update person successfully for id = "+this.person.id,data)},
      error:(error)=>{console.error("Fail to update peron for id = "+this.person.id,error)},
      complete:()=>{
        this.router.navigate(['list-persons']);
      }
    });
  }

}
