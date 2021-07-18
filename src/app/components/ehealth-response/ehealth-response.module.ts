import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponseTableComponent } from './response-table/response-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [ResponseTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [ResponseTableComponent]
})
export class EhealthResponseModule { }
