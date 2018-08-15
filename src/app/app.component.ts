import { Component, OnInit } from '@angular/core';

function remove(item: string, list: string[]) {
  if (list.indexOf(item) !== -1) {
    list.splice(list.indexOf(item), 1);
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
   this.list1.sort();
  }
 
  list1 = [
    'Mango',
    'Apple',
    'Orange',
    'Litchi',
    'Grapes',
    'Pear',
    'Banana'
  ];

  list2 = [
   
  ];

  currentBox?: string;

  move(box: string, toList: string[]): void {
    remove(box, this.list1);
    remove(box, this.list2);

    toList.push(box);
    toList.sort();
  }


  
}
