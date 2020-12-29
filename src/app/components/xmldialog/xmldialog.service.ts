import { Injectable } from '@angular/core';
import {Component, Inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { XmlDialogComponent } from './xmldialog.component';
import * as xml2js from 'xml2js';

@Injectable()
export class XmlDialogService {
    public isDialogOpen: Boolean = false;
    constructor(public dialog: MatDialog) { }
    openDialog(data): any {
        if (this.isDialogOpen) {
            return false;
        }

        xml2js.parseString( data, function (err, result) {
          data = result; // Prints JSON object!

        });

        this.isDialogOpen = true;
        const dialogRef = this.dialog.open(XmlDialogComponent, {
            width: '700px',
            data: data
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.isDialogOpen = false;
            let animal;
            animal = result;
        });
    }
}
