import { Component } from '@angular/core';
import { Reply } from '../../../models/interfaces/responses.interface';
import { ReplySingleComponent } from '../reply-single/reply-single.component';

@Component({
  selector: 'app-reply-card',
  standalone: true,
  imports: [ReplySingleComponent],
  templateUrl: './reply-card.component.html',
  styleUrl: './reply-card.component.css'
})
export class ReplyCardComponent {
  replies : Array<Reply> = [{
    userId: 0,
    username: 'dotanphat',
    avatar: 'https://static.vecteezy.com/system/resources/previews/013/360/247/original/default-avatar-photo-icon-social-media-profile-sign-symbol-vector.jpg',
    content: 'Lorem ipsum hahah'
  }]
}
