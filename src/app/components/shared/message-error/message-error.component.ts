import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrl: './message-error.component.scss'
})
export class MessageErrorComponent {
  @Input() message: string = '';
  @Input() condicional: any;
}
