import { NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFist } from "./my-fist/my-fist";

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, NgIf, NgFor, MyFist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myFistAngular');
  mytitle: string = 'angular20';
  counter: number = 0;
  isvisible: boolean = true;
  isSelected: boolean = false;
  birthDate: Date = new Date(2000, 0, 1);
  cars: string[] = ['BMW', 'Mercedes', 'Audi', 'Toyota', 'Honda'];
  isNameVisible: boolean = true;
  incrementCounter() {
    this.counter++;
  }

  toggleVisibility() {
    this.isvisible = !this.isvisible;
  }

  toggleSelection() {
    this.isSelected = !this.isSelected;
  }

  addnewCar(car: string) {
    this.cars.push(car || 'newcars' + (this.cars.length + 1));
  }
  switchContent(){
    this.isNameVisible = !this.isNameVisible;
  }
}
