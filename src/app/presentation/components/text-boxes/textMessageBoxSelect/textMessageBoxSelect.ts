import { Component, input, output, signal } from '@angular/core';
import { form, required, FormRoot, FormField } from '@angular/forms/signals';

interface option {
  id: string;
  txt: string;
}

export interface TextMessageBoxEvent {
  message: string;
  selectedOption: option;
}

@Component({
  selector: 'app-text-message-box-select',
  imports: [FormRoot, FormField],
  templateUrl: './textMessageBoxSelect.html',
})
export class TextMessageBoxSelect {
  placeholder = input<string>('');
  options = input.required<option[]>();
  onMessage = output<TextMessageBoxEvent>();

  readonly messageFormModel = signal({
    message: '',
    selectedOption: { id: '', txt: '' } as option,
  });
  readonly messageForm = form(
    this.messageFormModel,
    (f) => {
      required(f.message, { message: 'El mensaje es obligatorio' });
      required(f.selectedOption, { message: 'Debe seleccionar una opción' });
    },
    {
      submission: {
        action: async () => {
          const message = this.messageFormModel().message.trim();

          this.onMessage.emit({ message, selectedOption: this.messageFormModel().selectedOption });
          this.messageFormModel.set({ message: '', selectedOption: { id: '', txt: '' } });

          return undefined;
        },
      },
    },
  );
}
