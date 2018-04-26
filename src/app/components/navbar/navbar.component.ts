import { Component, OnInit } from '@angular/core';
import {NavbarService} from './../../services/navbar/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private navService: NavbarService) { }

  ngOnInit() {
    
  }

}
