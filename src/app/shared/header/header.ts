import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from "@angular/material/list";


@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatListModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
menuClick: any;
toggleSidebar() {
  
throw new Error('Method not implemented.');
}

}