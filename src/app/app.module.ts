import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {appReducers} from '../store/reducers/app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from '../store/effects/user.effects';
import {ConfigEffects} from '../store/effects/config.effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import { UsersComponent } from './users/users.component';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([UserEffects, , ConfigEffects]),
        StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
