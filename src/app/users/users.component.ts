import { UsersService } from './_service/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../_model/user.model';
import { TSMap } from 'typescript-map';

@Component({
  selector: 'nr-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  resp: TSMap<string, number>;

  message_returned: string;
  id_returned: number;

  users: User[] = [];

  user_aux: User = { username: '', password: '', name: '' };

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.list().subscribe(data => this.users = data);
  }

  addUser(): void {
    if (this.user_aux.name !== '' && this.user_aux.username !== ''
      && this.user_aux.password !== '') {
      this._usersService.insert(this.user_aux).subscribe(data => {
        console.log('DATA USER ADDED');
        console.log(data);

        this.resp = data;

        const m: any[] = this.resp.map(function (value, key) {
          return key;
        });

        const i: any[] = this.resp.map(function (value, key) {
          return value;
        });

        this.message_returned = m[0];
        this.id_returned = i[0];

        alert(this.message_returned);

        this.user_aux.id = this.id_returned;

        this.users.push(this.user_aux);
        // clean
        this.user_aux = { username: '', password: '', name: '' };

      });
    } else {
      alert('No se ingresó nombre, nombre de usuario o contraseña del usuario, revise sus datos.');
    }

    // add to array.
  }

  deleteUser(index: number): void {
    this._usersService.delete(this.users[index]).subscribe(data => {
      if (data.status === 200) {
        alert('Usario eliminado correctamente');
        this.users.splice(index, 1);
      } else {
        alert('El usuario no pudo ser eliminado');
      }
    });

  }

}
