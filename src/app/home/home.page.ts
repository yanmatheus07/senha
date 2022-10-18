import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  senha: string = "";
  forca: string[] = ["...", "FRACA", "MÉDIA", "FORTE", "MUITO FORTE"];
  nivel: number = 0;

  constructor() {}

  verificar(){
    this.nivel = 0;
    if(this.senha.length >= 8){
      this.nivel++;
    }
    if(/[a-z]/.test(this.senha)){
      this.nivel++;
    }
    if(/[A-Z]/.test(this.senha)){
      this.nivel++;
    }
    if(/[0-9]/.test(this.senha)){
      this.nivel++;
    }
    //this.classificar()
  }
}
