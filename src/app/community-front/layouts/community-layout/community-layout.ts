import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DtNavbar } from "../../components/dt-navbar/dt-navbar";

@Component({
  selector: 'app-community-layout',
  imports: [RouterOutlet, DtNavbar],
  templateUrl: './community-layout.html',
  styles: ``
})
export class CommunityLayout {

}
