import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  personalLinks = [
    { icon: 'fa-linkedin', link: 'https://www.linkedin.com/in/erick-boyzo-258023a1' },
    { icon: 'fa-github', link: 'https://github.com/erickboyzo' },
    { icon: 'fa-code', link: 'https://bitbucket.org/erickby/marta_transit_buddy/src/master/' }
  ];

  currentYear = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

    openLink(link) {
    window.open(link, '_blank');
  }

}
