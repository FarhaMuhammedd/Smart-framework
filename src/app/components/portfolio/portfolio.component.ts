import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  imagesArr = [
    '/images/poert1.png',
    '/images/port2.png',
    '/images/port3.png'
  ];
  currentIndex: number | null = null;
}
//   // myClasses = {
//   //   'light-container': false,
//   //   'd-flex': false,
//   //   'justify-content-center': false,
//   //   'align-items-center': false
//   // }
// //   myClass = [
// //   'light-container',
// //   'd-flex',
// //   'justify-content-center',
// //   'align-items-center'
// // ]
//   imageUrl01 = '/images/poert1.png';
//   imageUrl02 = '/images/port2.png';
//   imageUrl03 = '/images/port3.png';

//   clickedImage: number = 0;

//   selectMyImage(id: number) {
//     this.clickedImage = id;
//   }

//   selectImage(): string {
//     if (this.clickedImage === 1) {
//       return this.imageUrl01;
//     } else if (this.clickedImage === 2) {
//       return this.imageUrl02;
//     } else if (this.clickedImage === 3) {
//       return this.imageUrl03;
//     } else {
//       return '';
//     }
//   }

//   closeImage() {
//     this.clickedImage = 0;
//   }


//   getDisplayStyle(): string {
//     if (this.clickedImage === 0) {

//       return 'flex';
//     } else {
//       return 'none';
//     }
//   }
// }
