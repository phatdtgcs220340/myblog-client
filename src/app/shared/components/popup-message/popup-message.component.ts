import { Component, Input } from '@angular/core';
import { PopupMessageType } from '../../models/types/constants.type';

/**
 * Pop up message
 * @author Phat Do 08/09/2024
 */
@Component({
  selector: 'app-popup-message',
  standalone: true,
  imports: [],
  templateUrl: './popup-message.component.html'
})
export class PopupMessageComponent {
  @Input() message : string = ''
  @Input() type : PopupMessageType = 'SUCCESS'
  MESSAGE_MAP : Map<PopupMessageType, string> = new Map([
    ['ERROR', 'bg-red-300 border-red-200 text-red-600'],
    ['SUCCESS', 'bg-green-300 border-green-200 text-green-600']
  ])

}

export interface PopupMessage {
  message : string,
  type : PopupMessageType
}
