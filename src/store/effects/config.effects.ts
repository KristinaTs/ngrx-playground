import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EConfigActions, GetConfig, GetConfigSuccess} from '../actions/config.actions';
import {switchMap} from 'rxjs/operators';
import {IConfig} from '../../models/config.interface';
import {of} from 'rxjs';

@Injectable()
export class ConfigEffects {
    @Effect()
    getConfig$ = this._actions$.pipe(
        ofType<GetConfig>(EConfigActions.GetConfig),
        switchMap(() => this._configService.getConfig()),
        switchMap((config: IConfig) => {
            return of(new GetConfigSuccess(config));
        })
    );

    constructor(
        private _actions$: Actions,
        private _configService: ConfigService
    ){}
}
