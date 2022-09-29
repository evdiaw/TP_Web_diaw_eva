import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() { }
  // @Input() prenom : String = ""; 
  // @Input() nom : String = ""; 
  // @Input() civilite : String = ""; 
  // @Input() adresse : String = ""; 
  // @Input() code_postal : Number = 0; 
  // @Input() ville : String = ""; 
  // @Input() telephone : Number = 0; 
  // @Input() email : String = ""; 
  // @Input() login : String = ""; 
  @Output() change: EventEmitter<String> = new EventEmitter<String>();

  @Input() client: Object = {};

  // prenom: "",
  // nom: "",
  // civilite: "",
  // adresse: "",
  // code_postal: 0,
  // ville: "",
  // telephone: 0,
  // email: "",
  // login: "",
  // password: "",
  // password_conf: "",

  bonjour: String= "";
  recap_adresse: String= "";
  recap_telephone: String= "";


  ngOnInit(): void {
  }

  clic () {
    //this.change.emit( 'Bonjour ' + this.client.prenom);
  }

}
