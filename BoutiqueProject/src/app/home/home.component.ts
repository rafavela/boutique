import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // image = '../../assets/image1.jpg';

  price = 1000;
  get imagePath() {
    return 'assets/image1.jpg';
  }
}
