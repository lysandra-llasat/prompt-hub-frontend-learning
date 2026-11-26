import { Component, inject, signal } from '@angular/core'
import { PromptCard } from '../prompt-card/prompt-card'
import { PromptService } from '../prompt-service'
import { prompt } from '../prompt.model'
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-prompt-list',
  imports: [PromptCard, AsyncPipe],
  templateUrl: './prompt-list.html',
  styleUrl: './prompt-list.scss',
})
export class PromptList {
 PromptService = inject(PromptService)

 prompts$ = this.PromptService.getPrompts()

 }
  
  

