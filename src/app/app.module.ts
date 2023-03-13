import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbThemeModule,
  NbIconModule,
  NbLayoutModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbSelectModule,
  NbInputModule,
} from '@nebular/theme';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterListComponent } from './components/filter-list/filter-list.component';
import { FilterItemComponent } from './components/filter-item/filter-item.component';
import { EventAttributeListComponent } from './components/event-attribute-list/event-attribute-list.component';
import { EventAttributeItemComponent } from './components/event-attribute-item/event-attribute-item.component';
import { FilterEffects } from './store/filter.effects';
import { filterReducer } from './store/filter.store';
import { eventReducer } from './store/event.store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilterListComponent,
    FilterItemComponent,
    EventAttributeListComponent,
    EventAttributeItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ filters: filterReducer, events: eventReducer }),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbEvaIconsModule,
    NbIconModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbSelectModule,
    NbInputModule,
    EffectsModule.forRoot([FilterEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
