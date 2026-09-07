import { Component, input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu-item',
  imports: [RouterLink, RouterModule],
  templateUrl: './sidebarMenuItem.html',
})
export class SidebarMenuItem {
  icon = input<string>();
  title = input<string>();
  description = input<string>();
  path = input<string>();
}
