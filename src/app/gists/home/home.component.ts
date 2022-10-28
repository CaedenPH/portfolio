import { Component } from '@angular/core';
import { GistService } from 'src/app/gist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class GistHomeComponent {
  constructor(public gistService: GistService) { }

}
