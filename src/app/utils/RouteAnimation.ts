import { trigger, transition, animate, style, query, group } from '@angular/animations';

export const routeAnimation =
  trigger('routeAnimation', [
    transition(':enter', [
      style({
        position: 'absolute'
      }),
      animate('0.3s ease-in-out')
    ]),
    transition('* => *', [
      query(':leave', style({ transform: 'translateX(0)', position: 'absolute', width: '100%', height: '100%' }), { optional: true }),
      query(':enter', style({ transform: 'translateX(100%)', position: 'absolute', width: '100%', height: '100%'}), { optional: true }),

      group([
        query(':leave', animate('0.3s ease-in-out', style({transform: 'translateX(-100%)', width: '100%', height: '100%'})),
         { optional: true }),
        query(':enter', animate('0.3s ease-in-out', style({transform: 'translateX(0)', width: '100%', height: '100%'})), { optional: true })
      ])
    ])
  ]);
