// import { AfterViewInit, Component } from '@angular/core';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { routeAnimation } from 'src/app/utils/RouteAnimation';
// import { Router, NavigationEnd } from '@angular/router';

// @Component({
//   selector: 'app-nav',
//   templateUrl: './nav.component.html',
//   styleUrls: ['./nav.component.scss'],
//   animations: [routeAnimation]
// })
// export class NavComponent implements AfterViewInit {

//   // tslint:disable-next-line:no-inferrable-types
//   routerState: boolean = true;

//   // tslint:disable-next-line:no-inferrable-types
//   routerStateCode: string = 'active';

//   isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
//     .pipe(
//       map(result => result.matches)
//     );

//   constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
//     this.router.events.subscribe(event => {
//       if (event instanceof NavigationEnd) {
//         // 每次路由跳转改变状态
//         this.routerState = !this.routerState;
//         this.routerStateCode = this.routerState ? 'active' : 'inactive';
//       }
//     });
//   }

//   ngAfterViewInit() {
//     console.log(2);
//   }

// }
import { AfterViewInit, Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit {


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngAfterViewInit() {
    // console.log('');
  }

}
