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

  client: Object = {
    prenom: this.prenom,
    nom: this.nom,
    civilite: this.civilite,
    adresse: this.adresse,
    code_postal: this.code_postal,
    ville: this.ville,
    telephone: this.telephone,
    email: this.email,
    login: this.login,
    password: this.password,
    password_conf: this.password_conf,
  }

  ngOnInit(): void {
  }

  clic(): void {
    console.log("clic activé");
  }

  clicChange (val : String) {
    //this.bonjour = val;
  }

}
