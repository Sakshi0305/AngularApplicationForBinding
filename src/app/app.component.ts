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
  title = 'Assignment7-2';
  public Name: string ="Educating For Better tomorrow";

  displayText: string = 'Marvellous Infosystems';

  toggleText() {
    this.displayText = (this.displayText === 'Marvellous Infosystems') ? 'Educating for Better tomorrow' : 'Marvellous Infosystems';
  }

  }

/*
  public Fun()
   {
        return "Marvellous Inforsystems";
   }

*/
