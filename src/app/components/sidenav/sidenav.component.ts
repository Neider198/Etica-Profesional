import { Component, OnInit } from '@angular/core';
// import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  menus:any;
  constructor( ) { }

  ngOnInit(): void {
   
  }

}
