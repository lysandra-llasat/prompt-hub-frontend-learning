import { Component, input } from '@angular/core'
import { prompt } from '../prompt.model'
import { ButtonModule } from 'primeng/button';
import { Textarea } from 'primeng/textarea';
import { Tag } from 'primeng/tag';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-prompt-card',
  imports: [
    ButtonModule,
    Textarea,
    Tag,
    Card
  ],
  templateUrl: './prompt-card.html',
  styleUrl: './prompt-card.scss',
})
export class PromptCard {
  prompt =input.required<prompt>()

  copyToClipboard(){
   void navigator.clipboard.writeText(this.prompt().content)
  }

}
