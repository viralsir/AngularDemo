import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TdfFormComponent } from './tdf-form/tdf-form.component';
import { MdfComponent } from './mdf/mdf.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { StudententryComponent } from './studententry/studententry.component';
import { StudentviewComponent } from './studentview/studentview.component';


@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDatabindingComponent,
    TdfFormComponent,
    MdfComponent,
    NgifComponent,
    NgForComponent,
    StudententryComponent,
    StudentviewComponent

  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
