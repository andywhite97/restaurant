import { Component } from '@angular/core';
import { NavigationStart, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'port02';

  constructor(
    router: Router
  ) {
    router.events.subscribe(e => {
      if(e instanceof NavigationStart) {
        this.onActivate()
      }
      if(e instanceof NavigationEnd) {
        this.onActivate()
      }
    })
  }

  onActivate() {
    window.scroll(0,0)
  }

}
