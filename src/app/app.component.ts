import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name: string = 'Srikanth';
  public myImageUrl: string = 'http://picsum.photos/id/237/500/500';
  public images = [
    'http://picsum.photos/id/237/500/500',
    'http://picsum.photos/id/237/500/500',
    'http://picsum.photos/id/237/500/500',
    'http://picsum.photos/id/237/500/500',
    'http://picsum.photos/id/237/500/500'
  ];
  public money = 2000;
  public price = 23.578;
  public mango = {
    color: 'yellow',
    taste: 'sweet',
    availability: 'summer'
  };
  public currentDate = new Date();

  public buttonClicked = false;
  public fontSize = 39;

  getName(): string {
    return this.name;
  }

  changeImage(evnt: KeyboardEvent): void {
    this.myImageUrl = (evnt.target as HTMLInputElement).value;
  }

  logImage(evnt: string) {
    console.log(evnt);
  }
}