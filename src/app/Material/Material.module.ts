import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule


  ],
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule

  ],
  declarations: []
})
export class MaterialModule { }
