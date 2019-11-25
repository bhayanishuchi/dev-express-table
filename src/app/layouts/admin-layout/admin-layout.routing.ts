import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {DevExtremeComponent} from '../../dev-extreme/dev-extreme.component';
import {PrimeNgComponent} from '../../prime-ng/prime-ng.component';
import {AgGridComponent} from '../../ag-grid/ag-grid.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'dev',      component: DevExtremeComponent },
    { path: 'prime',      component: PrimeNgComponent },
    { path: 'ag',      component: AgGridComponent },

];
