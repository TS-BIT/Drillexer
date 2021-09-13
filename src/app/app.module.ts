import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { ConvertToPipe } from './pipes/convert-to.pipe';
import { PipesConvertToSpacePipe } from './pipes/pipes-convert-to-space.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConvertToPipe,
    PipesConvertToSpacePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
