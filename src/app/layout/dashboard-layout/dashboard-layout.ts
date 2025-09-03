import { Component } from '@angular/core';

import { Header } from "../../shared/header/header";
import { Sidebar } from "../../shared/sidebar/sidebar";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-dashboard-layout',
  imports: [Header, Sidebar, RouterModule],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.scss'
})
export class DashboardLayout {
  
}
