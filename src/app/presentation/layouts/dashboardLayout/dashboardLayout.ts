import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from '../../../app.routes';
import { SidebarMenuItem } from '../../components/sidebarMenuItem/sidebarMenuItem';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet, SidebarMenuItem],
  templateUrl: './dashboardLayout.html',
})
export class DashboardLayout {
  public routes = routes[0].children?.filter((route) => route.data) || [];
}
