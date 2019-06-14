import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Models/IUser';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  types: any[] = [
    {value: 'student'},
    {value: 'teacher'}
  ];
  genders: any[] = [
    {value: 'male'},
    {value: 'female'}
  ];

  addressForm = this.fb.group({
    realname: [null, Validators.required],
    gender: [null, Validators.required],
    password: [null, Validators.required],
    telephone: [null, Validators.required],
    type: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private userService: UserService, private snackBac: MatSnackBar, private router: Router) { }

  onSubmit() {
    if (this.addressForm.valid) {
      const user: IUser = this.addressForm.value;
      this.userService.addUser(user).subscribe(td => {
        this.snackBac.open('Successful!', 'Close', { duration: 5000 });
        this.router.navigate(['/UserTabel']);
      }
      );
    }
  }
}
