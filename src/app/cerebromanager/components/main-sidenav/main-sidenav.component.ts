import { Component, OnInit ,NgZone } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT =720;
@Component({
  selector: 'app-main-sidenav',
  templateUrl: './main-sidenav.component.html',
  styleUrls: ['./main-sidenav.component.css']
})
export class MainSidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  constructor(zone: NgZone ) {
this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));

   }

  ngOnInit() {
  }
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
opened:boolean;
  toggleMenu(){

    this.opened = !this.opened;
  }
isScreenSmall(): boolean {
  return this.mediaMatcher.matches;
}

}
