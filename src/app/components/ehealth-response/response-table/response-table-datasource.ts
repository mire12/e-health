import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { BackendService } from '@app/services/backendService.service';
import { ResponseTableComponent } from '@app/components/ehealth-response/response-table/response-table.component';

// TODO: Replace this with your own data model type
export class ResponseTableItem {
  id: number;
	patientID : string;
  returnMsg: string;
  doctorID: string;
  signed: string;
  message: string;
  detail: string;
  method: string;
  code: string;
}




/**
 * Data source for the ResponseTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ResponseTableDataSource extends DataSource<ResponseTableItem> {

  data: Array<ResponseTableItem> = [];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(protected backendService: BackendService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ResponseTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ResponseTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ResponseTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.id, b.patientID, isAsc);
        case 'id': return compare(+a.id, +b.patientID, isAsc);
        default: return 0;
      }
    });
  }

  public getData(resp: ResponseTableComponent){
    this.backendService
            .getEhealthResponses('s9dygu', '00074533134')
            .subscribe((response: ResponseTableItem[]) => {
              if (response) {
                this.data.push.apply( this.data, response);
                resp.refresh();
                this.paginator._changePageSize(this.paginator.pageSize);
              } else {

              }
            });
  }

}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}



