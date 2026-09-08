import { Component, input, output, signal } from '@angular/core';
import { form, required, FormField, FormRoot } from '@angular/forms/signals';

export interface MessageWithFiles {
  message: string;
  files: File[];
}

@Component({
  selector: 'app-text-messagebox-file',
  imports: [FormField, FormRoot],
  templateUrl: './textMessageboxFile.html',
})
export class TextMessageboxFile {
  placeholder = input<string>('');
  disabledCorrections = input<boolean>(false);
  onMessage = output<MessageWithFiles>();

  readonly messageFormModel = signal({
    message: '',
    file: null as File | null,
  });
  readonly messageForm = form(this.messageFormModel, {
    submission: {
      action: async () => {
        const message = this.messageFormModel().message.trim();

        this.onMessage.emit({ message, files: this.files() });
        this.messageFormModel.set({ message: '', file: null });

        return undefined;
      },
    },
  });

  public files = signal<File[]>([]);

  handleSelectedFiles(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const selectedFiles = Array.from(input.files);
      this.files.set(selectedFiles);
    }
    console.log('input->', this.files());
  }
}
