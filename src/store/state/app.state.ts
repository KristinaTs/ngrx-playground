import {RouterReducerState} from '@ngrx/router-store';
import {initialUserState, IUserState} from './user.state';
import {IConfigState, initialConfigState} from './config.state';
import {ICitiesState, initialCitiesState} from './cities.state';

export interface IAppState {
    router?: RouterReducerState;
    users: IUserState;
    config: IConfigState;
    cities: ICitiesState;
}

export const initialAppState: IAppState = {
    users: initialUserState,
    config: initialConfigState,
    cities: initialCitiesState
};

export function getInitialState(): IAppState {
    return initialAppState;
}
