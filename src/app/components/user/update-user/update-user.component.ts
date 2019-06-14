import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from '../user-table/user-table.component';
import { IUser } from 'src/app/Models/IUser';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {
  addressForm = this.fb.group({
    realname: [null, null],
    gender: [null, null],
    password: [null, null],
    telephone: [null, null],
    type: [null, null],
    status: [null, null],
  });

  types: any[] = [
    {value: 'student'},
    {value: 'teacher'}
  ];
  genders: any[] = [
    {value: 'male'},
    {value: 'female'}
  ];


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    private userService: UserService,
    private snackBac: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateUserComponent>
  ) { }


  onSubmit() {
    if (this.addressForm.valid) {
      const user: IUser = this.addressForm.value;
      user.id = this.data.user.id;
      this.userService.updateUser(user).subscribe(td => {
        this.snackBac.open('Successful!', 'Close', { duration: 5000 });
        this.dialogRef.close();
      });
    }
  }
}
