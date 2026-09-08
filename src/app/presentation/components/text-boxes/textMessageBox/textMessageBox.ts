import { Component, input, output, signal } from '@angular/core';
import { form, required, FormRoot, FormField } from '@angular/forms/signals';
@Component({
  selector: 'app-text-message-box',
  imports: [FormRoot, FormField],
  templateUrl: './textMessageBox.html',
})
export class TextMessageBox {
  placeholder = input<string>('');
  disabledCorrections = input<boolean>(false);
  onMessage = output<string>();

  readonly messageFormModel = signal({
    message: '',
  });
  readonly messageForm = form(this.messageFormModel, (f) => {
    required(f.message, { message: 'El mensaje es obligatorio' });
  }, {
    submission: {
      action: async () => {
        const message = this.messageFormModel().message.trim();

        this.onMessage.emit(message);
        this.messageFormModel.set({ message: '' });

        return undefined;
      },
    },
  });
}
