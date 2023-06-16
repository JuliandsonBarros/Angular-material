import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { fromEvent, map } from 'rxjs';

export const SCROLL_CONTAINER = "mat-sidenav-content";
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isSmallScreen = false;//referencia para tele menor que 800px
  public popText = false;
  public applyShadow = false;

  title = 'Angular-Material';
  constructor(private breakpointObserver: BreakpointObserver){
  }

  ngOnInit(): void {
     const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];

     fromEvent(content, 'scroll')
     .pipe(
      map(() => content.scrollTop)//resultado do scrollTop é repassado para o next()
     )
     .subscribe({
      next: (value) => this.determineHeader(value)
     })
  }
  determineHeader(scrollTop: number){ //detemina valores de scroll da toolbar limites para transição My APP e sombra
    console.log(scrollTop)
    this.popText = scrollTop >= TEXT_LIMIT;
    this.applyShadow = scrollTop >= SHADOW_LIMIT;
  }


  ngAfterContentInit(): void {//Cria o observer metodo analisa o tamanho da tela para fechar ou abrir sidnav
    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe({
      next: (res) => {
        if(res.matches){
          this.isSmallScreen = true;
        }else{
          this.isSmallScreen = false;
        }
      }
    })
  }

  get sidenavMode(){ //metodo que recebe referencia do tamanho da tela e retorna autorização para abrir e fechar 
    return this.isSmallScreen ? 'over' : 'side';
  }
}
