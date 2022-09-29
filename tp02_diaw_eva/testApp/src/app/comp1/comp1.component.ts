import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor() { }

  prenom: String = "";
  nom: String = "";
  civilite: String = "";
  adresse: String = ""
  code_postal: Number = 0;
  ville: String = "";
  telephone: Number = 0;
  email: String = ""
  login: String = "";
  password: String = "";
  password_conf: String = "";
  bonjour : String = "";
  //client: Object = {};
  

  ngOnInit(): void {
  }

  clic(): void {
    console.log("clic activé");
  }

  clicChange (val : String) {

    this.bonjour = val;
  }

}
