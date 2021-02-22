import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  meetings=[
    {name:'Reunion 1', subname: 'Revision de avances', date: 'Scheduled at: 18/08/2020 - 22:00'},
    {name:'Reunion 2', subname: 'Revision de avances', date: 'Scheduled at: 18/08/2020 - 22:00'},
    {name:'Reunion 3', subname: 'Revision de avances', date: 'Scheduled at: 18/08/2020 - 22:00'},
    {name:'Reunion 4', subname: 'Revision de avances', date: 'Scheduled at: 18/08/2020 - 22:00'},
    {name:'Reunion 5', subname: 'Revision de avances', date: 'Scheduled at: 18/08/2020 - 22:00'},
    {name:'Reunion 6', subname: 'Revision de avances', date: 'Scheduled at: 18/08/2020 - 22:00'},
    {name:'Reunion 7', subname: 'Revision de avances', date: 'Scheduled at: 18/08/2020 - 22:00'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
