import { Component, OnInit, ViewChild } from '@angular/core';

import { Service, Company } from '../services/data.services';
import {DxDataGridComponent} from 'devextreme-angular';

@Component({
  selector: 'app-dev-extreme',
  templateUrl: './dev-extreme.component.html',
  styleUrls: ['./dev-extreme.component.scss'],
  providers: [Service],
  preserveWhitespaces: true,

})
export class DevExtremeComponent implements OnInit {
  @ViewChild(DxDataGridComponent ) dataGrid: DxDataGridComponent;
  // orders: Company[];
  saleAmountHeaderFilter: any;
  applyFilterTypes: any;
  currentFilter: any;
  showFilterRow: boolean;
  showHeaderFilter: boolean;
  dataSource: Company[];
  window: any;

  constructor(service: Service) {
    this.dataSource = service.getCompanies();
    this.showFilterRow = true;
    this.showHeaderFilter = true;
    this.applyFilterTypes = [{
      key: "auto",
      name: "Immediately"
    }, {
      key: "onClick",
      name: "On Button Click"
    }];
    this.saleAmountHeaderFilter = [{
      text: "Less than $3000",
      value: ["SaleAmount", "<", 3000]
    }, {
      text: "$3000 - $5000",
      value: [
        ["SaleAmount", ">=", 3000],
        ["SaleAmount", "<", 5000]
      ]
    }, {
      text: "$5000 - $10000",
      value: [
        ["SaleAmount", ">=", 5000],
        ["SaleAmount", "<", 10000]
      ]
    }, {
      text: "$10000 - $20000",
      value: [
        ["SaleAmount", ">=", 10000],
        ["SaleAmount", "<", 20000]
      ]
    }, {
      text: "Greater than $20000",
      value: ["SaleAmount", ">=", 20000]
    }];
    this.currentFilter = this.applyFilterTypes[0].key;
    this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
  }

  private static getOrderDay(rowData) {
    return (new Date(rowData.OrderDate)).getDay();
  }

  calculateFilterExpression(value, selectedFilterOperations, target) {
    let column = this as any;
    if(target === "headerFilter" && value === "weekends") {
      return [[DevExtremeComponent.getOrderDay, "=", 0], "or", [DevExtremeComponent.getOrderDay, "=", 6]];
    }
    return column.defaultCalculateFilterExpression.apply(this, arguments);
  }

  onCellPrepared(e) {
    if (e.rowType === 'data') {

        if (e.column.dataField === 'CompanyName') {
          e.cellElement.style.fontWeight = 'bold';
        }
        if (e.column.dataField === 'Phone') {
          e.cellElement.style.color = '#000000';

      }

    }
  }
  customizeExcelCell(options) {
    var gridCell = options.gridCell;
    if(!gridCell) {
      return;
    }
    if(gridCell.rowType === 'data') {
        if(gridCell.column.dataField === 'CompanyName') {
          options.font.bold = true;
        }
        if(gridCell.column.dataField === 'Phone') {
          options.backgroundColor = '#FFBB00';
          options.font.color = '#000000';

      }
    }


  }

  orderHeaderFilter(data) {
    data.dataSource.postProcess = (results) => {
      results.push({
        text: "Weekends",
        value: "weekends"
      });
      return results;
    };
  }

  clearFilter() {
    this.dataGrid.instance.clearFilter();
  }

  ngOnInit() {
  }


}










