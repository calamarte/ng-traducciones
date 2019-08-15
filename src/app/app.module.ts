import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LyThemeModule, LY_THEME } from '@alyle/ui';
import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { LyTypographyModule } from '@alyle/ui/typography';
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LyThemeModule.setTheme('minima-light'),
    LyButtonModule,
    LyIconModule,
    LyTypographyModule
  ],
  providers: [{ provide: LY_THEME, useClass: MinimaLight, multi: true }, { provide: LY_THEME, useClass: MinimaDark, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
