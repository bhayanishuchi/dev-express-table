import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {AdminLayoutComponent} from './admin-layout.component';
import {DevExtremeComponent} from '../../dev-extreme/dev-extreme.component';
import {AgGridComponent} from '../../ag-grid/ag-grid.component';
import {PrimeNgComponent} from '../../prime-ng/prime-ng.component';
import {AgGridModule} from '@ag-grid-community/angular';
import {DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule} from 'devextreme-angular';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    AgGridModule.withComponents([]),
    DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    UpgradeComponent,
    DevExtremeComponent,
    AgGridComponent,
    PrimeNgComponent,
  ]
})

export class AdminLayoutModule {}
