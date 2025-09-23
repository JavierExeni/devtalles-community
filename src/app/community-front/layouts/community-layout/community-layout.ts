import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DtNavbar } from "../../components/dt-navbar/dt-navbar";
import { DtFooter } from "../../components/dt-footer/dt-footer";

@Component({
  selector: 'app-community-layout',
  imports: [RouterOutlet, DtNavbar, DtFooter],
  templateUrl: './community-layout.html',
  styles: ``
})
export class CommunityLayout {

}
