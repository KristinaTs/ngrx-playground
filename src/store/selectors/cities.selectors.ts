import {IAppState} from '../state/app.state';
import {createSelector} from '@ngrx/store';
import {ICitiesState} from '../state/cities.state';

const selectCities = (state: IAppState) => state.cities;

export const selectCitiesList = createSelector(
    selectCities,
    (state: ICitiesState) => state.cities
);

