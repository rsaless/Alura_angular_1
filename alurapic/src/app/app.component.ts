import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: "https://images.unsplash.com/photo-1519575706483-221027bfbb31?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c6d163313b444a49f7ec591b920d252&w=1000&q=80",
      description: 'Dude 1'
    },
    {
      url: "https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2d1657bf457f194ab14b488008077f52&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
      description: 'Dude 2'
    }
  ];
}
