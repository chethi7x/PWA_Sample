import {Component, OnInit,LOCALE_ID, Inject} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  actualVersion: string;
  language: string;
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'th', label: 'Thai' },
    { code: 'id', label: 'Bahasa' }
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string) { }

  ngOnInit() {
    this.language = "EN";
  }

  changeLanguage(language: string){
    alert("Hi - Selected Language is - " + language);
  }
}
