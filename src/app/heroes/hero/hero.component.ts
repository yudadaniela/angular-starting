import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string='Iroman';
  public age:number=45;

  get capitalizedName():string{  //los get se usan como propiedades, por eso en la invocacion se hace sin parentesis
    return this.name.toLowerCase();
  }
  getHeroDescription():string{
    return `${this.name}-${this.age}`;
  }
  changeName():void{
    this.name="Spiderman"
  }
  changeAge():void{
    this.age= 20
  }
  reset():void{
   this.name='iroman'
   this.age=45;
  }
}
