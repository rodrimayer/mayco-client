import { Component, OnInit } from '@angular/core';

import { MailService } from './_service/mail.service';
import { Mail } from '../../_model/mail.model';

@Component({
  selector: 'nr-mail',
  templateUrl: './mail.component.html'
})
export class MailComponent implements OnInit {

  resp = '';
  error = '';
  constructor(private _mailService: MailService) { }

  ngOnInit() {
  }

  send(name: string, email: string,
    subject: string, text: string): void {
    if (name !== '' && email !== '' && subject !== '' && email !== '') {

      this.error = '';
      this.resp = 'Enviando...';

      console.log(name);
      console.log(email);
      console.log(subject);
      console.log(text);

      // control de required o que cada cadena sea no vacia

      const mail: Mail = new Mail({
        subject: name + ' - ' + subject,
        text: text + ' - ' + email
      });

      console.log(mail.to);

      this._mailService.send(mail).subscribe(
        data => {
          this.resp = data.text();
          this.error = '';
        },
        error => {
          this.error = 'El mail no pudo ser enviado.';
          this.resp = '';
        }
      );
    }

  }
}
