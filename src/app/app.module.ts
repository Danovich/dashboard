import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShellComponent } from './components/shell/shell.component';
import { EntrieComponent } from './components/shell/entrie/entrie.component';
import { EntrieItemComponent } from './components/shell/entrie/entrie-item/entrie-item.component';
import { FilterComponent } from './components/shell/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntrieComponent,
    EntrieItemComponent,
    FilterComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
