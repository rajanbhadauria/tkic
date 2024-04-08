import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  images = ['assets/slider/1.jpeg', 'assets/slider/2.jpeg', 'assets/slider/3.jpeg', 'assets/slider/4.jpeg', 'assets/slider/5.jpeg', 'assets/slider/6.jpeg', 'assets/slider/7.jpeg', 'assets/slider/8.jpeg'];

  ngOnInit(): void {
  }

}
