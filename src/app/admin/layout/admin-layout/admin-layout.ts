import { Component } from '@angular/core';
import { DtNavbar } from "../../../community-front/components/dt-navbar/dt-navbar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, DtNavbar],
  templateUrl: './admin-layout.html',
  styles: ``
})
export class AdminLayout {

}
