import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {

  constructor() { }

  public productsCollection = [
    new Product(27,	'D_HL_RENRP'),
    new Product(28,	'D_HL_RENSP'),
    new Product(29,	'DRENRP'),
    new Product(30,	'DRENSP'),
    new Product(31,	'D_HL_KAOTH'),
    new Product(32,	'DKAGRU'),
    new Product(33,	'DKAOTH'),
    new Product(34,	'DKAVBG'),
    new Product(35,	'P_BUN'),
    new Product(36,	'P_HL_BUN'),
    new Product(37,	'P_HL_Risk'),
    new Product(38,	'D_RISK'),
    new Product(39,	'D_RSV'),
    new Product(40,	'D_FRV'),
    new Product(41,	'D_HL_FRV'),
    new Product(42,	'D_HL_FRV97'),
    new Product(43,	'DFLV97'),
    new Product(44,	'ALV_Diff_Src'),
    new Product(45,	'ALV_Diff_Src2'),
    new Product(46,	'ALV-All-Products-Source1'),
  ];

  public runTypesCollection = [
    new RunType(7, 'SII - Base Reserve'),
    new RunType(8, 'SII - Sensitivities'),
    new RunType(9, 'SII - SCR'),
    new RunType(10, 'SII - Attribution')
  ];
}

export class Product {
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  id: number;
  name: string;
}

export class RunType {
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  id: number;
  name: string;
}

export class Selections {
  selectedProducts: number[];
  selectedRunTypes: number[];
}



