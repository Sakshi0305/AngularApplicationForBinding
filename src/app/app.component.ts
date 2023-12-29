import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment7-4';
  public Name: string ='';


  public upperButton(){
    this.Name='MARVELLOUS INFOSYSTEM';

  }

  public lowerButton(){
    this.Name='marvellous infosystem';
  }
}
