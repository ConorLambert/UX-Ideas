import { Component, OnInit } from '@angular/core';
import { TestDataService } from '../test-data.service';

@Component({
  selector: 'inputs-selection',
  templateUrl: './inputs-selection.component.html',
  styleUrls: ['./inputs-selection.component.css']
})
export class InputsSelectionComponent implements OnInit {

  configInputConfigSets: ConfigInputConfigSet[];

  constructor(private testDataService: TestDataService) { }

  ngOnInit() {
    this.configInputConfigSets = [
      // Mort. Rates Male and Female
      // input name is the only difference (both point at the same model param input)
      new ConfigInputConfigSet(1,27,7, 1,5),
      new ConfigInputConfigSet(1,27,7, 2,5),
      // multiple different select factors for same product-runtype
      // same input type but pointing at two different input files
      new ConfigInputConfigSet(1,28,8, 5,8),
      new ConfigInputConfigSet(1,28,8, 5,9),
      // random unqiue ones
      new ConfigInputConfigSet(1,32,8, 7,12),
      new ConfigInputConfigSet(1,29,7, 8,13),
      new ConfigInputConfigSet(1,37,7, 10,16),
    ]
  }

  get products(): string[] {
    let distinctIds = Array.from(new Set(this.configInputConfigSets.map(x => x.productId)));
    return distinctIds.map(id => this.testDataService.productsCollection.find(x => x.id === id).name);
  }

  get runTypes(): string[] {
    let distinctIds = Array.from(new Set(this.configInputConfigSets.map(x => x.runTypeId)));
    return distinctIds.map(id => this.testDataService.runTypesCollection.find(x => x.id === id).name);
  }

}

export class ConfigInputConfigSet {
  
  constructor(configSetId,productId,runTypeId,inputNameId,modelParamId) {
    this.configSetId = configSetId;
    this.productId = productId;
    this.runTypeId = runTypeId;
    this.inputNameId = inputNameId;
    this.modelParamId = modelParamId;
  }

  configSetId: number;
  productId: number;
  runTypeId: number;
  inputNameId: number;
  modelParamId: number;
}