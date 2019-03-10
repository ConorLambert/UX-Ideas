import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputsGridComponent } from './inputs-grid/inputs-grid.component';
import { InputsSelectionComponent } from './inputs-selection/inputs-selection.component';
import { InputsPageComponent } from './inputs-page/inputs-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsGridComponent,
    InputsSelectionComponent,
    InputsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
