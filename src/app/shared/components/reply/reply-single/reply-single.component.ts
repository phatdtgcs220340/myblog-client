import { Component, Input } from '@angular/core';
import { Reply } from '../../../models/interfaces/responses.interface';

@Component({
  selector: 'app-reply-single',
  standalone: true,
  imports: [],
  templateUrl: './reply-single.component.html',
  styleUrl: './reply-single.component.css'
})
export class ReplySingleComponent {
 @Input() reply : Reply = {
   userId: 0,
   username: '',
   avatar: '',
   content: '',
   dateAudit: '',
   id: 0,
   totalLikes: 0
 }
}
