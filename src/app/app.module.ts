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


@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDatabindingComponent,
    TdfFormComponent

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
