import { Component, OnInit } from '@angular/core';
import { headerLinks } from '../app.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appTitle = 'Atlanta Transit Helper';
  personalLinks = headerLinks;

  constructor() {
  }

  ngOnInit() {
  }

  openLink(link) {
    window.open(link, '_blank');
  }
}
