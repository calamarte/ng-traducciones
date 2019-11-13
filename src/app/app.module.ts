import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LyThemeModule, LY_THEME, LyCommonModule } from '@alyle/ui';
import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { LyTypographyModule } from '@alyle/ui/typography';
import { LyCardModule } from '@alyle/ui/card';
import { LyTabsModule } from '@alyle/ui/tabs';
import { LyDialogModule } from '@alyle/ui/dialog';
import { LyGridModule } from '@alyle/ui/grid';
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LyThemeModule.setTheme('minima-dark'),
    LyCommonModule,
    LyCardModule,
    LyButtonModule,
    LyIconModule,
    LyTypographyModule,
    LyTabsModule,
    LyDialogModule,
    LyGridModule
  ],
  providers: [{ provide: LY_THEME, useClass: MinimaLight, multi: true }, { provide: LY_THEME, useClass: MinimaDark, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
