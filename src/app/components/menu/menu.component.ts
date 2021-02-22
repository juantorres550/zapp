import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  direccion = [
      {
        name: 'Meetings',
        path:'/asesor/meetings',
        icon:'video_call'
      },
      {
        name: 'Calls',
        path: '/asesor/calls',
        icon: 'event_note'
      }
    ];
    
  constructor() { }

  ngOnInit(): void {
  }

}
