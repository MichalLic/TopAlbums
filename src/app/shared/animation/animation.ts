import {animate, style, transition, trigger} from '@angular/animations';

export const CustomAnimation = trigger('enterAnimation', [
  transition(':enter', [
    style({transform: 'scale(0.5)', opacity: 0}),
    animate('1.2s cubic-bezier(.8, -0.6, 0.2, 1.5)',
      style({transform: 'scale(1)', opacity: 1})),
  ]),
]);
