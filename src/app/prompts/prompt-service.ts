import { inject, Injectable } from '@angular/core';
import { prompt } from './prompt.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PromptService {

  private readonly httpClient = inject(HttpClient);
  baseUrl = environment.apiUrl + 'prompts'

  getPrompts(): Observable<prompt[]> {
    return this.httpClient.get<prompt[]>(this.baseUrl);
  }
}