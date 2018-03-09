import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  ngOnInit(): void 
  {
    console.log('OnInit AppComponent');
  }

  pageTitle: string = 'Product Management';
}
