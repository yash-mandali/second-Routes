import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chatbotservice } from '../../services/chatbotservice';
import { CommonModule } from '@angular/common';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

@Component({
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css',
})
export class Chatbot {

  prompt = signal('');
  loading = signal(false);

  messages = signal<Message[]>([]);

  @ViewChild('chatWindow') chatWindow!: ElementRef;

  constructor(private chatbot: Chatbotservice) { }

  handlesubmit() {

    const text = this.prompt().trim();

    if (!text || this.loading()) return;

    /* Add User Message */
    this.messages.update(m => [
      ...m,
      { role: 'user', text }
    ]);

    this.prompt.set('');
    this.loading.set(true);

    this.scrollBottom();

    this.chatbot.generateResponse(text).subscribe({

      next: (res: any) => {

        const aiText =
          res?.candidates?.[0]?.content?.parts?.[0]?.text
          || "No response";

        /* Add Bot Message */ 
        this.messages.update(m => [
          ...m,
          { role: 'bot', text: aiText }
        ]);
        console.log(res.error.message);

        this.loading.set(false);

        this.scrollBottom();
      },

      error: () => {

        this.messages.update(m => [
          ...m,
          { role: 'bot', text: 'Api not found' }
        ]);

        this.loading.set(false);

        this.scrollBottom();
      }
    });
  }

  private scrollBottom() {

    setTimeout(() => {
      if (this.chatWindow) {
        this.chatWindow.nativeElement.scrollTop =
          this.chatWindow.nativeElement.scrollHeight;
      }
    }, 50);
  }

}
