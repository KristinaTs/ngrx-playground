import {Action} from '@ngrx/store';
import {ICity} from '../state/cities.state';

export enum ECitiesActions {
    GetCities = '[Cities] Get Cities',
    GetCitiesSuccess = '[Cities] Get Cities Success',
}

export class GetCities implements Action {
    public readonly type = ECitiesActions.GetCities;
}

export class GetCitiesSuccess implements  Action {
    public readonly type = ECitiesActions.GetCitiesSuccess;
    constructor(public payload: ICity[]) {}
}

export type CitiesActions = GetCities | GetCitiesSuccess;
