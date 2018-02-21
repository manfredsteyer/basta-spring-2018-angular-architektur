import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from './controls.component';
import { TabComponent } from './tab/tab.component';
import { TabbedPaneComponent } from './tabbed-pane/tabbed-pane.component';
import { NavComponent } from './nav/nav.component';
import { BadComponent } from './bad/bad.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ControlsComponent,
    TabComponent,
    TabbedPaneComponent,
    NavComponent,
    BadComponent
],
  exports: [
    TabComponent,
    TabbedPaneComponent,
    BadComponent
  ]
})
export class ControlsModule { }