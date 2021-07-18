import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { BackendService } from '@app/services/backendService.service';
import { ResponseTableDataSource, ResponseTableItem } from '@app/components/ehealth-response/response-table/response-table-datasource';

@Component({
  selector: 'response-table',
  templateUrl: './response-table.component.html',
  styleUrls: ['./response-table.component.css']
})
export class ResponseTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ResponseTableItem>;
  dataSource: ResponseTableDataSource;


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'patientID','method','signed','returnMsg','message','code'];

  constructor( protected backendService: BackendService,private changeDetectorRefs: ChangeDetectorRef){

  }

  ngOnInit() {
      this.refresh();
  }

  ngAfterViewInit() {
    this.dataSource = new ResponseTableDataSource(this.backendService);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.dataSource.getData(this);
    this.refresh();
  }

  refresh() {
      this.changeDetectorRefs.detectChanges();
  }
}
