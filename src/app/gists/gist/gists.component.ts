import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gists',
  templateUrl: './gists.component.html',
  styleUrls: ['./gists.component.css']
})
export class GistsComponent implements OnInit {
  public url: string = "https://gist.githubusercontent.com/CaedenPH/715acf7dfb3458659edb49db034a2145/raw/11dbd8c93cc686e92ad42a7940a6a1182cf111af/README.md";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.route.url)
    // console.log("E")
    // this.url = this.route.queryParamMap;
  }
}
