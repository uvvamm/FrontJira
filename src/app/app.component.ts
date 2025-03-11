import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FrontJira';

  ngOnInit() {
    initFlowbite();
  }
}
