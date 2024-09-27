import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AdvertiseComponent } from "./advertise/advertise.component";
import { NewsComponent } from "./news/news.component";
import { InterestingComponent } from "./interesting/interesting.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdvertiseComponent, NewsComponent, InterestingComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My First Angular';
}
