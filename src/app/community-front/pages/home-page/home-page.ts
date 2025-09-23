import { Component } from '@angular/core';
import { Banner } from "../../components/dt-banner/dt-banner";
import { FilterForm } from "../../components/dt-filter-form/dt-filter-form";
import { DtPostList } from "../../components/dt-post-list/dt-post-list";

@Component({
  selector: 'app-home-page',
  imports: [Banner, FilterForm, DtPostList],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
