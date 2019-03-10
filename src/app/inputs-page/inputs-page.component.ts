import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inputs-page',
  templateUrl: './inputs-page.component.html',
  styleUrls: ['./inputs-page.component.css']
})
export class InputsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  // Configurations/Alv/Inputs
  get previousRoute() {
    return ['Configurations'];
  }
  get currentActivatedRoute() {
    return "Inputs";
  }
  get tabs() {
    return ['Selection', 'History'];
  }
  get selectionViews() {
    return ['Grid', 'Files'];
  }
  get navigationItems() {
    return ['Queue', 'RunGroup', 'Configurations', 'Calendar', 'Results', 'SignOff'];
  }
  get version() {
    return '2018.2.03';
  }
  get server() {
    return 'DUB-HEGPLAT-D02';
  }
}
