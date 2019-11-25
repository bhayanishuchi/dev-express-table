import {Component, OnInit, ViewChild} from '@angular/core';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import {HttpClient} from '@angular/common/http';
import {AgGridAngular} from '@ag-grid-community/angular';
@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridAngular;

  columnDefs = [
    {headerName: 'make', field: 'make', sortable: true, filter: true, checkboxSelection: true },
    {headerName: 'model', field: 'model', sortable: true, filter: true },
    {headerName: 'price', field: 'price', sortable: true, filter: true }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  modules = AllCommunityModules;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    /*this.http.get('https://api.myjson.com/bins/15psn9')
        .subscribe((res) => {
          console.log('res', res)
        }, error => {
          console.log('err', error)
        });*/
  }
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }


}
