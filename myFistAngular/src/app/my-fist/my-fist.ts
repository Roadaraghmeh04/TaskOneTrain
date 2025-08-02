import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-my-fist',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './my-fist.html'
})
export class MyFist {
  firstName: string = 'Roa';
  lastName: string = 'Daraghmeh';
  children: string[] = [];
  newChild: string = '';

  addChild() {
    if (this.newChild.trim()) {
      this.children.push(this.newChild.trim());
      this.newChild = '';
    }
  }

  deleteChild(index: number) {
    this.children.splice(index, 1);
  }
editChild(index: number) {
    const newName = prompt('Edit child name:', this.children[index]);
    if (newName && newName.trim()) {
      this.children[index] = newName.trim();
    }
  }
}
