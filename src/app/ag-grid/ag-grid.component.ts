import {Component, OnInit, ViewChild} from '@angular/core';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import { AllModules } from "@ag-grid-enterprise/all-modules";
import {HttpClient} from '@angular/common/http';
import {AgGridAngular} from '@ag-grid-community/angular';


import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-enterprise/excel-export';

@Component({
    selector: 'app-ag-grid',
    templateUrl: './ag-grid.component.html',
    styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {

    @ViewChild('agGrid') agGrid: AgGridAngular;
    private gridApi111;
    columnDefs;
    gridApi;
    gridColumnApi;
    defaultColDef;
    rowSelection;
    rowData: any = [];
    modules = AllModules;

    // columnDefs = [
    //     {headerName: 'make', field: 'make', sortable: true, filter: true, checkboxSelection: true},
    //     {headerName: 'model', field: 'model', sortable: true, filter: true},
    //     {headerName: 'price', field: 'price', sortable: true, filter: true}
    // ];

    /*rowData = [{
        'athlete': 'Michael Phelps',
        'age': 23,
        'country': 'United States',
        'year': 2008,
        'date': '24/08/2008',
        'sport': 'Swimming',
        'gold': 8,
        'silver': 0,
        'bronze': 0,
        'total': 8
    },
        {
            'athlete': 'Michael Phelps',
            'age': 19,
            'country': 'United States',
            'year': 2004,
            'date': '29/08/2004',
            'sport': 'Swimming',
            'gold': 6,
            'silver': 0,
            'bronze': 2,
            'total': 8
        },
        {
            'athlete': 'Michael Phelps',
            'age': 27,
            'country': 'United States',
            'year': 2012,
            'date': '12/08/2012',
            'sport': 'Swimming',
            'gold': 4,
            'silver': 2,
            'bronze': 0,
            'total': 6
        },
        {
            'athlete': 'Natalie Coughlin',
            'age': 25,
            'country': 'United States',
            'year': 2008,
            'date': '24/08/2008',
            'sport': 'Swimming',
            'gold': 1,
            'silver': 2,
            'bronze': 3,
            'total': 6
        },
        {
            'athlete': 'Aleksey Nemov',
            'age': 24,
            'country': 'Russia',
            'year': 2000,
            'date': '01/10/2000',
            'sport': 'Gymnastics',
            'gold': 2,
            'silver': 1,
            'bronze': 3,
            'total': 6
        },
        {
            'athlete': 'Alicia Coutts',
            'age': 24,
            'country': 'Australia',
            'year': 2012,
            'date': '12/08/2012',
            'sport': 'Swimming',
            'gold': 1,
            'silver': 3,
            'bronze': 1,
            'total': 5
        },
        {
            'athlete': 'Missy Franklin',
            'age': 17,
            'country': 'United States',
            'year': 2012,
            'date': '12/08/2012',
            'sport': 'Swimming',
            'gold': 4,
            'silver': 0,
            'bronze': 1,
            'total': 5
        },
        {
            'athlete': 'Ryan Lochte',
            'age': 27,
            'country': 'United States',
            'year': 2012,
            'date': '12/08/2012',
            'sport': 'Swimming',
            'gold': 2,
            'silver': 2,
            'bronze': 1,
            'total': 5
        },
        {
            'athlete': 'Allison Schmitt',
            'age': 22,
            'country': 'United States',
            'year': 2012,
            'date': '12/08/2012',
            'sport': 'Swimming',
            'gold': 3,
            'silver': 1,
            'bronze': 1,
            'total': 5
        },
        {
            'athlete': 'Natalie Coughlin',
            'age': 21,
            'country': 'United States',
            'year': 2004,
            'date': '29/08/2004',
            'sport': 'Swimming',
            'gold': 2,
            'silver': 2,
            'bronze': 1,
            'total': 5
        },
        {
            'athlete': 'Ian Thorpe',
            'age': 17,
            'country': 'Australia',
            'year': 2000,
            'date': '01/10/2000',
            'sport': 'Swimming',
            'gold': 3,
            'silver': 2,
            'bronze': 0,
            'total': 5
        },
        {
            'athlete': 'Dara Torres',
            'age': 33,
            'country': 'United States',
            'year': 2000,
            'date': '01/10/2000',
            'sport': 'Swimming',
            'gold': 2,
            'silver': 0,
            'bronze': 3,
            'total': 5
        },
        {
            'athlete': 'Cindy Klassen',
            'age': 26,
            'country': 'Canada',
            'year': 2006,
            'date': '26/02/2006',
            'sport': 'Speed Skating',
            'gold': 1,
            'silver': 2,
            'bronze': 2,
            'total': 5
        },
        {
            'athlete': 'Nastia Liukin',
            'age': 18,
            'country': 'United States',
            'year': 2008,
            'date': '24/08/2008',
            'sport': 'Gymnastics',
            'gold': 1,
            'silver': 3,
            'bronze': 1,
            'total': 5
        },
        {
            'athlete': 'Marit Bjørgen',
            'age': 29,
            'country': 'Norway',
            'year': 2010,
            'date': '28/02/2010',
            'sport': 'Cross Country Skiing',
            'gold': 3,
            'silver': 1,
            'bronze': 1,
            'total': 5
        },
        {
            'athlete': 'Sun Yang',
            'age': 20,
            'country': 'China',
            'year': 2012,
            'date': '12/08/2012',
            'sport': 'Swimming',
            'gold': 2,
            'silver': 1,
            'bronze': 1,
            'total': 4
        }
    ];*/

    // modules = AllCommunityModules;

    constructor(private http: HttpClient) {
        this.columnDefs = [
            {
                field: 'athlete',
                width: 150,
                filter: 'agTextColumnFilter',
                checkboxSelection: function (params) {
                    return params.columnApi.getRowGroupColumns().length === 0;
                },
                headerCheckboxSelection: function (params) {
                    return params.columnApi.getRowGroupColumns().length === 0;
                }
            },
            {
                field: 'age',
                width: 90
            },
            {
                field: 'country',
                width: 120
            },
            {
                field: 'year',
                width: 90
            },
            {
                field: 'date',
                width: 110
            },
            {
                field: 'gold',
                width: 100
            },
            {
                field: 'silver',
                width: 100
            },
            {
                field: 'bronze',
                width: 100
            },
            {
                field: 'total',
                width: 100
            }
        ];
        this.defaultColDef = {
            sortable: true,
            resizable: true,
            enableValue: true,
            enableRowGroup: true,
            enablePivot: true
        };
    }

    ngOnInit() {
    }

    getBooleanValue(cssSelector) {
        return document.querySelector(cssSelector).checked === true;
    }

    onBtExport() {
        var params = {
            skipHeader: false, // this.getBooleanValue('#skipHeader'),
            columnGroups: false, // this.getBooleanValue('#columnGroups'),
            skipFooters: false, // this.getBooleanValue('#skipFooters'),
            skipGroups: false, // this.getBooleanValue('#skipGroups'),
            skipPinnedTop: false, // this.getBooleanValue('#skipPinnedTop'),
            skipPinnedBottom: false, // this.getBooleanValue('#skipPinnedBottom'),
            allColumns: false, // this.getBooleanValue('#allColumns'),
            onlySelected: false, // this.getBooleanValue('#onlySelected'),
            suppressQuotes: false, // this.getBooleanValue('#suppressQuotes'),
            fileName: 'abcd', // document.querySelector('#fileName').value,
            // columnSeparator:  document.querySelector('#columnSeparator').value
        };
        /*if (this.getBooleanValue('#skipGroupR')) {
            params.shouldRowBeSkipped = function (params) {
                return params.node.data.country.charAt(0) === 'R';
            };
        }
        if (this.getBooleanValue('#useCellCallback')) {
            params.processCellCallback = function (params) {
                if (params.value && params.value.toUpperCase) {
                    return params.value.toUpperCase();
                } else {
                    return params.value;
                }
            };
        }
        if (this.getBooleanValue('#useSpecificColumns')) {
            params.columnKeys = ['country', 'bronze'];
        }
        if (this.getBooleanValue('#processHeaders')) {
            params.processHeaderCallback = function (params) {
                return params.column.getColDef().headerName.toUpperCase();
            };
        }
        if (this.getBooleanValue('#processGroupHeaders')) {
            params.processGroupHeaderCallback = function (params) {
                return params.columnGroup.getColGroupDef().headerName.toUpperCase();
            };
        }
        if (this.getBooleanValue('#customHeader')) {
            params.customHeader = '[[[ This ia s sample custom header - so meta data maybe?? ]]]\n';
        }
        if (this.getBooleanValue('#customFooter')) {
            params.customFooter = '[[[ This ia s sample custom footer - maybe a summary line here?? ]]]\n';
        }*/
        this.gridApi111.exportDataAsCsv(params);
    }

    onExcelExport() {
        var params = {
            fileName: 'xyz',
            sheetName: 'd1',
            exportMode: '.xlsx', // document.querySelector('input[name="mode"]:checked').value
            columnSeparator: '' //document.querySelector("#columnSeparator").value
        };
        this.gridApi111.exportDataAsExcel(params);
    }

    getSelectedRows() {
        const selectedNodes = this.agGrid.api.getSelectedNodes();
        const selectedData = selectedNodes.map(node => node.data);
        const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
        alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridApi111 = params.api;
        this.gridColumnApi = params.columnApi;

        // this.http
        //     .get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json")
        //     .subscribe(data => {
        this.rowData = [{
            'athlete': 'Michael Phelps',
            'age': 23,
            'country': 'United States',
            'year': 2008,
            'date': '24/08/2008',
            'sport': 'Swimming',
            'gold': 8,
            'silver': 0,
            'bronze': 0,
            'total': 8
        }, {
            'athlete': 'Michael Phelps',
            'age': 19,
            'country': 'United States',
            'year': 2004,
            'date': '29/08/2004',
            'sport': 'Swimming',
            'gold': 6,
            'silver': 0,
            'bronze': 2,
            'total': 8
        }, {
            'athlete': 'Michael Phelps',
            'age': 27,
            'country': 'United States',
            'year': 2012,
            'date': '12/08/2012',
            'sport': 'Swimming',
            'gold': 4,
            'silver': 2,
            'bronze': 0,
            'total': 6
        }, {
            'athlete': 'Natalie Coughlin',
            'age': 25,
            'country': 'United States',
            'year': 2008,
            'date': '24/08/2008',
            'sport': 'Swimming',
            'gold': 1,
            'silver': 2,
            'bronze': 3,
            'total': 6
        }, {
            'athlete': 'Aleksey Nemov',
            'age': 24,
            'country': 'Russia',
            'year': 2000,
            'date': '01/10/2000',
            'sport': 'Gymnastics',
            'gold': 2,
            'silver': 1,
            'bronze': 3,
            'total': 6
        }];
        // });
    }
}
