import { Component, Input, OnInit } from '@angular/core';
import { Reply } from '../../../models/interfaces/responses.interface';
import { ReplySingleComponent } from '../reply-single/reply-single.component';
import { ReplyService } from '../../../../core/services/resources/replies/reply.service';
import { UploadReplyForm } from '../../../models/interfaces/requests.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reply-card',
  standalone: true,
  imports: [ReplySingleComponent, FormsModule],
  templateUrl: './reply-card.component.html',
  styleUrl: './reply-card.component.css'
})
export class ReplyCardComponent implements OnInit{
  replies : Array<Reply> = []
  @Input() blogId : number = 0;
  form : UploadReplyForm = {
    content : '',
    blogId : 0
  }
  constructor(private replyService: ReplyService) {}

  ngOnInit(): void {
    this.form.blogId = this.blogId
    this.replyService.getAllFromBlog(this.blogId).subscribe({
      next : r => this.replies = r
    })
  }

  reply(event : Event) {
    event.preventDefault()
    this.replyService.uploadReply(this.form).subscribe({
      next : () => this.ngOnInit()
    })
  }
}
