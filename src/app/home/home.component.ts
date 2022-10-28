import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  constructor() { }

  @ViewChild('gist') gist: ElementRef | undefined; 

  async ngAfterViewInit(): Promise<void> {
    if (!this.gist) return
  }
}
