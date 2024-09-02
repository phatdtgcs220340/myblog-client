import { Component, OnInit } from '@angular/core';
import { Reply } from '../../../models/interfaces/responses.interface';
import { ReplySingleComponent } from '../reply-single/reply-single.component';
import { ReplyService } from '../../../../core/services/resources/replies/reply.service';

@Component({
  selector: 'app-reply-card',
  standalone: true,
  imports: [ReplySingleComponent],
  templateUrl: './reply-card.component.html',
  styleUrl: './reply-card.component.css'
})
export class ReplyCardComponent implements OnInit{
  replies : Array<Reply> = []

  constructor(private replyService: ReplyService) {}

  ngOnInit(): void {
    this.replyService.getAllFromBlog(1).subscribe({
      next : r => this.replies = r
    })
  }

}
