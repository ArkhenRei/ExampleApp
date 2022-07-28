import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Example App';
  myDate = Date.now();

  public ngOnInit(): void {
    setInterval(() => {
      this.myDate = Date.now();
    }, 1000);
  }


  constructor(private datePipe: DatePipe) {}











}
