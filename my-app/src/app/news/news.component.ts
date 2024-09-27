import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqrtPipe } from '../app.sqrt';
import { MyDateService } from '../my-date.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule,SqrtPipe] ,
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit{

  constructor(private myDateService:MyDateService){ }

  ngOnInit(): void {     //初始化的工作會寫在ngOnInit
    this.todaydate = this.myDateService.showTodayDate();
  }
  title = "最新消息";
  months = ["January" , "Feburary" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
  isavaliable = false;
  monthselected = "";
  todaydate:any;

  myClickFunction(event:any){
    //alert("Button is clicked..");
    //console.log(event);
    if (this.isavaliable){
      this.isavaliable = false;
    }else{
      this.isavaliable = true;
    }
  }

  changemonths(event:any){
    this.monthselected = event.target.value
    console.log(this.monthselected);
  }
}
