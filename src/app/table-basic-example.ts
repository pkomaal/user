import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface PeriodicElement {

  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  status: string;
  
 }

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: '1',
    email: 'alekp@opin.com',
    firstName: 'Chris Zaugg',
    lastName:'R',
    role: 'ABC',
    status: 'Active'}
  
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email','status','role','actions'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(UserDialog, {
      width: '450px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'user-dialog',
  templateUrl: 'dialog.html',
})
export class UserDialog {
  constructor(
    public dialogRef: MatDialogRef<UserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
