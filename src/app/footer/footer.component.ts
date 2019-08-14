import { Component } from "@angular/core";
import { footerLinks } from "../app.constants";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {
  personalLinks = footerLinks;
  currentYear = new Date().getFullYear();

  constructor() { }

  openLink(link) {
    window.open(link, '_blank');
  }
}
